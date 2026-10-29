# yidongzhou.github.io

Personal academic website built with Jekyll and deployed to GitHub Pages.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/>.

## Content

- Pages: `_pages/`
- Publications: `_bibliography/papers.bib`
- News: `_news/`
- Photography: `_photography/` (one folder per place)
- Styles: `_sass/_base.scss` (shared foundations), `_sass/_site.scss` (pages), `_sass/_home.scss` (homepage)

See `PHOTOGRAPHY_WORKFLOW.md` for the album workflow.

Bootstrap CSS supplies the layout and utility classes; navigation and publication controls use small, dependency-free scripts. PhotoSwipe is loaded only for albums, and syntax highlighting only for publications and software. The hidden Service & Honors page is retained in `_pages/awards.md`.

`_site/` and `.jekyll-cache/` are generated locally and are not committed. Keep original photographs and temporary design/test artifacts outside the repository.
