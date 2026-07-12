# 🚀 InvestIQ - AI Investment Research

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)

AI-powered investment research platform that analyzes stocks from **60+ global exchanges** using real-time financial data, news sentiment, and Large Language Models to generate intelligent investment recommendations.

**🌐 Live Demo:**
- **Frontend:** [https://invest-iq-ai-investment-research.vercel.app](https://invest-iq-ai-investment-research.vercel.app)
- **Backend API:** [https://investiq-ai-investment-research.onrender.com](https://investiq-ai-investment-research.onrender.com)

---
## 📖 Overview

InvestIQ is an AI-powered investment research platform that automates the process of analyzing publicly traded companies. Instead of manually gathering financial data, reading news articles, and interpreting metrics, users simply enter a stock symbol and receive a comprehensive AI-generated investment report.

### What It Does

The application:
1. **Searches** for companies across 60+ global stock exchanges
2. **Fetches** real-time financial data (price, market cap, P/E ratio, beta, dividend yield, etc.)
3. **Retrieves** the latest company news with headlines and sentiment
4. **Visualizes** 30-day price trends with interactive charts
5. **Analyzes** all data using GPT-4 to generate investment insights
6. **Delivers** a clear INVEST/PASS recommendation with confidence score and risk assessment

### Who It's For

- **Individual investors** researching potential investments
- **Students** learning about financial analysis and AI agents
- **Developers** exploring agentic AI architectures
- **Anyone** wanting quick, data-driven stock insights without manual research

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
- 🎨 **Theme Toggle** - Light and dark mode support

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
| **GNews** | Company News | 100/day | [gnews.io](https://gnews.io/) |

### Optional (Fallback APIs)

| Provider | Purpose | Free Tier | Get Key |
|----------|---------|-----------|---------|
| **Twelve Data** | Global Stock Data | 800/day | [twelvedata.com](https://twelvedata.com/) |
| **Alpha Vantage** | Stock Data Fallback | 25/day | [alphavantage.co](https://www.alphavantage.co/support/#api-key) |

> **Note:** Yahoo Finance is used as the primary data source (no API key required). Twelve Data and Alpha Vantage are fallbacks for when Yahoo Finance doesn't have data.

### Environment Variables

**Server (.env)**
```env
PORT=5555
OPENROUTER_API_KEY=your_openrouter_key
OPENROUTER_MODEL=openai/gpt-4o-mini
GNEWS_API_KEY=your_gnews_key
TWELVE_DATA_API_KEY=your_twelve_data_key (optional)
ALPHA_VANTAGE_API_KEY=your_alphavantage_key (optional)
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
---

## � How It Works

### High-Level Flow

```
1. User enters stock symbol (e.g., "AAPL", "TCS.NS")
                ↓
2. Frontend sends request to backend API
                ↓
3. Backend orchestrates data collection:
   - Yahoo Finance API → Financial metrics
   - Twelve Data API (fallback) → Global stock data
   - Alpha Vantage API (fallback) → Additional coverage
   - GNews API → Latest company news
                ↓
4. Data aggregation and formatting
                ↓
5. AI Agent (GPT-4) receives structured prompt with:
   - Company financial data
   - News headlines and summaries
   - Historical price trends
                ↓
6. AI generates investment analysis:
   - INVEST/PASS decision
   - Confidence score (0-100)
   - Risk level (Low/Medium/High)
   - Detailed summary
   - Pros and cons list
                ↓
7. Frontend displays comprehensive report with charts
```

### Detailed Architecture

#### **Frontend (React + Vite)**

**Components:**
- `Dashboard.jsx` - Main page coordinating all components
- `StockSearchInput.jsx` - Autocomplete search with debouncing
- `PriceChart.jsx` - 30-day price visualization using Recharts
- `AnalysisReport.jsx` - AI-generated investment report display
- `ThemeToggle.jsx` - Dark/light mode switcher
- `PageHeader.jsx` - App header and branding

**State Management:**
- React hooks (`useState`, `useEffect`) for component state
- Theme context for global dark/light mode
- Axios for API communication

**User Flow:**
1. User types company name in search box
2. Autocomplete suggests matching companies
3. User selects a company
4. Loading spinner appears
5. Backend processes request (5-15 seconds)
6. Results render: financial metrics + chart + AI analysis

#### **Backend (Node.js + Express)**

**Layers:**

1. **Routes** (`routes/`)
   - `/api/search` - Company search endpoint
   - `/api/analyze` - Stock analysis endpoint

2. **Controllers** (`controllers/`)
   - Handle HTTP requests
   - Validate input
   - Call services
   - Return JSON responses

3. **Services** (`services/`)
   - Business logic layer
   - Orchestrate multiple tool calls
   - Format data for AI prompts

4. **Tools** (`tools/`)
   - `financeTool.js` - Yahoo Finance + fallback providers
   - `newsTool.js` - GNews API integration
   
5. **Agents** (`agents/`)
   - `investmentAgent.js` - Coordinates AI analysis
   - Constructs prompts
   - Calls OpenRouter API
   - Parses AI responses

6. **Prompts** (`prompts/`)
   - `investmentPrompt.js` - Structured prompt templates
   - Defines AI behavior and output format

### Data Flow Example

**Request:** Analyze "AAPL"

```
User Input: "AAPL"
     ↓
POST /api/analyze
     ↓
analyzeController.analyzeStock()
     ↓
analyzeService.analyzeStock()
     ↓
├─ financeTool.getStockData("AAPL")
│  ├─ Try: Yahoo Finance
│  │  └─ Success! → Return data
│  ├─ (If fail) Try: Twelve Data
│  └─ (If fail) Try: Alpha Vantage
│
├─ newsTool.getNews("AAPL")
│  └─ GNews API → Return 5 articles
│
└─ investmentAgent.analyze(data, news)
   └─ OpenRouter GPT-4 → AI analysis
        ↓
JSON Response:
{
  "company": "Apple Inc.",
  "symbol": "AAPL",
  "decision": "INVEST",
  "confidence": 85,
  "risk": "Medium",
  "summary": "Strong financials...",
  "pros": ["Ecosystem", "Services growth"],
  "cons": ["High valuation", "China risk"],
  "finance": { price: 189.50, marketCap: 2.95T },
  "news": [...],
  "history": [...]
}
```

### AI Agent Design

The investment agent uses a **single-turn analysis** approach:

**Prompt Structure:**
```
System: You are a financial analyst. Analyze this company and provide
investment recommendation in JSON format.

User: Company: Apple Inc. (AAPL)
Financial Metrics:
- Price: $189.50
- Market Cap: $2.95T
- P/E Ratio: 31.2
...

Recent News:
1. Apple launches new AI features
2. iPhone sales exceed expectations
...

Provide JSON with: decision, confidence, risk, summary, pros, cons
```

**Why Single-Turn?**
- Faster response (5-15 seconds vs. multi-turn conversations)
- Deterministic output format
- Lower API costs
- Sufficient for educational purposes

### API Fallback Strategy

**Problem:** Free APIs have rate limits and coverage gaps.

**Solution:** Three-tier fallback system

```
1. Yahoo Finance (Primary)
   ✓ No API key required
   ✓ Best coverage for US stocks
   ✓ Fast response
   ✗ Limited international coverage

        ↓ (If fails)

2. Twelve Data (Secondary)
   ✓ 800 requests/day free
   ✓ 60+ exchanges worldwide
   ✓ Excellent international coverage
   ✗ Requires API key

        ↓ (If fails)

3. Alpha Vantage (Fallback)
   ✓ 25 requests/day free
   ✓ Good US coverage
   ✗ Very low rate limit
```

This ensures >95% uptime for stock data retrieval.

---

## 🎯 Key Decisions & Trade-offs
### Live Application

- **Frontend (Vercel):** [https://invest-iq-ai-investment-research.vercel.app](https://invest-iq-ai-investment-research.vercel.app)
- **Backend (Render):** [https://investiq-ai-investment-research.onrender.com](https://investiq-ai-investment-research.onrender.com)

### Deploy Your Own

#### Backend on Render (Free)

1. Go to [render.com](https://render.com) and sign in
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name:** `investiq-backend` (or any name)
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variables:
   - `OPENROUTER_API_KEY`
   - `OPENROUTER_MODEL` = `openai/gpt-4o-mini`
   - `GNEWS_API_KEY`
   - `TWELVE_DATA_API_KEY` (optional)
   - `ALPHA_VANTAGE_API_KEY` (optional)
   - `FRONTEND_URL` = your Vercel URL (add after deploying frontend)
6. Click **Create Web Service**
7. Wait 5-10 minutes for deployment
8. Copy your backend URL (e.g., `https://your-app.onrender.com`)

#### Frontend on Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure:
   - **Root Directory:** `client`
   - **Framework Preset:** Vite
5. Add environment variable:
   - **Key:** `VITE_API_URL`
   - **Value:** Your Render backend URL (from step above)
6. Click **Deploy**
7. Wait 2-3 minutes
8. Your app is live!

#### Update Backend with Frontend URL

1. Go back to Render dashboard
2. Click your service → **Environment**
3. Add/Update: `FRONTEND_URL` = your Vercel URL
4. Service will auto-redeploy

---

## �️ Architecture

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
│   │   ├── context/       # React context (Theme)
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
└── README.md
```

---

## 🎯 API Endpoints

### Base URL
- **Local:** `http://localhost:5555`
- **Production:** `https://investiq-ai-investment-research.onrender.com`

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

## 🛠️ Development

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

**5. CORS errors in production**
- Ensure `FRONTEND_URL` is set in Render environment variables
- Check that URLs match exactly (including https://)

---

## 📝 License

This project is licensed under the MIT License.

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

**Made with ❤️ by Shubham Shandilya**


## 🔧 How It Works

### High-Level Flow

```
1. User enters stock symbol (e.g., "AAPL", "TCS.NS")
                ↓
2. Frontend sends request to backend API
                ↓
3. Backend orchestrates data collection:
   - Yahoo Finance API → Financial metrics
   - Twelve Data API (fallback) → Global stock data
   - Alpha Vantage API (fallback) → Additional coverage
   - GNews API → Latest company news
                ↓
4. Data aggregation and formatting
                ↓
5. AI Agent (GPT-4) receives structured prompt with:
   - Company financial data
   - News headlines and summaries
   - Historical price trends
                ↓
6. AI generates investment analysis:
   - INVEST/PASS decision
   - Confidence score (0-100)
   - Risk level (Low/Medium/High)
   - Detailed summary
   - Pros and cons list
                ↓
7. Frontend displays comprehensive report with charts
```

### Detailed Architecture

#### **Frontend (React + Vite)**

**Components:**
- `Dashboard.jsx` - Main page coordinating all components
- `StockSearchInput.jsx` - Autocomplete search with debouncing
- `PriceChart.jsx` - 30-day price visualization using Recharts
- `AnalysisReport.jsx` - AI-generated investment report display
- `ThemeToggle.jsx` - Dark/light mode switcher
- `PageHeader.jsx` - App header and branding

**State Management:**
- React hooks (`useState`, `useEffect`) for component state
- Theme context for global dark/light mode
- Axios for API communication

**User Flow:**
1. User types company name in search box
2. Autocomplete suggests matching companies
3. User selects a company
4. Loading spinner appears
5. Backend processes request (5-15 seconds)
6. Results render: financial metrics + chart + AI analysis

#### **Backend (Node.js + Express)**

**Layers:**

1. **Routes** (`routes/`)
   - `/api/search` - Company search endpoint
   - `/api/analyze` - Stock analysis endpoint

2. **Controllers** (`controllers/`)
   - Handle HTTP requests
   - Validate input
   - Call services
   - Return JSON responses

3. **Services** (`services/`)
   - Business logic layer
   - Orchestrate multiple tool calls
   - Format data for AI prompts

4. **Tools** (`tools/`)
   - `financeTool.js` - Yahoo Finance + fallback providers
   - `newsTool.js` - GNews API integration
