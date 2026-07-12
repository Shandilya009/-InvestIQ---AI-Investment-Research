# 📈 AI Investment Research Agent

An AI-powered investment research application that analyzes publicly traded companies using **real-time financial data**, **latest news**, and **Large Language Models (LLMs)** to generate an investment recommendation. The application provides investors with a concise report containing financial metrics, AI-generated insights, risk assessment, and recent market news.

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
OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY

OPENROUTER_MODEL=openai/gpt-4.1-mini

GNEWS_API_KEY=YOUR_GNEWS_API_KEY

PORT=5000
```

Run the backend.

```bash
npm run dev
```

The server will start at:

```
http://localhost:5000
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
VITE_API_URL=http://localhost:5000
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

**Yahoo Finance**

Used for:

- Stock price
- Market capitalization
- P/E ratio
- Beta
- Dividend yield
- Historical stock prices
- Company information

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

# Author

**Ritik Kumar**

M.Tech Student | Full Stack Developer | AI Enthusiast

GitHub: https://github.com/Ritikkumar266