# 🚀 InvestIQ - AI Investment Research

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)

AI-powered investment research platform that analyzes stocks from **60+ global exchanges** using real-time financial data, news sentiment, and Large Language Models to generate intelligent investment recommendations.

**🌐 Live Demo:**
- **Frontend:** [https://invest-iq-ai-investment-research.vercel.app](https://invest-iq-ai-investment-research.vercel.app)
- **Backend API:** [https://investiq-ai-investment-research.onrender.com](https://investiq-ai-investment-research.onrender.com)

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

## 🚀 Deployment

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
