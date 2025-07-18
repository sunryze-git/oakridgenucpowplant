# Contributing to the Oakridge Nuclear Power Station Wiki

Thanks for helping improve the Oakridge Nuclear Power Station website! This guide will walk you through how to contribute safely and effectively.

---

## 🔧 Editing Content

### ✅ Allowed Files to Edit:
- `index.html` – Main landing page content and article links
- `prestart.html`, `startup.html`, `shutdown.html`, etc. – Individual article pages
- `images/` – Add new images (must be `.webp` or `.png`)
- `style.css` – Only if you’re improving layout or fixing broken styles

### ❌ Do NOT:
- Edit `script.js` without ShrimpQuack Being notified about it prior.
- Change the structure of core components (header, footer)
- Add scripts or external plugins without discussion
- Upload non-game-related or uncompressed images
- Remove files
- Edit `Middleware.js`
  

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

## Pull Request Guidelines
When you’ve made your changes:

Create a pull request with a clear title and summary.

Your PR will be reviewed before merging — we check for:

- Broken links
- HTML syntax errors
- Visual or mobile layout issues
- Spelling/grammar consistency

## Style & Writing Guidelines
- Keep language professional and friendly
- Use second person (“you will...”) for guides
- Keep titles in Title Case: Pre-Start Guide, Emergency Situations, etc.
- Break long content into short paragraphs

## Need Help?
Open an issue or tag @ShrimpQuack on Discord with any questions or to request edit access.

---

*Ignore Below that is for the hosting service*

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
