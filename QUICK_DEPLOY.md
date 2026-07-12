# ⚡ Quick Deploy Reference

## Backend (Render)

1. **Sign up**: https://render.com (use GitHub)
2. **New Web Service** → Connect GitHub repo
3. **Settings**:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   OPENROUTER_API_KEY=your_key
   OPENROUTER_MODEL=openai/gpt-4o-mini
   ALPHA_VANTAGE_API_KEY=DZGJIRWOMP1N4SVK
   GNEWS_API_KEY=your_key (optional)
   ```
5. **Deploy** → Get URL: `https://investiq-api.onrender.com`

---

## Frontend (Vercel)

1. **Sign up**: https://vercel.com (use GitHub)
2. **Import Project** → Select your GitHub repo
3. **Settings**:
   - Root Directory: `client`
   - Framework: Vite (auto-detected)
4. **Environment Variables**:
   ```
   VITE_API_URL=https://investiq-api.onrender.com
   ```
5. **Deploy** → Get URL: `https://your-project.vercel.app`

---

## Update Backend CORS

After frontend deploys:
1. Go to Render → Your Service → Environment
2. Add: `FRONTEND_URL=https://your-project.vercel.app`
3. Save (auto-redeploys)

---

## Test

**Backend**: `curl https://investiq-api.onrender.com/`

**Frontend**: Open Vercel URL and search for "AAPL"

---

## ⚠️ Common Issues

**Slow first request**: Free tier cold start (30-60 sec)

**CORS error**: Check `FRONTEND_URL` matches Vercel URL exactly

**Build fails**: Check logs in respective dashboard

---

**Done!** 🎉
