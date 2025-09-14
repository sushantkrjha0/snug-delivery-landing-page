#!/usr/bin/env python3
"""
Content Tone Switcher v2 for Snug Website

This script switches between different content tones by updating TSX files with content from JSON variants.
It focuses on the key text areas that are consistently mappable.

Usage: python switch_content_tone_v2.py [tone]
"""

import json
import re
import os
import sys
from pathlib import Path

class ContentSwitcherV2:
    def __init__(self):
        self.content_dir = Path("content")
        
        # Simplified mappings focusing on clearly identifiable content
        self.mappings = [
            # Hero section welcome text in Banner.tsx
            {
                "content_key": "hero.welcome_text",
                "file": "src/components/Banner.tsx",
                "pattern": r'(Elegance in\{[\'"]\n[\'"]\}Every Thread|Bold Design\.\{[\'"]\n[\'"]\}Better Living\.|Welcome Home to\{[\'"]\n[\'"]\}Comfort|Where Dreams\{[\'"]\n[\'"]\}Take Form|Elevate Your\{[\'"]\n[\'"]\}Sanctuary)',
                "replacement": lambda text: text.replace("\\n", "{'\\n'}")
            },
            
            # Hero tagline in Banner.tsx
            {
                "content_key": "hero.tagline", 
                "file": "src/components/Banner.tsx",
                "pattern": r'(Indulge in the perfect blend of style and comfort|Transform your space with statement-making soft furnishings|Where every thread tells a story of warmth and comfort|Weaving stories of beauty into the fabric of your home|Where refined aesthetics meet unparalleled craftsmanship)',
                "replacement": lambda text: text
            },
            
            # Hero CTA in Banner.tsx
            {
                "content_key": "hero.cta_text",
                "file": "src/components/Banner.tsx", 
                "pattern": r'(Explore our services|Make It Happen|Start Your Journey|Begin Your Journey|Discover Excellence)',
                "replacement": lambda text: text
            },
            
            # Intro text in page.tsx
            {
                "content_key": "intro.text",
                "file": "src/app/page.tsx",
                "pattern": r'text = "([^"]*)"',
                "replacement": lambda text: f'text = "{text.replace(", ", ",<br /> ")}"'
            },
            
            # Service title in Service.tsx
            {
                "content_key": "services.title",
                "file": "src/components/Service.tsx",
                "pattern": r'(<h2 className="text-\[#B4654A\] text-4xl font-medium">)(Our Services|Our Power Moves|Our Artistry|Our Bespoke Services)(<\/h2>)',
                "replacement": lambda text: f'<h2 className="text-[#B4654A] text-4xl font-medium">{text}</h2>'
            },
            
            # About main intro in About.tsx
            {
                "content_key": "about.main_intro",
                "file": "src/components/About.tsx",
                "pattern": r'(<h2 className=[\'"]text-3xl lg:text-4xl mb-6 font-medium[\'"]>)(ABOUT US|WHO WE ARE|OUR STORY|THE ESSENCE OF LUXURY)(<\/h2>)',
                "replacement": lambda text: f'<h2 className=\'text-3xl lg:text-4xl mb-6 font-medium\'>{text}</h2>'
            },
            
            # About CTA text in About.tsx
            {
                "content_key": "about.cta_text",
                "file": "src/components/About.tsx",
                "pattern": r'(Know More|Join the Revolution|Get to Know Us|Discover Our Story|Explore Our Legacy)',
                "replacement": lambda text: text
            },
            
            # Footer brand description
            {
                "content_key": "footer.brand_description",
                "file": "src/components/Footbar.tsx",
                "pattern": r'(Crafting premium soft furnishing solutions.*?\.|We don\'t just create furnishings.*?\.|Creating warm, welcoming homes.*?\.|Weaving dreams into reality.*?\.|Curating distinguished soft furnishing.*?\.)',
                "replacement": lambda text: text
            },
            
            # About page tagline in Aboutbanner.tsx
            {
                "content_key": "about_page.hero.tagline",
                "file": "src/components/Aboutbanner.tsx",
                "pattern": r'("Where comfort meets sophistication—customized, just for you\."|"Where power meets design—built to make your statement\."|"Where every home gets a warm hug—made just for you\."|"Where stories unfold in silk and song—crafted for your soul\."|"Where sophistication meets artistry—elevated for the discerning\.")',
                "replacement": lambda text: f'"{text}"'
            },
            
            # About page CTA in Aboutbanner.tsx  
            {
                "content_key": "about_page.hero.cta_text",
                "file": "src/components/Aboutbanner.tsx",
                "pattern": r'(buttonText=")(Start Your Project|Start Your Revolution|Let\'s Get Started Together|Begin Your Story|Commence Your Journey)(")',
                "replacement": lambda text: f'buttonText="{text}"'
            }
        ]
    
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
    
    def update_file_content(self, file_path, pattern, replacement_text):
        """Update content in a file using regex pattern"""
        if not os.path.exists(file_path):
            print(f"Warning: File not found: {file_path}")
            return False
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Try to find and replace the pattern
        new_content = re.sub(pattern, replacement_text, content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        else:
            print(f"Warning: Pattern not found in {file_path}")
            return False
    
    def reset_about_content(self, content_data):
        """Reset About.tsx content to match the JSON structure"""
        about_file = "src/components/About.tsx"
        if not os.path.exists(about_file):
            return False
            
        about_content = f"""import Link from 'next/link'
import React from 'react'

const About = () => {{
    return (
        <div className='min-h-[500px] py-16 lg:py-24 bg-[#E5E4DF] flex justify-center items-center'>
            <div className='w-[90%] lg:w-[86%] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24'>
                <div className="w-full lg:w-[792px] aspect-[3/2] bg-no-repeat bg-abtBg bg-cover"></div>
                <div className="w-full lg:w-[567px] py-8 lg:py-0 flex flex-col gap-4 justify-center">
                    <h2 className='text-3xl lg:text-4xl mb-6 font-medium'>{content_data['about']['main_intro']}</h2>
                    <p className='text-lg leading-relaxed tracking-wide'>{content_data['about']['paragraphs'][0]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{content_data['about']['paragraphs'][1]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{content_data['about']['paragraphs'][2]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{content_data['about']['paragraphs'][3]}</p>
                    <div className='mt-12'>
                        <Link className='hover:text-gray-500 text-2xl lg:text-3xl border-b-2 border-b-black hover:border-b-gray-500 transition-colors duration-300' href={{"/about"}}>
                            {content_data['about']['cta_text']}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default About"""
        
        with open(about_file, 'w', encoding='utf-8') as f:
            f.write(about_content)
        return True
    
    def reset_aboutbanner_content(self, content_data):
        """Reset Aboutbanner.tsx content to match the JSON structure"""
        aboutbanner_file = "src/components/Aboutbanner.tsx"
        if not os.path.exists(aboutbanner_file):
            return False
            
        aboutbanner_content = f"""import {{ roboto_slab }} from '@/app/fonts'
import React from 'react'
import {{ ServiceBookingForm }} from '.'

const Aboutbanner = () => {{
    return (
        <div className='w-full bg-white py-16 lg:py-24'>
            <div className='max-w-6xl mx-auto px-6 lg:px-8'>
                <div className='text-center max-w-4xl mx-auto'>
                    <h1 className='text-4xl lg:text-5xl font-medium text-gray-900 mb-8'>
                        {content_data['about_page']['hero']['title']}
                    </h1>
                    
                    <div className='space-y-6 text-lg leading-relaxed text-gray-700'>
                        <p>
                            {content_data['about_page']['hero']['paragraphs'][0]}
                        </p>
                        
                        <p>
                            {content_data['about_page']['hero']['paragraphs'][1]}
                        </p>
                        
                        <p className='text-[#8B4513] font-medium italic'>
                            "{content_data['about_page']['hero']['tagline']}"
                        </p>
                    </div>

                    {{/* Call to Action */}}
                    <div className='pt-8 flex justify-center'>
                        <ServiceBookingForm 
                            buttonText="{content_data['about_page']['hero']['cta_text']}"
                            buttonStyle="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default Aboutbanner"""
        
        with open(aboutbanner_file, 'w', encoding='utf-8') as f:
            f.write(aboutbanner_content)
        return True
    
    def switch_tone(self, tone="default"):
        """Switch the content tone by updating all mapped files"""
        print(f"Switching to {tone} tone...")
        
        try:
            content_data = self.load_content(tone)
        except FileNotFoundError as e:
            print(f"Error: {e}")
            return False
        
        success_count = 0
        total_count = len(self.mappings) + 2  # +2 for the special resets
        
        # First, reset the About and Aboutbanner components
        if self.reset_about_content(content_data):
            success_count += 1
            print("✓ Reset About.tsx content")
        else:
            print("✗ Failed to reset About.tsx content")
            
        if self.reset_aboutbanner_content(content_data):
            success_count += 1
            print("✓ Reset Aboutbanner.tsx content")
        else:
            print("✗ Failed to reset Aboutbanner.tsx content")
        
        # Process regular mappings
        for mapping in self.mappings:
            try:
                # Get the new content value
                new_value = self.get_nested_value(content_data, mapping["content_key"])
                
                # Apply the replacement function
                replacement_text = mapping["replacement"](new_value)
                
                # Handle different pattern types
                if mapping["content_key"] in ["services.title", "about.main_intro"]:
                    # For patterns with capture groups, use a replacement function
                    def replacer(match):
                        return match.group(1) + new_value + match.group(3)
                    replacement_text = replacer
                elif mapping["content_key"] == "about_page.hero.tagline":
                    replacement_text = f'"{new_value}"'
                elif mapping["content_key"] == "about_page.hero.cta_text":
                    replacement_text = f'buttonText="{new_value}"'
                elif mapping["content_key"] == "intro.text":
                    replacement_text = f'text = "{new_value.replace(", ", ",<br /> ")}"'
                else:
                    replacement_text = new_value
                
                # Update the file
                success = self.update_file_content(
                    mapping["file"],
                    mapping["pattern"], 
                    replacement_text
                )
                
                if success:
                    success_count += 1
                    print(f"✓ Updated {mapping['content_key']} in {mapping['file']}")
                else:
                    print(f"✗ Failed to update {mapping['content_key']} in {mapping['file']}")
                    
            except Exception as e:
                print(f"✗ Error updating {mapping['content_key']}: {e}")
        
        print(f"\\nCompleted: {success_count}/{total_count} updates successful")
        return success_count >= (total_count * 0.8)  # Consider 80% success rate as successful

def main():
    if len(sys.argv) > 1:
        tone = sys.argv[1].lower()
    else:
        tone = "default"
    
    valid_tones = ["default", "bold", "warm", "poetic", "sophisticated"]
    if tone not in valid_tones:
        print(f"Error: Invalid tone '{tone}'. Valid options: {', '.join(valid_tones)}")
        sys.exit(1)
    
    switcher = ContentSwitcherV2()
    success = switcher.switch_tone(tone)
    
    if success:
        print(f"\\n🎉 Successfully switched to {tone} tone!")
    else:
        print(f"\\n⚠️  Switched to {tone} tone with some issues. Check the warnings above.")

if __name__ == "__main__":
    main() 