# Contributing to the Oakridge Nuclear Power Station Wiki

Thanks for helping improve the Oakridge Nuclear Power Station website! This guide will walk you through how to contribute safely and effectively.

---

## 🔧 Editing Content

### ✅ Allowed Files to Edit:
- `index.html` – Main landing page content and article links
- `prestart.html`, `startup.html`, `shutdown.html`, etc. – Individual article pages
- `images/` – Add new images (must be optimized `.webp` or `.png`)
- `style.css` – Only if you’re improving layout or fixing broken styles

### ❌ Do NOT:
- Change the structure of core components (header, footer)
- Add scripts or external plugins without discussion
- Upload non-game-related or uncompressed images

---

## ✍️ How to Edit a Page

1. Open the file you want to change (e.g. `index.html`)
2. Edit only inside the appropriate `<section>` tags, such as:

```html
<section id="game-description">
  <h2>Welcome to the Team</h2>
  <p>...your edits here...</p>
</section>

```



---
name: HTML Starter
slug: html-starter-with-analytics
description: HTML5 template with analytics and advanced routing configuration.
deployUrl: https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/html&project-name=html
relatedTemplates:
  - nextjs-boilerplate
---

# HTML Starter

This is a starter HTML5 templates which is configured with Vercel Analytics (through a `script` tag), advanced routing with [Vercel Edge Middleware](https://vercel.com/docs/concepts/functions/edge-middleware), as well as some basic styles

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/html&project-name=html)
