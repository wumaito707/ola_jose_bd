# Joseph Olamide Birthday Website

A personal birthday tribute built with HTML, CSS and JavaScript, featuring a friendship journey, memories, stories and birthday wishes.

## Pages

- `index.html` — welcome and gift entry
- `journey.html`, `story.html`, `memories.html`, `final.html` — public chapters
- `secret.html` — a personal chapter intentionally excluded from the sitemap and marked `noindex`

## Hosting

This static website is published at https://ola-jose-bd.onrender.com/.

## Privacy limitation

The existing secret-code prompt is **client-side only**, not secure authentication: the access code can be discovered in published JavaScript, and `secret.html` remains directly readable by anyone with its URL. The `noindex` tag asks search engines not to index that chapter, but **does not restrict access**. For genuine privacy, the chapter must move to a backend-protected endpoint or an authenticated private host.

The music player starts only when the visitor presses Play.
