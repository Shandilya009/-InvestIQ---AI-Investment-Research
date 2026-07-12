# 🚀 InvestIQ - AI Investment Research

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-black?logo=vercel)](https://vercel.com/new/clone?repository-url=https://github.com/Shandilya009/-InvestIQ---AI-Investment-Research)
[![Deploy to Render](https://img.shields.io/badge/Deploy%20to-Render-46E3B7?logo=render)](https://render.com)

AI-powered investment research platform that analyzes stocks from **60+ global exchanges** using real-time financial data, news sentiment, and Large Language Models to generate intelligent investment recommendations.

**🌐 Live Demo:** [Coming Soon - Deploy using guide below](#-deployment)

![InvestIQ Demo](https://via.placeholder.com/800x400/2563eb/ffffff?text=InvestIQ+-+AI+Investment+Research)

---

## 🌟 Features

- 🤖 **AI-Powered Analysis** - OpenAI GPT-4 analyzes financial data and news
- 🌍 **Global Markets** - Support for 60+ exchanges (US, India, UK, Japan, Germany, etc.)
- 📊 **Real-Time Data** - Live stock prices, market cap, P/E ratios, and more
- 📰 **News Integration** - Latest company news with sentiment analysis
- 📈 **Historical Charts** - 30-day price trend visualization
- ⚡ **Multi-Provider** - Automatic fallback between Yahoo Finance, Twelve Data, and Alpha Vantage
- 🎯 **Smart Recommendations** - INVEST/PASS decisions with confidence scores
- 🔒 **Risk Assessment** - Low/Medium/High risk classification

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- API Keys (see [Configuration](#-configuration))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Shandilya009/-InvestIQ---AI-Investment-Research.git
cd -InvestIQ---AI-Investment-Research
```

2. **Install dependencies**
```bash
# Server
cd server
npm install

# Client
cd ../client
npm install
```

3. **Configure environment variables**
```bash
# Server
cd server
cp .env.example .env
# Edit .env and add your API keys

# Client
cd ../client
cp .env.example .env
# Edit .env if needed (default: http://localhost:5555)
```

4. **Start the application**
```bash
# Terminal 1 - Start server
cd server
npm run dev

# Terminal 2 - Start client
cd client
npm run dev
```

5. **Open in browser**
```
http://localhost:5174
```

---

## 🔑 Configuration

### Required API Keys

| Provider | Purpose | Free Tier | Get Key |
|----------|---------|-----------|---------|
| **OpenRouter** | AI Analysis | Pay per use | [openrouter.ai/keys](https://openrouter.ai/keys) |
| **Alpha Vantage** | Stock Data Fallback | 25/day | [alphavantage.co](https://www.alphavantage.co/support/#api-key) |

### Optional API Keys (Recommended)

| Provider | Purpose | Free Tier | Get Key |
|----------|---------|-----------|---------|
| **GNews** | Company News | 100/day | [gnews.io](https://gnews.io/) |
| **Twelve Data** | Enhanced Global Stocks | 800/day | [twelvedata.com](https://twelvedata.com/) |

### Environment Variables

**Server (.env)**
```env
PORT=5555
OPENROUTER_API_KEY=your_openrouter_key
OPENROUTER_MODEL=openai/gpt-4o-mini
GNEWS_API_KEY=your_gnews_key
ALPHA_VANTAGE_API_KEY=your_alphavantage_key
```

**Client (.env)**
```env
VITE_API_URL=http://localhost:5555
```

---

## 🌍 Supported Markets

### ✅ Currently Working

- 🇺🇸 **United States** - NASDAQ, NYSE (AAPL, MSFT, TSLA, IBM)
- 🇮🇳 **India** - NSE, BSE (TCS.NS, RELIANCE.NS, INFY.NS, HDFCBANK.NS)
- 🇬🇧 **United Kingdom** - LSE (BP.L, HSBA.L, SHEL.L)
- 🇯🇵 **Japan** - TSE (7203.T, 9984.T)
- 🇩🇪 **Germany** - XETRA (SAP, VOW3.DE, DAI.DE)
- 🇨🇳 **China** - ADR listings (BABA, BIDU, JD)
- 🇦🇺 **Australia** - ASX (BHP.AX, CBA.AX)

### 📋 Stock Symbol Format

| Exchange | Suffix | Example |
|----------|--------|---------|
| NSE India | `.NS` | RELIANCE.NS |
| BSE India | `.BO` | RELIANCE.BO |
| London | `.L` | BP.L |
| Tokyo | `.T` | 7203.T |
| Hong Kong | `.HK` | 0700.HK |
| Australia | `.AX` | BHP.AX |
| Germany | `.DE` | VOW3.DE |

---

## � Deployment

### Quick Deploy

**Backend (Render - Free):**
1. [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)
2. Connect GitHub repo → Select `server` folder
3. Add environment variables (see [Deployment Guide](DEPLOYMENT_GUIDE.md))

**Frontend (Vercel - Free):**
1. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Shandilya009/-InvestIQ---AI-Investment-Research)
2. Set root directory to `client`
3. Add `VITE_API_URL` environment variable

**📖 Full Guide:** See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

**⚡ Quick Reference:** See [QUICK_DEPLOY.md](QUICK_DEPLOY.md) for quick deployment steps.

---

## �🏗️ Architecture

### Tech Stack

**Frontend**
- React 19.2
- Vite 8.1
- Axios
- Recharts (Charts)
- CSS3

**Backend**
- Node.js
- Express 5.2
- Yahoo Finance API
- Alpha Vantage API
- Twelve Data API (optional)
- GNews API
- OpenRouter (GPT-4)

### Data Flow

```
User Input → Search API → Yahoo Finance (Primary)
                        ↓ (if fails)
                     Twelve Data (Secondary)
                        ↓ (if fails)
                    Alpha Vantage (Fallback)
                        ↓
                Financial Data + News → OpenRouter AI
                        ↓
              AI Analysis → Frontend Dashboard
```

---

## 📁 Project Structure

```
InvestIQ/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── styles/        # CSS files
│   └── package.json
│
├── server/                # Node.js backend
│   ├── src/
│   │   ├── agents/       # AI agents
│   │   ├── controllers/  # Route controllers
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── tools/        # External API integrations
│   │   └── prompts/      # AI prompts
│   └── package.json
│
├── .gitignore
├── README.md
└── API_CONFIGURATION.md
```

---

## 🎯 API Endpoints

### Base URL: `http://localhost:5555`

#### Health Check
```http
GET /
```

#### Search Companies
```http
GET /api/search?q=apple
```

#### Analyze Stock
```http
POST /api/analyze
Content-Type: application/json

{
  "company": "AAPL",
  "symbol": "AAPL"
}
```

**Response Example:**
```json
{
  "company": "Apple Inc.",
  "decision": "INVEST",
  "confidence": 85,
  "score": 80,
  "risk": "Medium",
  "summary": "Strong financial performance...",
  "pros": ["Strong brand", "Growing services revenue"],
  "cons": ["High valuation", "Market saturation"],
  "finance": { ... },
  "news": [ ... ],
  "history": [ ... ]
}
```

---

## 📸 Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/800x400/f3f4f6/1f2937?text=Stock+Search+Dashboard)

### Analysis Report
![Analysis](https://via.placeholder.com/800x400/f3f4f6/1f2937?text=AI+Investment+Analysis)

### Price Chart
![Chart](https://via.placeholder.com/800x400/f3f4f6/1f2937?text=30-Day+Price+Chart)

---

## 🛠️ Development

### Run Tests
```bash
# Server tests
cd server
npm test

# Client tests
cd client
npm test
```

### Build for Production
```bash
# Build client
cd client
npm run build

# Build output in client/dist/
```

### Linting
```bash
# Client
cd client
npm run lint
```

---

## 🚨 Troubleshooting

### Common Issues

**1. "Company not found" error**
- Verify stock symbol format (e.g., use `TCS.NS` not `TCS` for Indian stocks)
- Check if stock is available on Yahoo Finance
- Try with Alpha Vantage by adding API key

**2. "Port already in use"**
- Change `PORT` in `server/.env` (default: 5555)
- Update `VITE_API_URL` in `client/.env` accordingly

**3. No news articles appearing**
- Add GNews API key to `server/.env`
- Check API rate limits (100 requests/day free)

**4. Rate limit errors**
- Alpha Vantage: 25 requests/day (free)
- Add Twelve Data API key for 800 requests/day

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

**Shubham Shandilya**

- GitHub: [@Shandilya009](https://github.com/Shandilya009)
- Project: [InvestIQ](https://github.com/Shandilya009/-InvestIQ---AI-Investment-Research)

---

## 🙏 Acknowledgments

- [Yahoo Finance](https://finance.yahoo.com/) - Primary financial data provider
- [Alpha Vantage](https://www.alphavantage.co/) - Fallback financial data
- [OpenRouter](https://openrouter.ai/) - AI model access
- [GNews](https://gnews.io/) - News data provider
- [Recharts](https://recharts.org/) - Chart library

---

## ⚠️ Disclaimer

This application is for **educational and research purposes only**. It is NOT financial advice. Always do your own research and consult with a qualified financial advisor before making investment decisions. The creators are not responsible for any financial losses incurred from using this application.

---

## 📊 Project Stats

- **Languages**: JavaScript, JSX, CSS
- **Frameworks**: React, Express
- **APIs**: 5+ external integrations
- **Markets**: 60+ global exchanges
- **Real-time**: Yes
- **AI-Powered**: Yes (GPT-4)

---

**Made with ❤️ by Shubham Shandilya**

An AI-powered investment research application that analyzes publicly traded companies from **worldwide stock exchanges** using **real-time financial data**, **latest news**, and **Large Language Models (LLMs)** to generate an investment recommendation.

## 🌍 NEW: Global Stock Coverage

The application now supports **125,000+ stocks from 60+ exchanges worldwide** including:

- 🇮🇳 **India** (NSE, BSE) - Zomato, Reliance, TCS, Infosys
- 🇺🇸 **United States** (NYSE, NASDAQ) - Apple, Microsoft, Tesla
- 🇬🇧 **United Kingdom** (LSE)
- 🇯🇵 **Japan** (TSE)
- 🇩🇪 **Germany** (XETRA)
- 🇨🇳 **China** (Shanghai, Shenzhen)
- And 50+ more exchanges!

See **[GLOBAL_STOCKS_UPDATE.md](./GLOBAL_STOCKS_UPDATE.md)** for setup instructions.

---

# Overview

The AI Investment Research Agent simplifies company research by combining multiple data sources into a single investment report.

Users can:

- Search companies using autocomplete
- View real-time financial information
- Analyze one-month stock price trends
- Read the latest company news
- Receive an AI-generated investment recommendation
- Understand the company's strengths, weaknesses, and investment risk

The application is designed for educational and research purposes and demonstrates how AI agents can assist in financial analysis.

---

# How to Run It

## Prerequisites

- Node.js (v18 or later)
- npm
- OpenRouter API Key
- GNews API Key
- **Twelve Data API Key** (for worldwide stock coverage - FREE)

---

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Investment_Research.git

cd Investment_Research
```

---

## Backend Setup

Navigate to the server directory.

```bash
cd server

npm install
```

Create a `.env` file inside the **server** folder.

```env
PORT=5002

OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY
OPENROUTER_MODEL=openai/gpt-4o-mini

GNEWS_API_KEY=YOUR_GNEWS_API_KEY

# For worldwide stock coverage (Indian, Asian, European stocks)
# Get FREE API key from: https://twelvedata.com/
TWELVE_DATA_API_KEY=YOUR_TWELVE_DATA_API_KEY
```

> 💡 **Important**: Get your FREE Twelve Data API key to access Indian and global stocks. See [GLOBAL_STOCKS_UPDATE.md](./GLOBAL_STOCKS_UPDATE.md) for detailed setup instructions.

Run the backend.

```bash
npm run dev
```

The server will start at:

```
http://localhost:5002
```

---

## Frontend Setup

Open another terminal.

```bash
cd client

npm install
```

Create a `.env` file inside the **client** folder.

```env
VITE_API_URL=http://localhost:5002
```

Run the frontend.

```bash
npm run dev
```

The application will open at

```
http://localhost:5173
```

---

# How It Works

The application follows a multi-stage AI agent workflow.

```
User
 │
 ▼
Search Company
 │
 ▼
Autocomplete API
 │
 ▼
Selected Company Symbol
 │
 ▼
Yahoo Finance API
 │
 ├── Company Profile
 ├── Financial Metrics
 └── Historical Prices
 │
 ▼
GNews API
 │
 ▼
Latest Company News
 │
 ▼
OpenRouter LLM
 │
 ▼
Investment Analysis
 │
 ▼
Frontend Dashboard
```

## Architecture

### Frontend

- React.js
- Vite
- Axios
- Recharts
- CSS3

Responsibilities:

- Company search
- Stock chart visualization
- Financial dashboard
- News display
- AI recommendation UI

---

### Backend

- Node.js
- Express.js

Responsibilities:

- Company search
- Yahoo Finance integration
- GNews integration
- AI prompt construction
- OpenRouter communication
- JSON response generation

---

### External APIs

**Yahoo Finance (Primary)**

Used for:

- Stock price
- Market capitalization
- P/E ratio
- Beta
- Dividend yield
- Historical stock prices
- Company information
- Best coverage for US stocks

---

**Twelve Data API (Fallback)**

Used for:

- Worldwide stock coverage (60+ exchanges)
- Indian stocks (NSE, BSE)
- Asian, European, and global markets
- When Yahoo Finance doesn't have data
- 125,000+ stock symbols

---

**GNews API**

Used for:

- Latest company news
- Headlines
- Article summaries
- Article links

---

**OpenRouter**

Used to generate:

- Investment recommendation
- Confidence score
- Risk assessment
- Summary
- Pros
- Cons

---

# Key Decisions & Trade-offs

## Why Yahoo Finance?

Yahoo Finance provides free access to comprehensive financial information without requiring paid subscriptions, making it suitable for educational projects.

---

## Why GNews?

Instead of scraping news websites, GNews provides structured news articles through a simple REST API, making integration easier and more reliable.

---

## Why OpenRouter?

OpenRouter allows switching between multiple Large Language Models without changing application code, making the system more flexible.

---

## Why React + Express?

Separating the frontend and backend keeps the application modular and easier to maintain.

---

## Why AI-generated recommendations?

Rather than relying solely on financial ratios, the AI model combines numerical financial data with recent news to produce a more context-aware investment analysis.

---

## Trade-offs

### Included

- Real-time financial data
- Real-time news
- AI-generated report
- Stock chart
- Company autocomplete

---

### Not Included

To keep the project focused, the following features were intentionally omitted:

- User authentication
- Portfolio management
- Stock prediction models
- Technical indicators (MACD, RSI)
- Sentiment analysis
- PDF report export
- Dark mode
- Database storage
- Historical recommendation tracking

These features can be added in future versions.

---

# Example Runs

---

## Example 1 — Apple Inc.

**Recommendation**

```
INVEST
```

**Confidence**

```
78%
```

**Risk**

```
Medium
```

**Summary**

Apple continues to demonstrate strong financial performance driven by its ecosystem, services revenue, and global brand loyalty. While valuation remains relatively high, the company maintains stable cash flows and long-term growth potential.

---

## Example 2 — Microsoft Corporation

**Recommendation**

```
INVEST
```

**Confidence**

```
82%
```

**Risk**

```
Medium
```

**Summary**

Microsoft benefits from continued cloud growth, AI investments, enterprise software leadership, and strong recurring revenue. Azure expansion and productivity products support long-term growth.

---

## Example 3 — Tesla Inc.

**Recommendation**

```
PASS
```

**Confidence**

```
70%
```

**Risk**

```
High
```

**Summary**

Tesla remains a market leader in electric vehicles but faces increasing competition, pricing pressure, and regulatory uncertainty. High valuation and slowing growth increase investment risk despite long-term innovation potential.

---

# Project Structure

```
Investment_Research
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   └── package.json
│
├── server
│   ├── src
│   │   ├── agents
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── prompts
│   │   └── tools
│   └── package.json
│
└── README.md
```

---

# Future Improvements

- Portfolio Tracker
- Compare Multiple Companies
- Watchlist
- Analyst Ratings
- Earnings Calendar
- Technical Indicators
- Dark Mode
- Authentication
- AI Chat Assistant
- PDF Investment Reports

---

