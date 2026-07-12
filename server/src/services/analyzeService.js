import { runInvestmentAgent } from "../agents/investmentAgent.js";

export async function analyzeCompanyService(company, symbol) {

    return await runInvestmentAgent(company, symbol);

}