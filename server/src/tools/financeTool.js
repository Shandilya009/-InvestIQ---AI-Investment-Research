import YahooFinance from "yahoo-finance2";
import { 
    getFinanceDataFromTwelveData, 
    getHistoricalDataFromTwelveData 
} from "./twelveDataTool.js";
import {
    getFinanceDataFromAlphaVantage,
    getHistoricalDataFromAlphaVantage
} from "./alphaVantageTool.js";

const yahooFinance = new YahooFinance({
    suppressNotices: ["yahooSurvey"]
});

export async function getFinanceData(companyName, providedSymbol = null) {
    // Try Yahoo Finance first
    try {
        return await getFinanceDataFromYahoo(companyName, providedSymbol);
    } catch (yahooError) {
        console.log("Yahoo Finance failed, trying Twelve Data...");
        console.log("Yahoo Error:", yahooError.message);
        
        // Fall back to Twelve Data
        try {
            const data = await getFinanceDataFromTwelveData(companyName, providedSymbol);
            console.log("✓ Successfully fetched data from Twelve Data");
            return data;
        } catch (twelveError) {
            console.log("Twelve Data failed, trying Alpha Vantage...");
            console.log("Twelve Data Error:", twelveError.message);
            
            // Final fallback to Alpha Vantage
            try {
                const data = await getFinanceDataFromAlphaVantage(companyName, providedSymbol);
                console.log("✓ Successfully fetched data from Alpha Vantage");
                return data;
            } catch (alphaError) {
                console.error("All providers failed");
                throw new Error(`Unable to find financial data for "${companyName}". Tried Yahoo Finance, Twelve Data, and Alpha Vantage. Please verify the stock symbol is correct.`);
            }
        }
    }
}

async function getFinanceDataFromYahoo(companyName, providedSymbol = null) {
    try {

        let symbol = providedSymbol;

        // If the user already entered a ticker
        if (!symbol && companyName.length <= 5 && companyName === companyName.toUpperCase()) {
            symbol = companyName;
        } else if (!symbol) {

            const search = await yahooFinance.search(companyName);

            console.log("Search Result:", search.quotes);

            if (!search.quotes || search.quotes.length === 0) {
                throw new Error(`Company "${companyName}" not found. Try using the exact stock symbol with exchange (e.g., ZOMATO.NS for NSE, AAPL for NASDAQ).`);
            }

            // Choose the first equity result, or fall back to any result with isYahooFinance=true
            let company = search.quotes.find(
                q =>
                    q.symbol &&
                    q.quoteType === "EQUITY"
            );

            // If no equity found, try to find any Yahoo Finance listed company
            if (!company) {
                company = search.quotes.find(
                    q => q.symbol && q.isYahooFinance === true
                );
            }

            // If still no company, try the first result with a symbol
            if (!company) {
                company = search.quotes.find(q => q.symbol);
            }

            if (!company) {
                const suggestions = search.quotes
                    .filter(q => q.symbol)
                    .map(q => `${q.symbol} (${q.longname || q.shortname})`)
                    .slice(0, 3)
                    .join(", ");
                    
                throw new Error(`No exact match found for "${companyName}". Did you mean: ${suggestions}? Please use the exact stock symbol with exchange suffix (e.g., ZOMATO.NS, RELIANCE.NS, AAPL).`);
            }

            symbol = company.symbol;
        }

        console.log("Using Symbol:", symbol);

        const quote = await yahooFinance.quote(symbol);

        const summary = await yahooFinance.quoteSummary(symbol, {
            modules: [
                "assetProfile",
                "summaryDetail",
                "defaultKeyStatistics"
            ]
        });

        return {
            symbol,
            company: quote.longName || quote.shortName,
            price: quote.regularMarketPrice,
            currency: quote.currency,
            marketCap: quote.marketCap,
            peRatio: summary.summaryDetail?.trailingPE,
            dividendYield: summary.summaryDetail?.dividendYield,
            beta: summary.defaultKeyStatistics?.beta,
            sector: summary.assetProfile?.sector,
            industry: summary.assetProfile?.industry,
            website: summary.assetProfile?.website,
            employees: summary.assetProfile?.fullTimeEmployees,
            fiftyTwoWeekHigh: quote.fiftyTwoWeekHigh,
            fiftyTwoWeekLow: quote.fiftyTwoWeekLow
        };

    } catch (error) {
        console.error("Finance Tool Error:", error.message);
        
        // Provide more helpful error message
        if (error.message.includes("Did you mean") || error.message.includes("not found")) {
            throw error; // Already has helpful context
        }
        
        throw new Error(`Unable to find financial data for "${companyName}". Try using the exact stock symbol with exchange (e.g., ZOMATO.NS for NSE India, AAPL for NASDAQ, BP.L for London).`);
    }
}
export async function getHistoricalData(symbol) {
    // Try Yahoo Finance first
    try {
        return await getHistoricalDataFromYahoo(symbol);
    } catch (yahooError) {
        console.log("Yahoo Finance historical data failed, trying Twelve Data...");
        
        // Fall back to Twelve Data
        try {
            const data = await getHistoricalDataFromTwelveData(symbol);
            console.log("✓ Successfully fetched historical data from Twelve Data");
            return data;
        } catch (twelveError) {
            console.log("Twelve Data historical failed, trying Alpha Vantage...");
            
            // Final fallback to Alpha Vantage
            try {
                const data = await getHistoricalDataFromAlphaVantage(symbol);
                console.log("✓ Successfully fetched historical data from Alpha Vantage");
                return data;
            } catch (alphaError) {
                throw new Error(`Unable to fetch historical data for ${symbol}`);
            }
        }
    }
}

async function getHistoricalDataFromYahoo(symbol) {

    try {

        const period2 = new Date();

        const period1 = new Date();
        period1.setMonth(period1.getMonth() - 1);

        const result = await yahooFinance.chart(symbol, {
            period1,
            period2,
            interval: "1d"
        });

        return result.quotes
            .filter(item => item.close !== null)
            .map(item => ({
                date: item.date.toISOString().split("T")[0],
                price: Number(item.close.toFixed(2))
            }));

    } catch (error) {
        throw new Error(error.message);
    }

}