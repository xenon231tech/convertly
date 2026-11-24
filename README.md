# Convertly — Live Currency Converter

A fast, professional currency converter for fiat and crypto. Live rates, 30-day
price charts, shareable conversion links, and offline support — no build step,
no sign-up, no tracking.

**Live demo:** https://convertly-xenon231techs-projects.vercel.app/

## Features

- **169 currencies** — 166 fiat currencies plus BTC, ETH, and USDT
- **Live exchange rates** from [exchangerate-api](https://www.exchangerate-api.com/)
  (fiat) and [CoinGecko](https://www.coingecko.com/) (crypto), refreshed automatically
- **30-day price chart** (7D / 30D / 90D) with high, low, and change — fiat via
  [Frankfurter](https://www.frankfurter.dev/) (ECB reference rates), crypto via CoinGecko
- **Flag icons** for every currency (via [circle-flags](https://github.com/HatScripts/circle-flags))
- **Shareable links** — every conversion has a URL (`?from=&to=&amount=`) you can
  copy and send; opening the link restores the exact conversion
- **Copy result / copy link** buttons with clipboard fallback
- **Multi-currency table** — see your amount in IDR, EUR, GBP, JPY, SGD, and AUD
  at a glance
- **Recent conversions** — your last 10 conversions, one tap to reload
- **Dark and light mode**, mobile-first, fully responsive
- **PWA** — installable, works offline with cached rates (service worker)
- **Honest errors** — if a rate source is down, the app says so and falls back to
  the last cached rate. It never invents a rate.

## Tech stack

- Vanilla HTML, CSS, and JavaScript — a single self-contained `index.html`
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts)
- No frameworks, no build step, no backend

## Project structure

```
convertly/
├── index.html      # The entire app (markup, styles, logic)
├── icon.svg        # App logo (swap-arrows mark)
├── og-image.png    # 1200×630 social preview image
├── manifest.json   # PWA manifest
└── sw.js           # Service worker (offline cache)
```

## Run locally

No build step needed. Serve the folder with any static server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Then open http://localhost:8000

> Opening `index.html` directly from disk also works, but the service worker
> (offline mode) requires serving over HTTP.

## Deploy

The repo auto-deploys to Vercel on every push to `main`.

## Data sources & attribution

- Fiat rates: [exchangerate-api.com](https://www.exchangerate-api.com/) (free tier)
- Fiat history: [Frankfurter](https://www.frankfurter.dev/) (European Central Bank
  reference rates)
- Crypto rates & history: [CoinGecko](https://www.coingecko.com/en/api) (free API)
- Flag icons: [circle-flags](https://github.com/HatScripts/circle-flags) by HatScripts

Rates are indicative and may differ from the rate your bank or exchange applies.

## License

[MIT](LICENSE) — free to use, modify, and share.
