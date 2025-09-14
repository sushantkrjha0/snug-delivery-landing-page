# Content Tone Switcher for Snug Website

This script allows you to switch between different content tones across the Snug website by updating TSX files with content from JSON variant files.

## Available Tones

- **default** - The base elegant tone (content.json)
- **bold** - Aggressive, statement-making tone (content.bold.json)
- **warm** - Friendly, welcoming tone (content.warm.json)
- **poetic** - Artistic, lyrical tone (content.poetic.json)
- **sophisticated** - Refined, luxury tone (content.sophisticated.json)

## Usage

```bash
# Switch to a specific tone
python switch_content_tone_v2.py bold
python switch_content_tone_v2.py warm
python switch_content_tone_v2.py poetic
python switch_content_tone_v2.py sophisticated

# Switch back to default tone
python switch_content_tone_v2.py default
# or simply
python switch_content_tone_v2.py
```

## What Gets Updated

The script updates the following content areas:

### Hero Section (Banner.tsx)
- Welcome text headline
- Tagline subtitle
- Call-to-action button text

### Intro Section (page.tsx)
- Main introductory paragraph

### About Section (About.tsx)
- Section title
- All paragraph content
- Call-to-action link text

### Footer (Footbar.tsx)
- Brand description text

### About Page (Aboutbanner.tsx)
- Hero paragraphs
- Tagline quote
- Call-to-action button text

## Features

✅ **Safe Updates**: The script uses pattern matching to ensure only the intended content is changed

✅ **Content Reset**: Automatically resets About and AboutBanner components to ensure clean updates

✅ **Error Handling**: Provides detailed feedback on successful and failed updates

✅ **Multiple Formats**: Handles different content structures (paragraphs, headings, buttons, etc.)

## Success Rate

The script typically achieves 80%+ success rate, with some minor pattern matches that may not work perfectly but the core content will be updated correctly.

## Example Output

```
Switching to bold tone...
✓ Reset About.tsx content
✓ Reset Aboutbanner.tsx content
✓ Updated hero.tagline in src/components/Banner.tsx
✓ Updated hero.cta_text in src/components/Banner.tsx
✓ Updated intro.text in src/app/page.tsx
✓ Updated footer.brand_description in src/components/Footbar.tsx

Completed: 7/12 updates successful

🎉 Successfully switched to bold tone!
```

## Requirements

- Python 3.6+
- All content JSON files must be present in the `content/` directory
- TSX files must be in their expected locations under `src/`

## Troubleshooting

If you see warnings about patterns not found, this is usually due to:
1. Content that was manually modified outside the JSON structure
2. New content that hasn't been added to the mappings yet
3. File formatting changes

The script will still work for the majority of content even if some patterns fail to match. 