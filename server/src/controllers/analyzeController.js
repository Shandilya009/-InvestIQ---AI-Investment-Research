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

        // Provide user-friendly error messages
        let statusCode = 500;
        let userMessage = error.message || "Internal Server Error";
        
        // If it's a "company not found" error, use 404
        if (error.message?.includes("not found") || error.message?.includes("Unable to find")) {
            statusCode = 404;
        }

        return res.status(statusCode).json({
            success: false,
            message: userMessage
        });

    }
};