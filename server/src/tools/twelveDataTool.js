import axios from "axios";

const TWELVE_DATA_BASE_URL = "https://api.twelvedata.com";

/**
 * Search for a company symbol using Twelve Data
 */
export async function searchSymbol(companyName) {
    try {
        const apiKey = process.env.TWELVE_DATA_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            throw new Error("Twelve Data API key not configured");
        }

        const response = await axios.get(`${TWELVE_DATA_BASE_URL}/symbol_search`, {
            params: {
                symbol: companyName,
                apikey: apiKey
            }
        });

        if (!response.data || !response.data.data || response.data.data.length === 0) {
            return null;
        }

        // Find the best match - prefer stocks over other instruments
        const stocks = response.data.data.filter(item => 
            item.instrument_type === "Common Stock" || 
            item.instrument_type === "Stock"
        );

        return stocks.length > 0 ? stocks[0] : response.data.data[0];
    } catch (error) {
        console.error("Twelve Data Search Error:", error.message);
        return null;
    }
}

/**
 * Get quote data from Twelve Data
 */
export async function getTwelveDataQuote(symbol) {
    try {
        const apiKey = process.env.TWELVE_DATA_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            throw new Error("Twelve Data API key not configured");
        }

        const response = await axios.get(`${TWELVE_DATA_BASE_URL}/quote`, {
            params: {
                symbol: symbol,
                apikey: apiKey
            }
        });

        return response.data;
    } catch (error) {
        console.error("Twelve Data Quote Error:", error.message);
        throw error;
    }
}

/**
 * Get company profile from Twelve Data
 */
export async function getTwelveDataProfile(symbol) {
    try {
        const apiKey = process.env.TWELVE_DATA_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            return null;
        }

        const response = await axios.get(`${TWELVE_DATA_BASE_URL}/profile`, {
            params: {
                symbol: symbol,
                apikey: apiKey
            }
        });

        return response.data;
    } catch (error) {
        console.error("Twelve Data Profile Error:", error.message);
        return null;
    }
}

/**
 * Get historical time series data
 */
export async function getTwelveDataTimeSeries(symbol, interval = "1day", outputsize = 30) {
    try {
        const apiKey = process.env.TWELVE_DATA_API_KEY;
        
        if (!apiKey || apiKey === "your_api_key_here") {
            throw new Error("Twelve Data API key not configured");
        }

        const response = await axios.get(`${TWELVE_DATA_BASE_URL}/time_series`, {
            params: {
                symbol: symbol,
                interval: interval,
                outputsize: outputsize,
                apikey: apiKey
            }
        });

        return response.data;
    } catch (error) {
        console.error("Twelve Data Time Series Error:", error.message);
        throw error;
    }
}

/**
 * Get comprehensive financial data using Twelve Data
 */
export async function getFinanceDataFromTwelveData(companyName, providedSymbol = null) {
    try {
        let symbol = providedSymbol;

        // If no symbol provided, search for it
        if (!symbol) {
            const searchResult = await searchSymbol(companyName);
            if (!searchResult) {
                throw new Error(`Company "${companyName}" not found in Twelve Data`);
            }
            symbol = searchResult.symbol;
            console.log(`Found symbol: ${symbol} (${searchResult.instrument_name})`);
        }

        // Get quote and profile data
        const [quote, profile] = await Promise.all([
            getTwelveDataQuote(symbol),
            getTwelveDataProfile(symbol)
        ]);

        if (!quote || quote.code === 400) {
            throw new Error(`Unable to fetch data for symbol: ${symbol}`);
        }

        // Calculate market cap if not provided
        const price = parseFloat(quote.close || quote.price || 0);
        const sharesOutstanding = profile?.shares_outstanding || 0;
        const marketCap = sharesOutstanding ? price * sharesOutstanding : null;

        return {
            symbol: symbol,
            company: quote.name || profile?.name || companyName,
            price: price,
            currency: quote.currency || "USD",
            marketCap: marketCap,
            peRatio: parseFloat(profile?.pe_ratio) || null,
            dividendYield: parseFloat(profile?.dividend_yield) || null,
            beta: parseFloat(profile?.beta) || null,
            sector: profile?.sector || null,
            industry: profile?.industry || null,
            website: profile?.website || null,
            employees: profile?.employees ? parseInt(profile.employees) : null,
            fiftyTwoWeekHigh: parseFloat(quote.fifty_two_week?.high) || null,
            fiftyTwoWeekLow: parseFloat(quote.fifty_two_week?.low) || null,
            exchange: quote.exchange || profile?.exchange || null,
            country: profile?.country || null
        };
    } catch (error) {
        console.error("Twelve Data Finance Error:", error.message);
        throw error;
    }
}

/**
 * Get historical price data from Twelve Data
 */
export async function getHistoricalDataFromTwelveData(symbol) {
    try {
        const timeSeries = await getTwelveDataTimeSeries(symbol, "1day", 30);

        if (!timeSeries || !timeSeries.values) {
            throw new Error(`No historical data available for ${symbol}`);
        }

        return timeSeries.values.map(item => ({
            date: item.datetime,
            price: parseFloat(item.close)
        })).reverse(); // Reverse to get chronological order
    } catch (error) {
        console.error("Twelve Data Historical Error:", error.message);
        throw error;
    }
}
