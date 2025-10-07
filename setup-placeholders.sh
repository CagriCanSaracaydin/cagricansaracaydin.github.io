#!/bin/bash

# Setup script for placeholder images
echo "Setting up placeholder images for development..."

MEDIA_DIR="public/images/media"

# Create media directory if it doesn't exist
mkdir -p "$MEDIA_DIR"

# Create placeholder images using ImageMagick (if available) or provide instructions
if command -v convert >/dev/null 2>&1; then
    echo "Creating placeholder images with ImageMagick..."
    
    # Profile image
    convert -size 350x350 xc:lightblue -pointsize 20 -fill black -gravity center -annotate +0+0 'Profile\nImage' "$MEDIA_DIR/hero.jpeg"
    
    # Company logos
    convert -size 200x200 xc:lightgreen -pointsize 16 -fill black -gravity center -annotate +0+0 'BAT\nLogo' "$MEDIA_DIR/bat-logo.png"
    convert -size 200x200 xc:lightcoral -pointsize 16 -fill black -gravity center -annotate +0+0 'Harvard\nLogo' "$MEDIA_DIR/harvard.png"
    convert -size 200x200 xc:lightyellow -pointsize 12 -fill black -gravity center -annotate +0+0 'Sabanci\nUniversity\nLogo' "$MEDIA_DIR/Sabanci_University_logo.png"
    convert -size 200x200 xc:lightgray -pointsize 12 -fill black -gravity center -annotate +0+0 'Bornova\nHigh School\nLogo' "$MEDIA_DIR/Bornova_Anadolu_Lisesi_Logo.png"
    convert -size 200x200 xc:lightpink -pointsize 16 -fill black -gravity center -annotate +0+0 'Bosch\nLogo' "$MEDIA_DIR/bosch-logo.png"
    convert -size 200x200 xc:lightcyan -pointsize 16 -fill black -gravity center -annotate +0+0 'IBTech\nLogo' "$MEDIA_DIR/ibtech-logo.png"
    
    # Project images
    for i in {1..6}; do
        convert -size 400x300 xc:lavender -pointsize 24 -fill black -gravity center -annotate +0+0 "Project $i\nScreenshot" "$MEDIA_DIR/project$i.png"
    done
    
    echo "Placeholder images created successfully!"
else
    echo "ImageMagick not found. Please manually create placeholder images or install ImageMagick."
    echo "Required images are listed in public/images/media/README.md"
fi
