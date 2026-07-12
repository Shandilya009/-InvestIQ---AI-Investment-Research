import { analyzeCompanyService } from "../services/analyzeService.js";

export const analyzeCompany = async (req, res) => {
    try {
        const { company, symbol } = req.body;

        if (!company || company.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Company name is required."
            });
        }

        const result = await analyzeCompanyService(
            company.trim(),
            symbol
        );

        return res.status(200).json(result);

    } catch (error) {

        console.error("Analyze Controller Error:", error.message);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });

    }
};