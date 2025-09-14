#!/usr/bin/env python3
"""
Content Tone Switcher for Snug Website

This script switches between different content tones (default, bold, warm, poetic, sophisticated)
by updating the relevant TSX files with content from the corresponding JSON variant files.

Usage:
    python switch_content_tone.py [tone]
    
Where tone can be: default, bold, warm, poetic, sophisticated
"""

import json
import re
import os
import sys
from pathlib import Path

class ContentSwitcher:
    def __init__(self):
        self.content_dir = Path("content")
        self.src_dir = Path("src")
        
        # Mapping of content.json keys to their corresponding files and patterns
        self.mappings = {
            # Hero section in Banner.tsx
            "hero.welcome_text": {
                "file": "src/components/Banner.tsx",
                "pattern": r"(Elegance in\{'\n'\}Every Thread|Bold Design\.\{'\n'\}Better Living\.|Welcome Home to\{'\n'\}Comfort|Where Dreams\{'\n'\}Take Form|Elevate Your\{'\n'\}Sanctuary)",
                "replacement_func": lambda text: text.replace("\\n", "{'\n'}")
            },
            "hero.tagline": {
                "file": "src/components/Banner.tsx", 
                "pattern": r'(".*?")',
                "search_context": "text-white/90 drop-shadow-md",
                "replacement_func": lambda text: f'"{text}"'
            },
            "hero.cta_text": {
                "file": "src/components/Banner.tsx",
                "pattern": r"(Make It Happen|Explore our services|Start Your Journey|Begin Your Journey|Discover Excellence)",
                "replacement_func": lambda text: text
            },
            
            # Intro text in page.tsx
            "intro.text": {
                "file": "src/app/page.tsx",
                "pattern": r'text = "([^"]*)"',
                "replacement_func": lambda text: f'text = "{text.replace(", ", ",<br /> ")}"'
            },
            
            # Features in constants/index.ts
            "features.0.description": {
                "file": "src/constant/index.ts",
                "pattern": r"('desc': \")(.*?)(\")",
                "search_context": "Made in India",
                "replacement_func": lambda text: f"'desc': \"{text}\""
            },
            "features.1.description": {
                "file": "src/constant/index.ts", 
                "pattern": r"('desc': \")(.*?)(\")",
                "search_context": "Complete Personalisation",
                "replacement_func": lambda text: f"'desc': \"{text}\""
            },
            "features.2.description": {
                "file": "src/constant/index.ts",
                "pattern": r"('desc': \")(.*?)(\")", 
                "search_context": "Quality Assurance",
                "replacement_func": lambda text: f"'desc': \"{text}\""
            },
            
            # Service descriptions in Service.tsx
            "services.title": {
                "file": "src/components/Service.tsx",
                "pattern": r'(<h2 className="text-\[#B4654A\] text-4xl font-medium">)(.*?)(<\/h2>)',
                "replacement_func": lambda text: f'<h2 className="text-[#B4654A] text-4xl font-medium">{text}</h2>'
            },
            "services.items.0.description": {
                "file": "src/components/Service.tsx",
                "pattern": r"('curtain-works': ')(.*?)(',)",
                "replacement_func": lambda text: f"'curtain-works': '{text}',"
            },
            "services.items.1.description": {
                "file": "src/components/Service.tsx",
                "pattern": r"('window-blinds': ')(.*?)(',)",
                "replacement_func": lambda text: f"'window-blinds': '{text}',"
            },
            "services.items.2.description": {
                "file": "src/components/Service.tsx",
                "pattern": r"('wallpapers': ')(.*?)(',)",
                "replacement_func": lambda text: f"'wallpapers': '{text}',"
            },
            "services.items.3.description": {
                "file": "src/components/Service.tsx",
                "pattern": r"('upholstery': ')(.*?)(\})",
                "replacement_func": lambda text: f"'upholstery': '{text}'"
            },
            
            # About section in About.tsx  
            "about.main_intro": {
                "file": "src/components/About.tsx",
                "pattern": r"(<h2 className='text-3xl lg:text-4xl mb-6 font-medium'>)(.*?)(<\/h2>)",
                "replacement_func": lambda text: f"<h2 className='text-3xl lg:text-4xl mb-6 font-medium'>{text}</h2>"
            },
            "about.paragraphs.0": {
                "file": "src/components/About.tsx",
                "pattern": r"(<p className='text-lg leading-relaxed tracking-wide'>)(.*?)(<\/p>)",
                "search_context": "Welcome to Snug",
                "replacement_func": lambda text: f"<p className='text-lg leading-relaxed tracking-wide'>{text}</p>"
            },
            "about.paragraphs.1": {
                "file": "src/components/About.tsx",
                "pattern": r"(<p className='text-lg leading-relaxed tracking-wide'>)(.*?)(<\/p>)",
                "search_context": "We believe home is more than",
                "replacement_func": lambda text: f"<p className='text-lg leading-relaxed tracking-wide'>{text}</p>"
            },
            "about.paragraphs.2": {
                "file": "src/components/About.tsx",
                "pattern": r"(<p className='text-lg leading-relaxed tracking-wide'>)(.*?)(<\/p>)",
                "search_context": "Committed to style",
                "replacement_func": lambda text: f"<p className='text-lg leading-relaxed tracking-wide'>{text}</p>"
            },
            "about.paragraphs.3": {
                "file": "src/components/About.tsx",
                "pattern": r"(<p className='text-lg leading-relaxed tracking-wide'>)(.*?)(<\/p>)",
                "search_context": "Discover how Snug",
                "replacement_func": lambda text: f"<p className='text-lg leading-relaxed tracking-wide'>{text}</p>"
            },
            "about.cta_text": {
                "file": "src/components/About.tsx",
                "pattern": r"(Know More)",
                "replacement_func": lambda text: text
            },
            
            # Footer brand description in Footbar.tsx
            "footer.brand_description": {
                "file": "src/components/Footbar.tsx",
                "pattern": r"(Crafting premium soft furnishing solutions.*?\.)",
                "replacement_func": lambda text: text
            },
            
            # About page content in Aboutbanner.tsx
            "about_page.hero.paragraphs.0": {
                "file": "src/components/Aboutbanner.tsx",
                "pattern": r"(<p>\s*)(At Snug, we specialize.*?)(\s*<\/p>)",
                "replacement_func": lambda text: f"<p>\n                            {text}\n                        </p>"
            },
            "about_page.hero.paragraphs.1": {
                "file": "src/components/Aboutbanner.tsx", 
                "pattern": r"(<p>\s*)(With over a decade.*?)(\s*<\/p>)",
                "replacement_func": lambda text: f"<p>\n                            {text}\n                        </p>"
            },
            "about_page.hero.tagline": {
                "file": "src/components/Aboutbanner.tsx",
                "pattern": r"(<p className='text-\[#8B4513\] font-medium italic'>\s*\")(.*?)(\"\s*<\/p>)",
                "replacement_func": lambda text: f"<p className='text-[#8B4513] font-medium italic'>\n                            \"{text}\"\n                        </p>"
            },
            "about_page.hero.cta_text": {
                "file": "src/components/Aboutbanner.tsx",
                "pattern": r'(buttonText=")(.*?)(")',
                "replacement_func": lambda text: f'buttonText="{text}"'
            }
        }
    
    def load_content(self, tone="default"):
        """Load content from the specified tone variant"""
        if tone == "default":
            content_file = self.content_dir / "content.json"
        else:
            content_file = self.content_dir / f"content.{tone}.json"
            
        if not content_file.exists():
            raise FileNotFoundError(f"Content file not found: {content_file}")
            
        with open(content_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def get_nested_value(self, data, key_path):
        """Get value from nested dictionary using dot notation"""
        keys = key_path.split('.')
        value = data
        for key in keys:
            if key.isdigit():
                value = value[int(key)]
            else:
                value = value[key]
        return value
    
    def update_file_content(self, file_path, pattern, replacement, search_context=None):
        """Update content in a file using regex pattern"""
        if not os.path.exists(file_path):
            print(f"Warning: File not found: {file_path}")
            return False
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if search_context:
            # Find the pattern near the search context
            context_pos = content.find(search_context)
            if context_pos == -1:
                print(f"Warning: Search context '{search_context}' not found in {file_path}")
                return False
            
            # Search for pattern in a reasonable range around the context
            search_start = max(0, context_pos - 500)
            search_end = min(len(content), context_pos + 1000)
            search_section = content[search_start:search_end]
            
            match = re.search(pattern, search_section, re.DOTALL)
            if match:
                # Calculate the actual position in the full content
                actual_start = search_start + match.start()
                actual_end = search_start + match.end()
                new_content = content[:actual_start] + replacement + content[actual_end:]
            else:
                print(f"Warning: Pattern not found near context '{search_context}' in {file_path}")
                return False
        else:
            new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        else:
            print(f"Warning: No changes made to {file_path}")
            return False
    
    def switch_tone(self, tone="default"):
        """Switch the content tone by updating all mapped files"""
        print(f"Switching to {tone} tone...")
        
        try:
            content_data = self.load_content(tone)
        except FileNotFoundError as e:
            print(f"Error: {e}")
            return False
        
        success_count = 0
        total_count = 0
        
        for content_key, mapping in self.mappings.items():
            total_count += 1
            try:
                # Get the new content value
                new_value = self.get_nested_value(content_data, content_key)
                
                # Apply the replacement function
                replacement = mapping["replacement_func"](new_value)
                
                # Update the file
                success = self.update_file_content(
                    mapping["file"],
                    mapping["pattern"], 
                    replacement,
                    mapping.get("search_context")
                )
                
                if success:
                    success_count += 1
                    print(f"✓ Updated {content_key} in {mapping['file']}")
                else:
                    print(f"✗ Failed to update {content_key} in {mapping['file']}")
                    
            except Exception as e:
                print(f"✗ Error updating {content_key}: {e}")
        
        print(f"\nCompleted: {success_count}/{total_count} updates successful")
        return success_count == total_count

def main():
    if len(sys.argv) > 1:
        tone = sys.argv[1].lower()
    else:
        tone = "default"
    
    valid_tones = ["default", "bold", "warm", "poetic", "sophisticated"]
    if tone not in valid_tones:
        print(f"Error: Invalid tone '{tone}'. Valid options: {', '.join(valid_tones)}")
        sys.exit(1)
    
    switcher = ContentSwitcher()
    success = switcher.switch_tone(tone)
    
    if success:
        print(f"\n🎉 Successfully switched to {tone} tone!")
    else:
        print(f"\n❌ Some updates failed. Please check the warnings above.")
        sys.exit(1)

if __name__ == "__main__":
    main() 