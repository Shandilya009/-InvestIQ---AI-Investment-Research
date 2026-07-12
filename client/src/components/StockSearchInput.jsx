import { useState } from "react";

function StockSearchInput({ company, setCompany, setSelectedSymbol }) {
    const [error, setError] = useState("");

    const handleSearch = () => {
        if (company.trim().length < 2) {
            setError("Please enter a company name or symbol");
            return;
        }
        setError("");
        setSelectedSymbol(company.trim().toUpperCase());
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-wrapper">
            <input
                type="text"
                placeholder="Enter company name or symbol (e.g., AAPL, Microsoft)"
                value={company}
                onChange={(e) => {
                    setCompany(e.target.value);
                    setError("");
                }}
                onKeyPress={handleKeyPress}
            />
            {error && <p className="search-error">{error}</p>}
        </div>
    );
}

export default StockSearchInput;