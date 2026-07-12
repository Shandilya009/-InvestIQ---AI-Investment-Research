import OpenAI from "openai";

import { investmentPrompt } from "../prompts/investmentPrompt.js";
import { getFinanceData, getHistoricalData } from "../tools/financeTool.js";
import { getCompanyNews } from "../tools/newsTool.js";

export async function runInvestmentAgent(company, symbol) {
    try {
        const client = new OpenAI({
            apiKey: process.env.OPENROUTER_API_KEY,
            baseURL: "https://openrouter.ai/api/v1",
        });

        // Fetch financial information
        const finance = await getFinanceData(symbol || company);

        // Fetch historical stock prices
        const history = await getHistoricalData(finance.symbol);

        // Fetch latest news
        const news = await getCompanyNews(finance.company);

        // Build AI prompt
        const prompt = `
${investmentPrompt}

Company:
${finance.company}

====================================

Financial Data:

${JSON.stringify(finance, null, 2)}

====================================

Latest News:

${JSON.stringify(news, null, 2)}

====================================

Analyze the company using BOTH the financial data and the latest news.

Decide whether an investor should INVEST or PASS.

Return ONLY valid JSON.
`;

        const completion = await client.chat.completions.create({
            model: process.env.OPENROUTER_MODEL,
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.3,
        });

        const content = completion.choices[0].message.content
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const aiResult = JSON.parse(content);

        return {
            ...aiResult,
            finance,
            news,
            history,
        };
    } catch (error) {
        console.error("Investment Agent Error:", error.message);
        throw error;
    }
}