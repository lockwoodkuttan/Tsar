# Tsar Linen Website

This folder contains the complete Tsar Linen website, ready to deploy to Netlify.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The home page (the first page visitors see) |
| `products.html` | The full product collection with pricing tiers |
| `about.html` | Brand story and manufacturing partner info |
| `process.html` | How wholesale ordering works, step by step |
| `contact.html` | Quote request form (sends to your Gmail) |
| `thank-you.html` | Page shown after someone submits the form |
| `privacy.html` | Privacy policy (legally required) |
| `terms.html` | Terms of service (legally required) |
| `styles.css` | The visual styling for every page |
| `logo.svg` | Your crown + T logo |
| `favicon.svg` | The tiny logo shown in browser tabs |
| `netlify.toml` | Netlify configuration (don't edit) |
| `robots.txt` | Tells Google what to index |
| `sitemap.xml` | Helps Google find all your pages |
| `README.md` | This file |

## How to deploy this site (do this once)

You'll need:
- A GitHub account (you already created one)
- A Netlify account (you already created one)
- About 30 minutes

### Step 1: Upload the folder to GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the green "New" button (top left) to create a new repository
3. Name it `tsar-linen-website` (or anything you want)
4. Choose **Public** (free option) — no need for Private
5. Don't check any of the "Add a README" boxes — leave them empty
6. Click "Create repository"
7. On the next page, click **"uploading an existing file"** (it's a link in the middle of the page)
8. Drag the entire contents of this folder onto the upload area
   - Important: drag the FILES (index.html, styles.css, etc.), not the folder itself
9. Wait for the upload to finish
10. Scroll down and click "Commit changes"

### Step 2: Connect GitHub to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Click "Deploy with GitHub"
4. Authorize Netlify to access your GitHub if prompted
5. Find and select your `tsar-linen-website` repository
6. Leave all the default settings — don't change anything
7. Click "Deploy site"
8. Wait 30 seconds. Netlify will show you a URL like `something-random-12345.netlify.app`
9. Visit that URL in your browser. **Your site is live!**

### Step 3: Connect your custom domain (tsarlinen.com)

(Do this AFTER you've bought tsarlinen.com on Cloudflare.)

1. In Netlify, go to your site → "Domain settings" → "Add custom domain"
2. Type `tsarlinen.com` and click "Verify"
3. Netlify will give you DNS records to copy
4. Open Cloudflare in another tab → DNS settings for tsarlinen.com
5. Add the records Netlify gave you
6. Wait 10–60 minutes for DNS to update
7. Visit `tsarlinen.com` — your site will load

### Step 4: Set up form notifications

By default, Netlify catches form submissions but doesn't email them to you. Fix that:

1. In Netlify → your site → "Forms" tab
2. You'll see "quote-request" listed
3. Go to "Settings & usage" → "Form notifications"
4. Click "Add notification" → "Email notification"
5. Enter `lockwoodkuttan@gmail.com` as the recipient
6. Save

Now every time someone submits the quote form, you get an email.

## How to edit content

To change anything on the site:

1. Go to your `tsar-linen-website` repository on GitHub
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the pencil icon (top right of the file view) to edit
4. Make your changes
5. Scroll down and click "Commit changes"
6. Netlify auto-deploys the new version in about 30 seconds

### Common edits

- **Change pricing**: Open `products.html`, find `$5.50`, replace with new price
- **Change the email**: Find `lockwoodkuttan@gmail.com` across all files, replace with new email
- **Change the phone**: Search for `+1 (555)` (currently a placeholder, not added — add it where you want)
- **Update the testimonial**: Open `index.html`, search for "Sarah Chen", replace with your real testimonial

### Tip: Use GitHub's search

On your repository page, press the `/` key. You can search across all files for any text you want to change.

## Adding real product photos later

When you have product photos:

1. Save them as JPGs (compress to under 500KB each — use [tinypng.com](https://tinypng.com))
2. Upload them to your GitHub repo (drag and drop into the file list)
3. In `products.html`, replace the `<svg>` tags with `<img src="your-photo.jpg" alt="Description" />`
4. Commit changes — Netlify deploys the new version

If this part feels confusing, just send me the photos in Claude and I'll update the code for you.

## Need to make a bigger change?

Send the request to Claude. Describe what you want changed in plain English ("change the hero headline to X" or "add a fourth value prop"), and Claude will give you updated file(s) to upload.

## Important notes

- **Your real product photos are needed for serious selling.** The SVG illustrations are nice for v1 but won't convert corporate buyers long-term. Plan a photo shoot in the next month.
- **The testimonial on the home page is fake** ("Sarah Chen / National HR Conference"). Replace it with a real one as soon as you have one — or remove that section entirely until you do.
- **The phone number isn't filled in.** Currently the contact page only shows email. Add a phone if you want one.
- **Privacy and Terms are starter templates.** Fine for launch, but get a lawyer to review once you're doing real business.

## Getting help

If anything breaks or you want to make a change you're unsure about, ask Claude. Paste a description of what's happening (or what you want), and Claude can debug or rewrite.

Good luck with Tsar Linen.
