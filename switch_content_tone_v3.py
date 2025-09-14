#!/usr/bin/env python3
"""
Content Tone Switcher v3 for Snug Website

This improved version handles content switching more robustly by using multiple pattern strategies.
"""

import json
import re
import os
import sys
from pathlib import Path

class ContentSwitcherV3:
    def __init__(self):
        self.content_dir = Path("content")
    
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
    
    def update_banner_content(self, content_data):
        """Update Banner.tsx with new content"""
        banner_file = "src/components/Banner.tsx"
        if not os.path.exists(banner_file):
            return False
            
        with open(banner_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Update hero text
        hero_text = content_data['hero']['welcome_text'].replace("\\n", "{'\\n'}")
        content = re.sub(
            r'(Welcome Home to\{[\'"]\n[\'"]\}Comfort|Elegance in\{[\'"]\n[\'"]\}Every Thread|Bold Design\.\{[\'"]\n[\'"]\}Better Living\.|Where Dreams\{[\'"]\n[\'"]\}Take Form|Elevate Your\{[\'"]\n[\'"]\}Sanctuary)',
            hero_text,
            content
        )
        
        # Update tagline
        tagline = content_data['hero']['tagline']
        content = re.sub(
            r'(Where every thread tells a story of warmth and comfort|Indulge in the perfect blend of style and comfort|Transform your space with statement-making soft furnishings|Weaving stories of beauty into the fabric of your home|Where refined aesthetics meet unparalleled craftsmanship)',
            tagline,
            content
        )
        
        # Update CTA
        cta_text = content_data['hero']['cta_text']
        content = re.sub(
            r'(Start Your Journey|Explore our services|Make It Happen|Begin Your Journey|Discover Excellence)',
            cta_text,
            content
        )
        
        with open(banner_file, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    def update_page_content(self, content_data):
        """Update main page.tsx with new intro text"""
        page_file = "src/app/page.tsx"
        if not os.path.exists(page_file):
            return False
            
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_text = content_data['intro']['text']
        # Update the texts array
        content = re.sub(
            r'texts=\{.*?\}\]',
            f'texts={{["{new_text}"]}}',
            content,
            flags=re.DOTALL
        )
        
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    def update_service_content(self, content_data):
        """Update Service.tsx with new content"""
        service_file = "src/components/Service.tsx"
        if not os.path.exists(service_file):
            return False
            
        with open(service_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Update service title
        title = content_data['services']['title']
        content = re.sub(
            r'(<h2 className="text-\[#B4654A\] text-4xl font-medium">)(.*?)(<\/h2>)',
            f'\\1{title}\\3',
            content
        )
        
        # Update service descriptions
        services = content_data['services']['items']
        service_keys = ['curtain-works', 'window-blinds', 'wallpapers', 'upholstery']
        
        for i, key in enumerate(service_keys):
            if i < len(services):
                new_desc = services[i]['description'].replace("'", "\\'")
                content = re.sub(
                    f"('{key}': ')(.*?)(',)",
                    f"\\1{new_desc}\\3",
                    content,
                    flags=re.DOTALL
                )
        
        with open(service_file, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    def update_about_content(self, content_data):
        """Update About.tsx with new content"""
        about_file = "src/components/About.tsx"
        about_data = content_data['about']
        
        about_content = f"""import Link from 'next/link'
import React from 'react'

const About = () => {{
    return (
        <div className='min-h-[500px] py-16 lg:py-24 bg-[#E5E4DF] flex justify-center items-center'>
            <div className='w-[90%] lg:w-[86%] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24'>
                <div className="w-full lg:w-[792px] aspect-[3/2] bg-no-repeat bg-abtBg bg-cover"></div>
                <div className="w-full lg:w-[567px] py-8 lg:py-0 flex flex-col gap-4 justify-center">
                    <h2 className='text-3xl lg:text-4xl mb-6 font-medium'>{about_data['main_intro']}</h2>
                    <p className='text-lg leading-relaxed tracking-wide'>{about_data['paragraphs'][0]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{about_data['paragraphs'][1]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{about_data['paragraphs'][2]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{about_data['paragraphs'][3]}</p>
                    <div className='mt-12'>
                        <Link className='hover:text-gray-500 text-2xl lg:text-3xl border-b-2 border-b-black hover:border-b-gray-500 transition-colors duration-300' href={{"/about"}}>
                            {about_data['cta_text']}
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
    
    def update_aboutbanner_content(self, content_data):
        """Update Aboutbanner.tsx with new content"""
        aboutbanner_file = "src/components/Aboutbanner.tsx"
        aboutbanner_data = content_data['about_page']['hero']
        
        aboutbanner_content = f"""import {{ roboto_slab }} from '@/app/fonts'
import React from 'react'
import ServiceBookingForm from './ServiceBookingForm'

const Aboutbanner = () => {{
    return (
        <div className='w-full bg-white py-16 lg:py-24'>
            <div className='max-w-6xl mx-auto px-6 lg:px-8'>
                <div className='text-center max-w-4xl mx-auto'>
                    <h1 className='text-4xl lg:text-5xl font-medium text-gray-900 mb-8'>
                        {aboutbanner_data['title']}
                    </h1>
                    
                    <div className='space-y-6 text-lg leading-relaxed text-gray-700'>
                        <p>
                            {aboutbanner_data['paragraphs'][0]}
                        </p>
                        
                        <p>
                            {aboutbanner_data['paragraphs'][1]}
                        </p>
                        
                        <p className='text-[#8B4513] font-medium italic'>
                            "{aboutbanner_data['tagline']}"
                        </p>
                    </div>

                    {{/* Call to Action */}}
                    <div className='pt-8 flex justify-center'>
                        <ServiceBookingForm 
                            buttonText="{aboutbanner_data['cta_text']}"
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
    
    def update_footer_content(self, content_data):
        """Update footer brand description"""
        footer_file = "src/components/Footbar.tsx"
        if not os.path.exists(footer_file):
            return False
            
        with open(footer_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_desc = content_data['footer']['brand_description']
        content = re.sub(
            r"(<p className='text-gray-700 text-sm leading-relaxed max-w-xs'>\s*)(.*?)(\s*</p>)",
            f"\\1{new_desc}\\3",
            content,
            flags=re.DOTALL
        )
        
        with open(footer_file, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    def switch_tone(self, tone="default"):
        """Switch the content tone by updating all components"""
        print(f"Switching to {tone} tone...")
        
        try:
            content_data = self.load_content(tone)
        except FileNotFoundError as e:
            print(f"Error: {e}")
            return False
        
        updates = [
            ("Banner.tsx", self.update_banner_content),
            ("page.tsx", self.update_page_content),
            ("Service.tsx", self.update_service_content),
            ("About.tsx", self.update_about_content),
            ("Aboutbanner.tsx", self.update_aboutbanner_content),
            ("Footbar.tsx", self.update_footer_content)
        ]
        
        success_count = 0
        for component, update_func in updates:
            try:
                if update_func(content_data):
                    success_count += 1
                    print(f"✓ Updated {component}")
                else:
                    print(f"✗ Failed to update {component}")
            except Exception as e:
                print(f"✗ Error updating {component}: {e}")
        
        print(f"\\nCompleted: {success_count}/{len(updates)} updates successful")
        
        if success_count >= len(updates) * 0.8:
            print(f"\\n🎉 Successfully switched to {tone} tone!")
            return True
        else:
            print(f"\\n⚠️  Switched to {tone} tone with some issues.")
            return False

def main():
    if len(sys.argv) > 1:
        tone = sys.argv[1].lower()
    else:
        tone = "default"
    
    valid_tones = ["default", "bold", "warm", "poetic", "sophisticated"]
    if tone not in valid_tones:
        print(f"Error: Invalid tone '{tone}'. Valid options: {', '.join(valid_tones)}")
        sys.exit(1)
    
    switcher = ContentSwitcherV3()
    switcher.switch_tone(tone)

if __name__ == "__main__":
    main() 