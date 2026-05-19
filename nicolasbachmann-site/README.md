# nicolasbachmann.com

Personal portfolio for Nicolas Bachmann — Swiss-Uruguayan filmmaker, director, DP.
Static site (HTML/CSS/JS), hosted on Netlify, source on GitHub.

Content migrated from the previous Wix site. All real projects, clients, bio and contact info preserved — see "What's in" below.

---

## What's in this site

**Sections:**
1. **Hero** — Orson Welles tagline, your name and role
2. **Showreel 2025** — Vimeo 1069516317
3. **Film & Video projects** — 10 projects with full credits (2009–2020):
   Vanessa Martinelli · Motivational Video · Azure Resources · Julius Baer · ArchTailor · Cerbios Pharma · Unilever · La Valdez · Planeta DeAgostini · A Patagonia Tale
4. **Selected clients** — 16 client links: Sintetica, Vinattieri, Agire, Gruppo CDT, MediaTI, Teleticino, Julius Baer, Rapelli, Dallmayr, Unilever, UNICEF, La Nación, Planeta DeAgostini, Mar del Plata Film Festival, RSI, Ledfilms
5. **Photography** — six categories (Editorial, Architecture, Food, Real Estate, Drone, Landscape)
6. **Services** — Film Production, Post Production, Drone, Camera, Copywriting, Creative Direction
7. **About** — full bio
8. **Contact** — email, phone +41 76 543 78 39, Lugano CH, Netlify contact form

**Files:**
```
.
├── index.html       ← the homepage
├── styles.css       ← all the styling (colors, fonts, layout)
├── script.js        ← tiny script for the menu + scroll behavior
├── success.html     ← page shown after the contact form is sent
├── netlify.toml     ← Netlify settings (caching, security headers)
├── robots.txt       ← search engine instructions
└── sitemap.xml      ← list of pages for Google
```

No build step. What you see is what gets shipped.

---

## ⚠️ Important: photo placeholders

The photography section currently links to your existing images on Wix's CDN (`static.wixstatic.com/...`). **These will keep working only while your Wix account is active.** Before cancelling Wix, download those photos and re-upload them to your repo.

**To replace photos:**
1. Right-click each image on your live Wix site → "Save image as…" → save full-quality versions
2. Drag the files into your GitHub repo (create a folder called `images/`)
3. In `index.html`, find the `<!-- PHOTOGRAPHY -->` section
4. Replace each `src="https://static.wixstatic.com/..."` with `src="images/your-filename.jpg"`

---

## Deploy it — first time (≈ 20 min)

### 1) Put the files on GitHub

1. Go to **https://github.com** and sign in (create a free account if needed).
2. Click the **+** in the top right → **New repository**.
3. Name it `nicolasbachmann-site` (or anything you like).
   - Public or Private both work.
   - Don't tick any "initialize" boxes.
4. Click **Create repository**. You'll land on an empty repo page.
5. Click **uploading an existing file** in the quick setup text.
6. Drag the whole contents of this folder (index.html, styles.css, etc.) into the browser window.
7. Click **Commit changes** at the bottom.

Your code is now on GitHub. ✅

### 2) Connect Netlify to GitHub

1. Go to **https://netlify.com** and sign up with your GitHub account.
2. Click **Add new site → Import an existing project**.
3. Pick **GitHub**, authorize Netlify, then choose `nicolasbachmann-site`.
4. Build settings — leave the defaults (publish directory `.`).
5. Click **Deploy**.

In ~30 seconds you'll have a live site at something like
`https://wonderful-curie-abc123.netlify.app`. Test it.

### 3) Point nicolasbachmann.com at Netlify

1. In Netlify → your site → **Domain management** → **Add a domain**.
2. Type `nicolasbachmann.com`. Netlify shows you the DNS records to set.
3. Log into your **current Wix dashboard** → Domains.
4. Either:
   - **Option A (recommended):** Change your nameservers to Netlify's. Wix → Domains → Advanced → Nameservers. Paste Netlify's two nameservers.
   - **Option B:** Keep Wix as DNS, just change the A record + CNAME to what Netlify gave you.
5. Wait 10 min – a few hours for DNS to propagate. Netlify auto-issues a free HTTPS certificate once it sees the domain.

When the green padlock appears, your old Wix site is replaced. **Don't cancel Wix yet** — wait a few days to make sure everything works, and make sure you've downloaded all your photos first.

---

## Edit the site after launch

### Quick edits — text, credits, dates

1. On GitHub, open **index.html**.
2. Click the **pencil icon** (top-right of the file view).
3. Find what you want to edit. The comments (`<!-- ... -->`) say what each block does.
4. Edit, scroll down, click **Commit changes**.
5. Netlify auto-deploys in ~30 seconds. Refresh your site.

### To add a new film project

In `index.html` find the `<!-- Vanessa Martinelli -->` block (it starts with `<article class="project">`). Copy the whole block, paste it where you want, and update:
- The Vimeo ID (in the iframe `src`) — get it from your Vimeo video URL
- The mono tag (year · type · location)
- The `<h3>` title
- The `<dl class="credits">` block

### To update your showreel

In `index.html` find this near the top:
```html
<iframe src="https://player.vimeo.com/video/1069516317?..."
```
Replace `1069516317` with your new reel's Vimeo number.

### To change colors or fonts

Open `styles.css`. The very top has a `:root { }` block with all the design tokens. Edit those values and the whole site retunes.

---

## Contact form

The form on the home page is wired to **Netlify Forms** — submissions appear in your Netlify dashboard under **Forms**. To get them by email: Netlify → site → Forms → Settings & usage → Form notifications → add `nicolasbachmann@gmail.com`.

Free plan: 100 submissions/month. Plenty for a portfolio.

---

## Performance & SEO — already done

- ✅ Mobile-first responsive
- ✅ Lazy-loaded images and Vimeo embeds
- ✅ Preconnected fonts
- ✅ Open Graph + Twitter card meta for nice link previews
- ✅ Schema.org Person structured data (Google can show your photo, location, role)
- ✅ robots.txt + sitemap.xml
- ✅ Long-cache headers via netlify.toml
- ✅ Security headers (X-Frame-Options, Permissions-Policy, etc.)

Once live, paste your URL into **https://pagespeed.web.dev** — should score 90+ on mobile.

---

## Local preview

Just **double-click `index.html`** to open it in a browser. Done. No server needed.

(For a slightly nicer experience: install VS Code + the "Live Server" extension, right-click index.html → "Open with Live Server". It auto-reloads on save.)
