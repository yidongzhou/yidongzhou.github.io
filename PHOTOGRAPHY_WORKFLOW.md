# Photography publishing workflow

Each place is one self-contained folder. Its photographs and `index.md` stay together, and no layout editing is required.

1. Select roughly 8–20 photographs. Keep RAW files and full-resolution 7008 × 4672 exports outside the repository.
2. Create `_photography/new-place/index.md` by copying an existing album index. Set `slug` to the folder name, replace its photo list, and keep `published: false` while drafting.
3. Prepare and copy the web images with:

   ```bash
   bin/prepare-photos "/path/to/full-resolution-exports" new-place
   ```

   The command normalizes camera orientation, converts JPEGs to sRGB, limits the long edge to 2400 px, uses JPEG quality 82, removes embedded metadata, and updates the dimensions already listed in `index.md`. The source photographs are never modified. Use `--max-edge` or `--quality` only when an album needs different settings.
4. Fill in the title, date, location, cover, and optional camera/lens. Write specific alt text for every photograph; captions are optional. Orientation is inferred from the dimensions. Use a landscape 3:2 photograph for the album cover because location cards use that ratio; add `layout: wide` to any image that should span both gallery columns.
   - Most albums use a single `photos:` list. For a larger set within one place, use `photo_sections:` and give each section a `title`, optional `description`, and its own `photos:` list. This keeps subalbums such as wildlife and hummingbirds inside the same place folder.
5. Add a short narrative below the front matter.
6. Preview locally with `bundle exec jekyll serve`. When ready, change to `published: true`, commit, and push. Albums appear newest-first on the Photography page and the homepage automatically.

The preparation command uses the macOS `sips` utility and `jpegtran` already available on this computer. `jpegtran` removes EXIF, GPS, HDR gain maps, and other embedded metadata before the final sRGB profile is restored. If `jpegtran` is missing on another Mac, install the `jpeg-turbo` package first. If the archive eventually grows to hundreds of photographs, move the image files to an image CDN while keeping the album metadata here.
