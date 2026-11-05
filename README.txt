KATIE SCHICK — PERSONAL SITE
============================

A plain HTML, CSS, and JavaScript site. No build step and no dependencies.

Files
-----
index.html        Home
about.html        About
work.html         Work (engineering and leadership)
embroidery.html   Making > Embroidery
miniatures.html   Making > Miniatures
contact.html      Contact
css/styles.css    All styles. Colors and fonts live in the :root block at the top.
js/site.js        The Making dropdown and the footer year

Preview it
----------
Open index.html in a browser. Everything works from your computer.

Fill it in
----------
1. Search every page for "[" to find each placeholder, such as [Your intro] or [Project name].
2. Photo placeholders are the dashed lavender boxes (class "ph"). Put your images in an
   images/ folder and swap each box for an image, for example:

     <img src="images/embroidery-01.jpg" alt="Describe the piece" width="1000" height="1250">

   Describe each image in the alt text so the site works for screen reader users.
3. Replace hello@yourdomain.com (it appears in each page footer and on contact.html).
4. Add your LinkedIn, GitHub, and Instagram links on about.html and contact.html.

Before you launch
-----------------
Every page has this line in the head:

  <meta name="robots" content="noindex">

It asks search engines to skip the site while it still has placeholders. Delete it from
all six pages when you are ready for the site to be found.

Putting it on your domain
-------------------------
Option A, Namecheap hosting: upload the contents of this folder (not the folder itself) to
the public_html folder using the File Manager in cPanel.

Option B, a free static host such as Cloudflare Pages, Netlify, or GitHub Pages: upload
this folder, then point your Namecheap domain at the host using the DNS settings the
host gives you.

Notes
-----
- Fonts (Fraunces and Inter) load from Google Fonts. You can download and host them
  yourself later if you prefer.
- There is no contact form, only an email link. A form needs a service to receive the
  messages, such as Formspree or Netlify Forms, and can be added later.
