# Source Images

This ignored directory holds private or high-resolution source images used by the optimization script. Runtime components do not read files from this directory.

Use the base filenames already referenced under `src/components/`, including `hero.jpg`, `project1.png` through `project6.png`, and the organization logo filenames. Then run:

```bash
node scripts/optimize-images.js
```

The script writes committed AVIF, WebP, and fallback files to `public/images/optimized/`. Verify the generated images before committing them.
