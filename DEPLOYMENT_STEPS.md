# 🚀 Deployment Steps - Fix Your Vercel Build

## Current Situation
- ✅ Backend deployed and working: `https://investiq-ai-investment-research.onrender.com`
- ✅ Frontend deployed but not connected: `https://invest-iq-ai-investment-research.vercel.app`
- ❌ Missing environment variables in both platforms

## What You Need to Do Now

### Step 1: Configure Vercel Environment Variable

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project: `invest-iq-ai-investment-research`
3. Go to **Settings** → **Environment Variables**
4. Add this variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://investiq-ai-investment-research.onrender.com`
   - **Environment**: All (Production, Preview, Development)
5. Click **Save**
6. Go to **Deployments** tab → Click the 3 dots on latest deployment → **Redeploy**

### Step 2: Configure Render Environment Variable

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click on your service: `investiq-ai-investment-research`
3. Go to **Environment** in the left sidebar
4. Add this variable:
   - **Key**: `FRONTEND_URL`
   - **Value**: `https://invest-iq-ai-investment-research.vercel.app`
5. Click **Save Changes** (this will auto-redeploy)

### Step 3: Wait and Test

1. Wait 2-5 minutes for both services to redeploy
2. Visit: `https://invest-iq-ai-investment-research.vercel.app`
3. Try analyzing a stock (e.g., `AAPL`, `MSFT`, or `TCS.NS`)
4. If it works → ✅ You're done!

## If Vercel Still Fails

If the Vercel build still fails after adding the environment variable:

1. Go to **Settings** → **General** in your Vercel project
2. Set these **Build & Development Settings**:
   - **Root Directory**: Leave blank (or set to `client`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Click **Save**
4. Redeploy again

## Alternative: Deploy from Vercel Dashboard

If automatic deployment isn't working:

1. In Vercel Dashboard, go to your project
2. **Settings** → **Git**
3. Change **Root Directory** to: `client`
4. **Save**
5. Go to **Deployments** → **Redeploy**

## Troubleshooting

### Check Backend Health
```bash
curl https://investiq-ai-investment-research.onrender.com/
```
Should return: `{"success":true,"message":"InvestIQ API is running"}`

### Check Frontend Console
After deployment, open browser DevTools (F12) and check:
- Console for errors
- Network tab for failed API calls
- Make sure requests go to `https://investiq-ai-investment-research.onrender.com/api/...`

## Environment Variables Summary

### Vercel (Frontend)
```
VITE_API_URL=https://investiq-ai-investment-research.onrender.com
```

### Render (Backend)
```
FRONTEND_URL=https://invest-iq-ai-investment-research.vercel.app
OPENROUTER_API_KEY=your_openrouter_api_key_from_env_file
GNEWS_API_KEY=your_gnews_api_key_from_env_file
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key_from_env_file
```

**Get your actual API keys from your local `server/.env` file**

## Important Notes

1. **Vite requires restart**: Environment variables in Vite apps (VITE_*) only load at build time, not runtime. That's why redeploy is required.

2. **CORS is configured**: Your backend already accepts requests from `*.vercel.app` domains.

3. **API keys are safe**: Never commit `.env` files to GitHub. Always add them through the dashboard.

## Need Help?

If you're still having issues after following these steps, check:
1. Vercel deployment logs (click on deployment → View Build Logs)
2. Render logs (click on service → Logs tab)
3. Share the error messages for specific help
