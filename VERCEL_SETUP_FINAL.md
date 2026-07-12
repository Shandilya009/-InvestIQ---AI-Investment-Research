# 🎯 Final Vercel Setup Instructions

## The Problem
Your project is a monorepo with `client/` and `server/` folders. Vercel needs to know it should only build the `client/` folder.

## ✅ Solution: Configure Root Directory in Vercel Dashboard

### Step-by-Step Instructions

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click your project: **invest-iq-ai-investment-research**

2. **Update Settings**
   - Go to **Settings** → **General**
   - Scroll to **Build & Development Settings**
   - Set **Root Directory**: `client`
   - Click the **Edit** button next to Root Directory
   - Type: `client`
   - Check the box: ✅ "Include source files outside of the Root Directory in the Build Step"
   - Click **Save**

3. **Add Environment Variable**
   - Go to **Settings** → **Environment Variables**
   - Add variable:
     - **Key**: `VITE_API_URL`
     - **Value**: `https://investiq-ai-investment-research.onrender.com`
     - **Environment**: Select all 3 (Production, Preview, Development)
   - Click **Save**

4. **Redeploy**
   - Go to **Deployments** tab
   - Click the ⋮ (3 dots) on the latest deployment
   - Click **Redeploy**
   - Wait 2-3 minutes

## What This Does

Setting `Root Directory` to `client` tells Vercel:
- Install dependencies from `client/package.json`
- Run `npm run build` inside the `client/` folder
- Serve files from `client/dist/`

## Expected Result

After redeployment:
- ✅ Build should succeed
- ✅ Your app loads at: `https://invest-iq-ai-investment-research.vercel.app`
- ✅ Stock analysis should work with your Render backend

## If Build Still Fails

Check the build logs for specific errors. Common issues:
- Missing environment variable → Add `VITE_API_URL` in Vercel dashboard
- Dependency errors → Usually auto-resolve on redeploy
- Build command issues → Should be `npm run build` (default for Vite)

## Alternative: Import as New Project

If changing settings doesn't work:

1. Delete the current Vercel project
2. Import fresh from GitHub
3. During setup:
   - **Root Directory**: `client`
   - **Framework**: Vite
   - Add environment variable: `VITE_API_URL`
4. Deploy

This gives you a clean slate with the correct configuration.
