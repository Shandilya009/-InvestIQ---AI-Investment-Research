import axios from "axios";

const ALPHA_VANTAGE_BASE_URL = "https://www.alphavantage.co/query";

/**
 * Search for a company symbol using Alpha Vantage
 */
export async function searchSymbolAlphaVantage(companyName) {
    try {
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            throw new Error("Alpha Vantage API key not configured");
        }

        const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
            params: {
                function: "SYMBOL_SEARCH",
                keywords: companyName,
                apikey: apiKey
            }
        });

        if (!response.data || !response.data.bestMatches || response.data.bestMatches.length === 0) {
            return null;
        }

        // Return the best match
        const match = response.data.bestMatches[0];
        return {
            symbol: match["1. symbol"],
            name: match["2. name"],
            type: match["3. type"],
            region: match["4. region"],
            currency: match["8. currency"]
        };
    } catch (error) {
        console.error("Alpha Vantage Search Error:", error.message);
        return null;
    }
}

/**
 * Get quote data from Alpha Vantage
 */
export async function getAlphaVantageQuote(symbol) {
    try {
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            throw new Error("Alpha Vantage API key not configured");
        }

        const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
            params: {
                function: "GLOBAL_QUOTE",
                symbol: symbol,
                apikey: apiKey
            }
        });

        const quote = response.data["Global Quote"];
        
        if (!quote || Object.keys(quote).length === 0) {
            throw new Error(`No data available for symbol: ${symbol}`);
        }

        return quote;
    } catch (error) {
        console.error("Alpha Vantage Quote Error:", error.message);
        throw error;
    }
}

/**
 * Get company overview from Alpha Vantage
 */
export async function getAlphaVantageOverview(symbol) {
    try {
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            return null;
        }

        const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
            params: {
                function: "OVERVIEW",
                symbol: symbol,
                apikey: apiKey
            }
        });

        if (!response.data || Object.keys(response.data).length === 0) {
            return null;
        }

        return response.data;
    } catch (error) {
        console.error("Alpha Vantage Overview Error:", error.message);
        return null;
    }
}

/**
 * Get historical time series data from Alpha Vantage
 */
export async function getAlphaVantageTimeSeries(symbol) {
    try {
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            throw new Error("Alpha Vantage API key not configured");
        }

        const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
            params: {
                function: "TIME_SERIES_DAILY",
                symbol: symbol,
                outputsize: "compact",
                apikey: apiKey
            }
        });

        const timeSeries = response.data["Time Series (Daily)"];
        
        if (!timeSeries) {
            throw new Error(`No time series data available for ${symbol}`);
        }

        return timeSeries;
    } catch (error) {
        console.error("Alpha Vantage Time Series Error:", error.message);
        throw error;
    }
}

/**
 * Get comprehensive financial data using Alpha Vantage
 */
export async function getFinanceDataFromAlphaVantage(companyName, providedSymbol = null) {
    try {
        let symbol = providedSymbol;

        // If no symbol provided, search for it
        if (!symbol) {
            const searchResult = await searchSymbolAlphaVantage(companyName);
            if (!searchResult) {
                throw new Error(`Company "${companyName}" not found in Alpha Vantage`);
            }
            symbol = searchResult.symbol;
            console.log(`Found symbol: ${symbol} (${searchResult.name})`);
        }

        // Get quote and overview data
        const [quote, overview] = await Promise.all([
            getAlphaVantageQuote(symbol),
            getAlphaVantageOverview(symbol)
        ]);

        if (!quote) {
            throw new Error(`Unable to fetch data for symbol: ${symbol}`);
        }

        // Parse the quote data
        const price = parseFloat(quote["05. price"] || 0);
        const change = parseFloat(quote["09. change"] || 0);
        const changePercent = quote["10. change percent"] || "0%";
        const high = parseFloat(quote["03. high"] || 0);
        const low = parseFloat(quote["04. low"] || 0);

        // Parse overview data if available
        const marketCap = overview ? parseFloat(overview.MarketCapitalization) : null;
        const peRatio = overview ? parseFloat(overview.PERatio) : null;
        const dividendYield = overview ? parseFloat(overview.DividendYield) : null;
        const beta = overview ? parseFloat(overview.Beta) : null;

        return {
            symbol: symbol,
            company: overview?.Name || companyName,
            price: price,
            currency: overview?.Currency || "USD",
            marketCap: marketCap,
            peRatio: peRatio,
            dividendYield: dividendYield,
            beta: beta,
            sector: overview?.Sector || null,
            industry: overview?.Industry || null,
            website: overview?.Website || null,
            employees: overview?.FullTimeEmployees ? parseInt(overview.FullTimeEmployees) : null,
            fiftyTwoWeekHigh: overview ? parseFloat(overview["52WeekHigh"]) : high,
            fiftyTwoWeekLow: overview ? parseFloat(overview["52WeekLow"]) : low,
            exchange: overview?.Exchange || null,
            country: overview?.Country || null,
            description: overview?.Description || null
        };
    } catch (error) {
        console.error("Alpha Vantage Finance Error:", error.message);
        throw error;
    }
}

/**
 * Get historical price data from Alpha Vantage
 */
export async function getHistoricalDataFromAlphaVantage(symbol) {
    try {
        const timeSeries = await getAlphaVantageTimeSeries(symbol);

        // Convert to array and get last 30 days
        const dates = Object.keys(timeSeries).slice(0, 30).reverse();
        
        return dates.map(date => ({
            date: date,
            price: parseFloat(timeSeries[date]["4. close"])
        }));
    } catch (error) {
        console.error("Alpha Vantage Historical Error:", error.message);
        throw error;
    }
}
