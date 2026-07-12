function TickerLogo({ symbol, company }) {
    return (
        <img
            src={`https://logo.clearbit.com/${company
                .replace("Inc.", "")
                .replace("Corporation", "")
                .replace(/\s+/g, "")
                .toLowerCase()}.com`}
            alt={company}
            className="company-logo"
            onError={(e) => {
                e.target.src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=2563eb&color=fff&size=128`;
            }}
        />
    );
}

export default TickerLogo;