# 朱师傅 · 匠心装修 — Bilingual Renovation Portfolio (`xu-folio`)

A buildless, image-rich, **Chinese-default / English-toggle** portfolio site for
**朱师傅 (Master Zhu)**, showcasing two fully renovated vacation rentals.

Pure static HTML/CSS/JS — no build step, no dependencies, no external CDNs or web
fonts (so it loads reliably inside mainland China / the WeChat in-app browser).

## Files
```
index.html        # the page (Chinese baked in as default)
style.css         # warm, photo-forward responsive theme
app.js            # language toggle + gallery rendering + lightbox
data/galleries.js # ALL the content you'll edit: photos + bilingual captions
img/
  property-a/     # photos for the first rental  (a-01.jpg, a-02.jpg, …)
  property-b/     # photos for the second rental (b-01.jpg, b-02.jpg, …)
  shared/         # hero.jpg (homepage banner) + wechat-qr.png (your QR)
```

## How to view it
Just open `index.html` in any browser — no server needed. It defaults to Chinese;
the **EN / 中文** button (top-right) switches languages and remembers your choice.

## Editing the content (no coding needed)
Everything you'll want to change lives in **`data/galleries.js`** and the strings at the
top of **`app.js`**:

- **Captions / room names** — in `data/galleries.js`, each photo has a `zh` and an `en`
  caption. Edit the text between the quotes.
- **Adding a photo** — drop the image into `img/property-a/` (or `-b/`), then add one
  block in `data/galleries.js`:
  ```js
  { file: "a-08", phase: "after",
    room:    { zh: "玄关",       en: "Entryway" },
    caption: { zh: "中文描述…",  en: "English description…" } },
  ```
- **`phase`** can be `"before"`, `"after"`, `"detail"`, or `null` — it shows a small
  badge on the photo.
- **WeChat / about / hero text** — edit the `zh` and `en` values near the top of `app.js`.

## Photo file convention
- Put files in the matching folder and name them `a-01.jpg`, `a-02.jpg`, … for the first
  property and `b-01.jpg`, `b-02.jpg`, … for the second.
- The `file` field in `data/galleries.js` is the name **without** the `.jpg` extension.
- A photo that isn't present yet shows a tidy grey placeholder slot (no broken image),
  so the page always looks finished.
- **Recommended size:** longest edge ~1600 px, JPEG quality ~80, aim for under ~400 KB
  each so it loads fast on phones.
- **Hero banner:** put your best wide shot at `img/shared/hero.jpg`.
- **WeChat QR:** save your QR image as `img/shared/wechat-qr.png`.

## Publishing on GitHub Pages (the `xu-folio` repo)
1. Copy the **contents** of this `xu-folio/` folder into the root of your `xu-folio`
   repository (so `index.html` sits at the repo root).
2. Commit and push.
3. In the repo: **Settings → Pages →** deploy from your branch (root). After a minute
   the site is live at `https://<your-username>.github.io/xu-folio/`.
4. Share that link — it shows a clean preview card when sent on WeChat.

## Things to double-check
- The Airbnb listing links and which photo set belongs to which property are set in
  `data/galleries.js` (`airbnb` field). Swap them if a gallery is matched to the wrong
  listing.
- Fill in the real **WeChat ID** (in `app.js`, key `contact.wechatId`) and add
  `img/shared/wechat-qr.png`.
