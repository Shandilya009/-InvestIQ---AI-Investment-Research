import PriceChart from "./PriceChart";
import TickerLogo from "./TickerLogo";

function AnalysisReport({ result }) {
    return (
        <div className="result-card">

            {/* ================= CARD HEADER WITH RECOMMENDATION ================= */}

            <div className="card-header-section">
                <div className="left-section">
                    <h2 className="company-name">{result.company}</h2>
                    <span className="symbol-badge">{result.finance?.symbol}</span>
                </div>
                <div className="right-section">
                    <div className={`recommendation ${result.decision.toLowerCase()}`}>
                        <span className="rec-label">Recommendation</span>
                        <span className="rec-value">{result.decision}</span>
                    </div>
                </div>
            </div>

            {/* ================= QUICK METRICS ================= */}

            <div className="quick-metrics">
                <div className="metric-item">
                    <span className="metric-label">Current Price</span>
                    <span className="metric-value">
                        {result.finance?.price ? `$${result.finance.price.toFixed(2)}` : "N/A"}
                    </span>
                </div>
                <div className="metric-item">
                    <span className="metric-label">Market Cap</span>
                    <span className="metric-value">
                        {result.finance?.marketCap ? `$${(result.finance.marketCap / 1_000_000_000_000).toFixed(2)}T` : "N/A"}
                    </span>
                </div>
                <div className="metric-item">
                    <span className="metric-label">AI Score</span>
                    <span className="metric-value">{result.score}/100</span>
                </div>
                <div className="metric-item">
                    <span className="metric-label">Risk Level</span>
                    <span className={`risk-badge ${result.risk.toLowerCase()}`}>{result.risk}</span>
                </div>
            </div>

            {/* ================= STOCK CHART ================= */}

            {result.history?.length > 0 && (
                <div className="chart-section">
                    <h3>Price Trend (Last 30 Days)</h3>
                    <PriceChart history={result.history} />
                </div>
            )}

            {/* ================= KEY METRICS GRID ================= */}

            <div className="metrics-grid">
                <div className="metric-card">
                    <h4>P/E Ratio</h4>
                    <p className="big-number">{result.finance?.peRatio ? result.finance.peRatio.toFixed(2) : "N/A"}</p>
                    <small>Valuation</small>
                </div>

                <div className="metric-card">
                    <h4>EPS</h4>
                    <p className="big-number">${result.finance?.eps ? result.finance.eps.toFixed(2) : "N/A"}</p>
                    <small>Earnings Per Share</small>
                </div>

                <div className="metric-card">
                    <h4>Beta</h4>
                    <p className="big-number">{result.finance?.beta ? result.finance.beta.toFixed(2) : "N/A"}</p>
                    <small>Volatility</small>
                </div>

                <div className="metric-card">
                    <h4>Dividend</h4>
                    <p className="big-number">{result.finance?.dividendYield ? `${(result.finance.dividendYield * 100).toFixed(2)}%` : "N/A"}</p>
                    <small>Annual Yield</small>
                </div>

                <div className="metric-card">
                    <h4>52W High</h4>
                    <p className="big-number">${result.finance?.fiftyTwoWeekHigh ? result.finance.fiftyTwoWeekHigh.toFixed(2) : "N/A"}</p>
                    <small>52 Week Peak</small>
                </div>

                <div className="metric-card">
                    <h4>52W Low</h4>
                    <p className="big-number">${result.finance?.fiftyTwoWeekLow ? result.finance.fiftyTwoWeekLow.toFixed(2) : "N/A"}</p>
                    <small>52 Week Bottom</small>
                </div>
            </div>

            {/* ================= COMPANY INFO ================= */}

            <div className="company-section">
                <h3>Company Overview</h3>
                <div className="info-grid">
                    <div className="info-item">
                        <span className="label">Sector</span>
                        <span className="value">{result.finance?.sector || "N/A"}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Industry</span>
                        <span className="value">{result.finance?.industry || "N/A"}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Employees</span>
                        <span className="value">{result.finance?.employees ? result.finance.employees.toLocaleString() : "N/A"}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Website</span>
                        <span className="value">
                            {result.finance?.website ? (
                                <a href={result.finance.website} target="_blank" rel="noopener noreferrer">
                                    Visit →
                                </a>
                            ) : "N/A"}
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= AI ANALYSIS ================= */}

            <div className="analysis-section">
                <h3>AI Analysis</h3>
                <p className="analysis-text">{result.summary}</p>

                <div className="pros-cons-container">
                    <div className="analysis-box positive">
                        <h4>Key Strengths</h4>
                        <ul>
                            {result.pros?.map((pro, index) => (
                                <li key={index}>{pro}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="analysis-box negative">
                        <h4>Key Risks</h4>
                        <ul>
                            {result.cons?.map((con, index) => (
                                <li key={index}>{con}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ================= LATEST NEWS ================= */}

            {result.news?.length > 0 && (
                <div className="news-section">
                    <h3>Market News</h3>
                    <div className="news-grid">
                        {result.news.slice(0, 4).map((article, index) => (
                            <a 
                                href={article.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                key={index}
                                className="news-item"
                            >
                                {article.image && (
                                    <div className="news-image-wrapper">
                                        <img src={article.image} alt={article.title} />
                                    </div>
                                )}
                                <div className="news-content">
                                    <h5>{article.title}</h5>
                                    <small className="news-meta">
                                        {article.source || "News Source"}
                                        {article.publishedAt && ` • ${new Date(article.publishedAt).toLocaleDateString()}`}
                                    </small>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default AnalysisReport;