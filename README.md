# Revana — Flipkart Review Analyzer (Frontend)

**Live Site:** https://revana.vercel.app/

Revana is a React (Vite) frontend that accepts a Flipkart product URL, calls a backend scraper/processor, and visualizes:

- Product details (name, price, image, specs)
- Sample reviews
- **Rating distribution**
- **Sentiment distribution**
- **Word cloud** generated from reviews

> This repository contains the **frontend only**. The backend is a separate Flask + Playwright service (e.g., hosted on Render) that exposes `POST /scrape_reviews`.

---

## ✨ Features

- ⚡️ **Vite + React** single-page app
- 🎨 **Tailwind CSS** styling
- 📊 **Chart.js** via `react-chartjs-2` for rating/sentiment charts
- ☁️ **Vercel**-ready static deployment
- 🔌 Configurable backend via `VITE_API_URL`

---

## 🧱 Tech Stack

- **Framework:** React 16.14 + Vite 5  
- **Routing:** React Router DOM 6  
- **Styling:** Tailwind CSS 3  
- **Charts:** Chart.js 4 + `react-chartjs-2`  
- **Word Cloud:** `react-wordcloud` (uses `d3-cloud`)  
- **Deploy:** Vercel (frontend), Render/Docker (backend)

> ℹ️ The app uses **React 16** to match `react-wordcloud` peer dependencies. The entry uses `ReactDOM.render` (React 16 API).

---

## 📁 Project Structure

```
revana/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Contactform.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Herosection.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ OurTeam.jsx
│  │  ├─ Pricing.jsx
│  │  ├─ SearchBar.jsx        # accepts product URL and triggers scrape
│  │  └─ Service.jsx
│  ├─ script/
│  ├─ style/
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx                # React 16 entry (ReactDOM.render)
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vercel.json                # rewrites (proxy + SPA fallback) – optional
└─ vite.config.js
```

---

## 🔌 Backend Contract

Frontend sends:

```
POST {VITE_API_URL}/scrape_reviews
Content-Type: application/json
Body: { "url": "<flipkart product link>" }
```

**Typical response (abridged):**
```json
{
  "ok": true,
  "product_details": {
    "Product Name": "…",
    "Product Price": "…",
    "Image URL": "…",
    "Specifications": { "…" : "…" }
  },
  "reviews_scraped": 120,
  "rating_distribution": { "1":5, "2":8, "3":20, "4":40, "5":47 },
  "sentiment_distribution": { "positive":60, "neutral":40, "negative":20 },
  "wordcloud": "concatenated review text for word cloud",
  "sample_reviews": ["…", "…"],
  "sample_titles": ["…", "…"]
}
```

Simple fetch helper:
```js
// src/script/api.js
export const API_BASE = import.meta.env.VITE_API_URL;

export async function scrapeReviews(url) {
  const res = await fetch(`${API_BASE}/scrape_reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });
  const data = await res.json();
  if (!res.ok || data.ok === false) {
    throw new Error(data.error || data.message || "Scrape failed");
  }
  return data;
}
```

---

## ⚙️ Local Setup

### 1) Prerequisites
- Node.js **18+**

### 2) Install
```bash
npm install
# If your machine warns about peer deps:
# npm install --legacy-peer-deps
```

### 3) Configure the backend URL
Create **`.env`** in the project root:

```dotenv
VITE_API_URL=https://<your-backend>.onrender.com
```

> In code this is read as `import.meta.env.VITE_API_URL`.

### 4) Run
```bash
npm run dev
# open http://localhost:5173
```

---

## 🧪 Example CLI Call (matches the UI)

```bash
curl -X POST "$VITE_API_URL/scrape_reviews"   -H "Content-Type: application/json"   -d '{"url":"https://www.flipkart.com/<product-url>"}'
```

---

## 🏗️ Build

```bash
npm run build
npm run preview   # serves the production build from dist/
```

---

## ☁️ Deployment (Vercel)

**Recommended settings**
- Framework Preset: **Vite**
- Install Command: `npm install`  *(or `npm ci`)*
- Build Command: `npm run build`
- Output Directory: `dist`

**Environment Variables**
- `VITE_API_URL = https://<your-backend>.onrender.com`

**Optional `vercel.json`**
If you want to proxy API requests and enable SPA fallback:

```json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "https://<your-backend>.onrender.com/:path*" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Then in the frontend you can call `/api/scrape_reviews` instead of using `VITE_API_URL`.

---

## 🔧 Notes for React 16

- Entry uses the React 16 API:
```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

- Avoid `react-dom/client` and `createRoot` (React 18-only).
- If you add TypeScript, pin `@types/react` and `@types/react-dom` to 16.x.

---

## 🚨 Troubleshooting

- **CORS errors**: Ensure the backend enables CORS (e.g., Flask `CORS(app)`) or use the `/api/*` rewrite in `vercel.json`.
- **Peer dependency warnings**: This repo pins React 16 for `react-wordcloud`. If needed, add an `.npmrc` with:
  ```
  legacy-peer-deps=true
  ```
- **Build error “cannot resolve react-dom/client”**: Ensure `src/main.jsx` uses `react-dom` and `ReactDOM.render` (as above).
- **Slow first scrape**: Backend may cold-start Playwright/Chromium; subsequent calls are faster.

---

## 🗺️ Roadmap

- Review filters (rating / sentiment / recency)
- Paginated review preview
- Export CSV / chart images
- Better error messages and form validation
- Optional migration to a React-18 compatible word cloud component

