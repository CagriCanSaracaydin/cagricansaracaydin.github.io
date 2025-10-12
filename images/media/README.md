# Personal Images Directory

This directory should contain your personal images for the portfolio website. The following images are referenced in the code:

## Required Images

### hero.jpeg
- **Location**: `public/images/media/hero.jpeg`
- **Usage**: Profile picture displayed in the About section
- **Recommended specs**:
  - Format: JPEG
  - Size: Square aspect ratio (1:1) recommended
  - Dimensions: At least 350x350 pixels for crisp display
  - Quality: High quality, professional headshot

## How to Add Images

1. Place your `hero.jpeg` file directly in this `public/images/media/` directory
2. Ensure the filename matches exactly: `hero.jpeg` (case-sensitive)
3. The image will be displayed as a circular profile picture in the About section

## Notes

- Images in the `public/` folder are served statically and can be referenced with absolute paths starting with `/`
- The About component references `/images/media/hero.jpeg`
- If you change the filename, you'll need to update the `src` attribute in `src/components/About.js`