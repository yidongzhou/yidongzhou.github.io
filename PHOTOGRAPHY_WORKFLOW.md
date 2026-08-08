# Photography publishing workflow

Each place is one self-contained folder. Its photographs and `index.md` stay together, and no layout editing is required.

1. Select roughly 8–20 photographs and export sRGB JPEGs at 2000–2400 px on the long edge, quality 80–85. For the camera's native 3:2 ratio, that is 2400 × 1600 for landscape or 1600 × 2400 for portrait. Keep RAW and full-resolution 7008 × 4672 files outside the repository, and remove location EXIF when privacy matters.
2. Copy an existing location folder, for example `_photography/mammoth-lakes/`, to `_photography/new-place/`.
3. Replace the photographs and edit that folder's `index.md`. Set `slug` to the folder name.
4. Fill in the title, date, location, cover, optional camera/lens, and exact image dimensions. Write specific alt text for every photograph; captions are optional. Orientation is inferred from the dimensions. Use a landscape 3:2 photograph for the album cover because location cards use that ratio; add `layout: wide` to any image that should span both gallery columns.
5. Add a short narrative below the front matter. Keep `published: false` while drafting.
6. Preview locally with `bundle exec jekyll serve`. When ready, change to `published: true`, commit, and push. Albums appear newest-first on the Photography page and the homepage automatically.

The curated JPEGs are served directly, so publishing an album requires no image-processing software or build step. If the archive eventually grows to hundreds of photographs, move the image files to an image CDN while keeping the album metadata here.
