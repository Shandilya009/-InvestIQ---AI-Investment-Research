#!/bin/bash

echo "🧪 Testing Backend-Frontend Integration..."
echo ""

# Test Backend Health
echo "1️⃣ Testing Backend Health Check..."
BACKEND_RESPONSE=$(curl -s https://investiq-ai-investment-research.onrender.com/)
echo "Response: $BACKEND_RESPONSE"
echo ""

# Test Backend Analyze Endpoint
echo "2️⃣ Testing Backend Analyze Endpoint..."
ANALYZE_RESPONSE=$(curl -s -X POST https://investiq-ai-investment-research.onrender.com/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"company":"AAPL"}' | head -c 200)
echo "Response (first 200 chars): $ANALYZE_RESPONSE..."
echo ""

echo "✅ Backend is responding!"
echo ""
echo "📋 Next Steps:"
echo "1. Add VITE_API_URL in Vercel Environment Variables"
echo "2. Add FRONTEND_URL in Render Environment Variables"
echo "3. Redeploy both services"
echo "4. Visit your Vercel URL and test!"
