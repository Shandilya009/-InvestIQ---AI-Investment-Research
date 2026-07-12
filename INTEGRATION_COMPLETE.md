# ✅ Backend-Frontend Integration Guide

## 🎯 Your URLs:

**Backend (Render):** https://investiq-ai-investment-research.onrender.com
**Frontend (Vercel):** https://invest-iq-ai-investment-research.vercel.app

---

## ✅ Backend Status: WORKING!

Tested and confirmed:
```json
{
  "success": true,
  "message": "InvestIQ API is running",
  "version": "1.0.0"
}
```

---

## 📋 Complete Integration Steps:

### Step 1: Add Environment Variable in Vercel ⚡

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your project: **invest-iq-ai-investment-research**
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in sidebar
5. Click **"Add New"** button
6. Add:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://investiq-ai-investment-research.onrender.com`
   - **Environments:** Check all (Production, Preview, Development)
7. Click **"Save"**
8. Go to **"Deployments"** tab
9. Click **"..."** on latest deployment → **"Redeploy"**

---

### Step 2: Add Environment Variable in Render 🔄

1. Go to Render dashboard: https://dashboard.render.com
2. Click on your service: **investiq-api** (or whatever you named it)
3. Click **"Environment"** in left sidebar
4. Click **"Add Environment Variable"**
5. Add:
   - **Key:** `FRONTEND_URL`
   - **Value:** `https://invest-iq-ai-investment-research.vercel.app`
6. Click **"Save Changes"**
7. Service will auto-redeploy (wait 2-3 minutes)

---

## 🧪 Test Your Integration:

### Test 1: Backend Health Check
```bash
curl https://investiq-ai-investment-research.onrender.com/
```

**Expected Response:**
```json
{
  "success": true,
  "message": "InvestIQ API is running",
  "version": "1.0.0",
  "description": "AI-powered investment research platform"
}
```

### Test 2: Backend Analyze Endpoint
```bash
curl -X POST https://investiq-ai-investment-research.onrender.com/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"company":"AAPL"}'
```

**Expected:** Full analysis response with stock data

### Test 3: Frontend
1. Open: https://invest-iq-ai-investment-research.vercel.app
2. Search for: **AAPL**
3. Click **"Analyze Company"**
4. Should see full investment analysis

---

## ⚠️ Common Issues & Fixes:

### Issue 1: "Failed to fetch" or Network Error

**Cause:** Environment variable not set in Vercel

**Fix:**
1. Check Vercel Environment Variables
2. Verify `VITE_API_URL` is set correctly
3. Redeploy Vercel

### Issue 2: CORS Error

**Cause:** Frontend URL not added to Render

**Fix:**
1. Check Render Environment Variables
2. Verify `FRONTEND_URL` matches your Vercel URL exactly
3. No trailing slash!
4. Wait for Render to redeploy

### Issue 3: Backend Slow/Timeout (First Request)

**Cause:** Render free tier cold start

**Expected:**
- First request after 15 min: 30-60 seconds
- Subsequent requests: Fast (< 1 second)

**Fix:** This is normal on free tier. Upgrade to $7/month to eliminate cold starts.

### Issue 4: 404 Not Found

**Cause:** Wrong API URL

**Fix:**
1. Verify backend URL: https://investiq-ai-investment-research.onrender.com
2. Check Vercel environment variable
3. Make sure no typos

---

## 📊 Deployment Status Checklist:

- [x] ✅ Backend deployed on Render
- [x] ✅ Backend health check working
- [ ] ⏳ `VITE_API_URL` added to Vercel (YOU DO THIS)
- [ ] ⏳ `FRONTEND_URL` added to Render (YOU DO THIS)
- [ ] ⏳ Vercel redeployed (YOU DO THIS)
- [ ] ⏳ Render redeployed (automatic)
- [ ] ⏳ Test frontend → backend connection (YOU DO THIS)

---

## 🎯 Quick Verification:

### After setting environment variables:

1. **Wait 5 minutes** for both services to redeploy
2. **Open your Vercel URL** in browser
3. **Search for a stock** (e.g., "AAPL")
4. **Click Analyze**
5. **Should see full analysis!**

---

## 🔧 Debug Commands:

```bash
# Test backend
curl https://investiq-ai-investment-research.onrender.com/

# Test analyze endpoint
curl -X POST https://investiq-ai-investment-research.onrender.com/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"company":"AAPL"}'

# Check Vercel deployment logs
# Go to: https://vercel.com/dashboard → Your Project → Deployments → Click latest → View Function Logs

# Check Render logs
# Go to: https://dashboard.render.com → Your Service → Logs
```

---

## 📝 Environment Variables Summary:

### Vercel (Frontend):
```
VITE_API_URL=https://investiq-ai-investment-research.onrender.com
```

### Render (Backend):
```
NODE_ENV=production
PORT=10000
OPENROUTER_API_KEY=your_key
OPENROUTER_MODEL=openai/gpt-4o-mini
ALPHA_VANTAGE_API_KEY=your_key
GNEWS_API_KEY=your_key
FRONTEND_URL=https://invest-iq-ai-investment-research.vercel.app
```

---

## ✅ You're Done When:

1. ✅ You can open your Vercel URL
2. ✅ Search bar accepts input
3. ✅ Clicking "Analyze" shows loading
4. ✅ Full analysis appears with:
   - Company name
   - Financial metrics
   - AI recommendation
   - Price chart
   - News articles

---

## 🎉 Success!

Your full-stack InvestIQ application is now live:
- **Frontend:** Vercel (fast, global CDN)
- **Backend:** Render (Node.js API)
- **Integrated:** Ready for users!

---

**Need Help?**
- Check Vercel logs for frontend errors
- Check Render logs for backend errors
- Verify environment variables are set correctly
- Wait 5 minutes after setting variables
- Test backend directly with curl first
