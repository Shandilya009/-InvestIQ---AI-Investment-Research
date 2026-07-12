# 🚀 Deployment Guide - InvestIQ

This guide will help you deploy InvestIQ to production:
- **Frontend**: Vercel (Free)
- **Backend**: Render (Free)

---

## 📋 Prerequisites

- GitHub account (already have ✅)
- Vercel account (sign up at https://vercel.com)
- Render account (sign up at https://render.com)
- Your API keys ready

---

## Part 1: Deploy Backend to Render

### Step 1: Sign Up / Log In to Render
1. Go to https://render.com
2. Click "Get Started" or "Sign In"
3. Sign in with GitHub (recommended)

### Step 2: Create New Web Service
1. Click "New +" button (top right)
2. Select "Web Service"
3. Connect your GitHub repository: `Shandilya009/-InvestIQ---AI-Investment-Research`
4. Click "Connect"

### Step 3: Configure Web Service

**Basic Settings:**
- **Name**: `investiq-api` (or any name you prefer)
- **Region**: Choose closest to your users (e.g., `Oregon` for US)
- **Branch**: `main`
- **Root Directory**: `server`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Instance Type:**
- Select: **Free** (0$ per month)

### Step 4: Add Environment Variables

Click "Advanced" → "Add Environment Variable" and add these:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `10000` (Render default) |
| `OPENROUTER_API_KEY` | `your_openrouter_key` |
| `OPENROUTER_MODEL` | `openai/gpt-4o-mini` |
| `ALPHA_VANTAGE_API_KEY` | `DZGJIRWOMP1N4SVK` |
| `GNEWS_API_KEY` | `your_gnews_key` (optional) |
| `TWELVE_DATA_API_KEY` | `your_key` (optional) |

### Step 5: Deploy
1. Click "Create Web Service"
2. Wait 3-5 minutes for deployment
3. Your API URL will be: `https://investiq-api.onrender.com`
4. Test it: Open `https://investiq-api.onrender.com/` - should show health check

**⚠️ Important Notes:**
- Free tier sleeps after 15 min of inactivity
- First request after sleep takes 30-60 seconds (cold start)
- Upgrade to paid tier ($7/month) to avoid cold starts

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Sign Up / Log In to Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub (recommended)
4. Authorize Vercel to access your repositories

### Step 2: Import Project
1. Click "Add New..." → "Project"
2. Find your repo: `Shandilya009/-InvestIQ---AI-Investment-Research`
3. Click "Import"

### Step 3: Configure Project

**Framework Preset:**
- Should auto-detect as "Vite"

**Root Directory:**
- Click "Edit" next to Root Directory
- Select `client`
- Click "Continue"

**Build Settings:**
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Add Environment Variables

Click "Environment Variables" and add:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://investiq-api.onrender.com` |

*(Replace with your actual Render API URL)*

### Step 5: Deploy
1. Click "Deploy"
2. Wait 1-2 minutes
3. Your site will be live at: `https://your-project.vercel.app`

### Step 6: Update Backend CORS
1. Go back to Render dashboard
2. Open your `investiq-api` service
3. Go to "Environment"
4. Add new variable:
   - **Key**: `FRONTEND_URL`
   - **Value**: `https://your-project.vercel.app` (your Vercel URL)
5. Click "Save Changes"
6. Service will auto-redeploy

---

## Part 3: Custom Domain (Optional)

### For Vercel (Frontend):
1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `investiq.com`)
4. Follow DNS configuration instructions
5. Update `FRONTEND_URL` in Render with new domain

### For Render (Backend):
1. Go to your service on Render
2. Click "Settings" → "Custom Domain"
3. Add your API subdomain (e.g., `api.investiq.com`)
4. Follow DNS configuration instructions
5. Update `VITE_API_URL` in Vercel with new domain

---

## 🧪 Testing Your Deployment

### Test Backend:
```bash
# Health check
curl https://investiq-api.onrender.com/

# Test stock analysis
curl -X POST https://investiq-api.onrender.com/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"company":"AAPL"}'
```

### Test Frontend:
1. Open your Vercel URL
2. Search for a stock (e.g., "AAPL" or "TCS.NS")
3. Click "Analyze"
4. Should see investment analysis

---

## 🔧 Troubleshooting

### Backend Issues:

**"Application Error" or 502**
- Check Render logs: Dashboard → Your Service → Logs
- Verify all environment variables are set
- Check if build succeeded

**CORS Error**
- Verify `FRONTEND_URL` environment variable in Render
- Make sure it matches your Vercel URL exactly (no trailing slash)
- Redeploy backend after changing CORS settings

**Cold Start (Slow First Request)**
- Expected on free tier
- First request after 15 min takes 30-60 seconds
- Solution: Upgrade to paid tier or use cron job to ping every 14 minutes

### Frontend Issues:

**"Failed to fetch" or Network Error**
- Check `VITE_API_URL` in Vercel environment variables
- Verify backend is running (visit API URL directly)
- Check browser console for CORS errors

**404 on Refresh**
- Should be fixed by `vercel.json` configuration
- If not, go to Vercel project settings → Check "Rewrites" configuration

**Environment Variables Not Working**
- Vercel requires rebuild after changing env vars
- Go to Deployments → Click "..." → Redeploy

---

## 📊 Monitoring

### Vercel Dashboard:
- View deployment logs
- Monitor bandwidth usage
- Check build status
- See visitor analytics

### Render Dashboard:
- View service logs
- Monitor CPU/memory usage
- Check request metrics
- Set up alerts

---

## 💰 Cost Breakdown

### Free Tier (Current Setup):
- **Vercel**: Free (100 GB bandwidth/month)
- **Render**: Free (750 hours/month, sleeps after 15 min)
- **Total**: $0/month

### Paid Tier (Recommended for Production):
- **Vercel Pro**: $20/month (better performance, unlimited bandwidth)
- **Render Starter**: $7/month (no cold starts, always on)
- **Total**: $27/month

---

## 🚀 Auto-Deploy Setup

Both Vercel and Render are already configured for auto-deploy:

**When you push to GitHub:**
1. Vercel automatically rebuilds frontend
2. Render automatically rebuilds backend
3. Changes go live in 1-3 minutes

**To push changes:**
```bash
git add .
git commit -m "Your changes"
git push origin main
```

---

## 📝 Post-Deployment Checklist

- [ ] Backend deployed to Render ✅
- [ ] Frontend deployed to Vercel ✅
- [ ] All environment variables set ✅
- [ ] CORS configured correctly ✅
- [ ] Health check API responds ✅
- [ ] Stock search works ✅
- [ ] Stock analysis works ✅
- [ ] Charts display correctly ✅
- [ ] Update README with live demo links ✅
- [ ] Add deployment badges to README (optional)

---

## 🎉 You're Done!

Your InvestIQ application is now live:
- **Frontend**: https://your-project.vercel.app
- **Backend**: https://investiq-api.onrender.com

Share your links and enjoy! 🚀

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Vercel logs and Render logs
3. Verify all environment variables are set correctly
4. Check CORS configuration
5. Make sure API keys are valid

---

**Made with ❤️ by Shubham Shandilya**
