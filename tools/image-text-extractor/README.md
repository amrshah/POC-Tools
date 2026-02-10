# Image Text Extractor - OCR Tool

## Installation Instructions

### Step 1: Add the tool folder to your repository

1. Copy the `image-text-extractor` folder to your `tools` directory:
   ```
   POC-Tools/
   └── tools/
       └── image-text-extractor/
           └── index.html
   ```

### Step 2: Update tools.json

Replace your existing `tools.json` file with the new version provided. The new entry has been added:

```json
{
  "name": "Image Text Extractor",
  "description": "Extract text from images using OCR (Optical Character Recognition).",
  "link": "./tools/image-text-extractor/",
  "icon": "fa-solid fa-font"
}
```

### Step 3: Commit and push to GitHub

```bash
git add tools/image-text-extractor/
git add tools.json
git commit -m "Add Image Text Extractor OCR tool"
git push origin main
```

### Step 4: Access your new tool

The tool will be available at:
`https://amrshah.github.io/POC-Tools/tools/image-text-extractor/`

## Features

✅ **Client-side OCR** using Tesseract.js - all processing happens in the browser
✅ **Privacy-focused** - images never leave the user's device
✅ **Multi-language support** - 15+ languages including English, Arabic, Urdu, Hindi, Chinese, Japanese, etc.
✅ **Drag & drop** interface for easy image upload
✅ **Real-time progress** tracking during text extraction
✅ **Statistics** showing character, word, and line counts
✅ **Copy to clipboard** functionality
✅ **Download as .txt** file option
✅ **Mobile responsive** design

## How it works

1. User uploads an image (drag & drop or click to browse)
2. Selects the language of text in the image
3. Clicks "Extract Text"
4. Tesseract.js processes the image client-side
5. Extracted text is displayed with statistics
6. User can copy or download the text

## Supported Image Formats

- JPG/JPEG
- PNG
- GIF
- WebP
- BMP

## Tips for Best Results

- Use high-resolution, well-lit images
- Ensure text is clearly visible and horizontal
- Works best with printed text (handwriting accuracy varies)
- Clean backgrounds improve accuracy

## Technical Details

- **OCR Engine**: Tesseract.js v5
- **Processing**: 100% client-side (browser-based)
- **Dependencies**: Tesseract.js (loaded via CDN)
- **File Size**: Single HTML file (~15KB)
- **No backend required** - perfect for GitHub Pages
