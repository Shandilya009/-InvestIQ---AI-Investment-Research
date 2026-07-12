import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({
    suppressNotices: ["yahooSurvey"]
});

export const searchCompany = async (req, res) => {
    try {

        const { q } = req.query;

        if (!q || q.trim().length < 2) {
            return res.status(200).json([]);
        }

        const result = await yahooFinance.search(q.trim());

        const companies = (result.quotes || [])
            .filter(item =>
                item.quoteType === "EQUITY" &&
                item.symbol &&
                (item.longname || item.shortname)
            )
            .slice(0, 8)
            .map(item => ({
                symbol: item.symbol,
                name: item.longname || item.shortname,
                exchange: item.exchange || "N/A"
            }));

        return res.status(200).json(companies);

    } catch (error) {

        console.error("Search Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to search companies."
        });

    }
};