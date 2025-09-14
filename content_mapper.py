#!/usr/bin/env python3
"""
Comprehensive Content Mapper for Snug Website

This system uses template-based content injection to reliably map JSON content to ALL TSX components
that contain user-facing text, using the established JSON structure and containing mapping logic internally.
"""

import json
import os
import sys
import re
from pathlib import Path

class ContentMapper:
    def __init__(self):
        self.content_dir = Path("content")
        
        # Internal mapping configuration - no need to change JSON structure
        self.default_mappings = {
            "partners": {
                "title": "Our Partners",
                "description": "At Snug, we believe exceptional quality starts with the finest materials. That's why we source our fabrics, wallpapers, and upholstery from trusted brands renowned for their durability, aesthetics, and sustainable practices—ensuring every piece we create meets our exacting standards."
            },
            "navigation": [
                {"href": "/about", "text": "About us"},
                {"href": "/productPg", "text": "Our Services"},
                {"href": "/qualityNservice", "text": "Quality Standards"},
                {"href": "/contactUs", "text": "Contact Us"},
                {"href": "/sustainable", "text": "Sustainable Practices"}
            ]
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
    
    def get_tone_specific_partners(self, tone, content_data):
        """Get tone-specific partners content or fall back to defaults"""
        if tone == "warm":
            return {
                "title": "Our Friendly Partners",
                "description": "We work with wonderful partners who share our love for quality and comfort. Together, we source the finest materials to make your home feel extra special and welcoming."
            }
        elif tone == "bold":
            return {
                "title": "Our Power Partners",
                "description": "We team up with industry leaders who share our commitment to excellence. Together, we source premium materials that deliver maximum impact and transform your space."
            }
        elif tone == "poetic":
            return {
                "title": "Our Cherished Partners",
                "description": "Like verses in a beautiful poem, we collaborate with partners who understand the art of quality. Together, we weave stories of excellence through carefully selected materials."
            }
        elif tone == "sophisticated":
            return {
                "title": "Our Distinguished Partners",
                "description": "We maintain exclusive partnerships with the finest suppliers, ensuring access to premium materials that reflect our commitment to sophistication and excellence."
            }
        else:
            return self.default_mappings["partners"]
    
    def update_banner(self, content_data):
        """Update Banner.tsx using template generation"""
        hero = content_data['hero']
        welcome_text = hero['welcome_text'].replace("\\n", "{'\\n'}")
        
        banner_content = f"""import Link from 'next/link'

const Banner = () => {{
    return (
        <div className='w-full flex justify-center bg-BP3 bg-no-repeat bg-cover bg-[50%_70%]'>
            <div className='w-[100%] h-[35rem] lg:h-[50rem] overflow-hidden relative'>
                <div className='absolute inset-0 bg-black/10'></div>
                <div className='absolute inset-0 flex flex-col gap-10 items-end justify-center px-8 lg:px-16'>
                    <div className='flex flex-col gap-0 text-right'>
                        <h1 className="text-white font-neue-regrade text-4xl lg:text-6xl font-bold drop-shadow-lg [text-shadow:_2px_2px_8px_rgb(0_0_0_/_50%)] leading-tight">
                            {welcome_text}
                        </h1>
                        <p className="text-white/90 drop-shadow-md [text-shadow:_1px_1px_4px_rgb(0_0_0_/_30%)] whitespace-nowrap">
                            {hero['tagline']}
                        </p>
                        <Link 
                            href="{hero['cta_link']}" 
                            className='text-white hover:text-white/90 flex justify-end items-center gap-2 group transition-colors mt-6'
                        >
                            <span className='font-neue-regrade italic text-[1.125rem] tracking-wide border-b border-white/90 group-hover:border-white transition-colors'>
                                {hero['cta_text']}
                            </span>
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}}

export default Banner"""
        
        with open("src/components/Banner.tsx", 'w', encoding='utf-8') as f:
            f.write(banner_content)
        return True
    
    def update_page(self, content_data):
        """Update main page.tsx"""
        intro_text = content_data['intro']['text']
        
        page_content = f"""import {{ About, Banner, CarouselPlugin, Detail, Footbar, Navbar, Partners, Service, Testimonial, Textbar }} from "@/components";

export default function Home() {{
  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Textbar
        texts={{["{intro_text}"]}}
        bgColor="bg-white"
      />
      <Detail />
      <Service />
      <About />
      <Partners />
      {{/* <Testimonial /> */}}
      <CarouselPlugin />
      <Footbar />
    </div>
  );
}}"""
        
        with open("src/app/page.tsx", 'w', encoding='utf-8') as f:
            f.write(page_content)
        return True
    
    def update_service(self, content_data):
        """Update Service.tsx"""
        services = content_data['services']
        title = services['title']
        items = services['items']
        
        # Build service descriptions object
        service_descriptions = []
        service_keys = ['curtain-works', 'window-blinds', 'wallpapers', 'upholstery']
        
        for i, key in enumerate(service_keys):
            if i < len(items):
                desc = items[i]['description'].replace("'", "\\'")
                service_descriptions.append(f"    '{key}': '{desc}'")
        
        descriptions_str = ",\\n".join(service_descriptions)
        
        service_content = f"""import Image from 'next/image'
import Link from 'next/link'
import {{ roboto_slab }} from '@/app/fonts'

const serviceDescriptions = {{
{descriptions_str}
}} as const;

const Service = () => {{
    return (
        <section className='w-full py-24'>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-[#B4654A] text-4xl font-medium">{title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative aspect-[4/3] bg-gray-100 group overflow-hidden">
                        <Image
                            src="/img/curtainWork.jpg"
                            alt="Custom curtain works"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-600" />
                        <div className="absolute bottom-12 left-0 right-0 text-center z-10">
                            <h3 className="text-white text-2xl mb-4">{items[0]['title']}</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={{`${{roboto_slab.className}} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {{serviceDescriptions['curtain-works']}}
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] bg-gray-100 group overflow-hidden">
                        <Image
                            src="/img/blinds.jpg"
                            alt="Premium window blinds"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-600" />
                        <div className="absolute bottom-12 left-0 right-0 text-center z-10">
                            <h3 className="text-white text-2xl mb-4">{items[1]['title']}</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={{`${{roboto_slab.className}} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {{serviceDescriptions['window-blinds']}}
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] bg-gray-100 group overflow-hidden">
                        <Image
                            src="/img/wallpaper.jpg"
                            alt="Designer wallpapers"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-600" />
                        <div className="absolute bottom-12 left-0 right-0 text-center z-10">
                            <h3 className="text-white text-2xl mb-4">{items[2]['title']}</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={{`${{roboto_slab.className}} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {{serviceDescriptions['wallpapers']}}
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] bg-gray-100 group overflow-hidden">
                        <Image
                            src="/img/SAN_2010r.jpg"
                            alt="Premium upholstery services"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-600" />
                        <div className="absolute bottom-12 left-0 right-0 text-center z-10">
                            <h3 className="text-white text-2xl mb-4">{items[3]['title']}</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={{`${{roboto_slab.className}} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {{serviceDescriptions['upholstery']}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}}

export default Service"""
        
        with open("src/components/Service.tsx", 'w', encoding='utf-8') as f:
            f.write(service_content)
        return True
    
    def update_about(self, content_data):
        """Update About.tsx"""
        about = content_data['about']
        
        about_content = f"""import Link from 'next/link'
import React from 'react'

const About = () => {{
    return (
        <div className='min-h-[500px] py-16 lg:py-24 bg-[#E5E4DF] flex justify-center items-center'>
            <div className='w-[90%] lg:w-[86%] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24'>
                <div className="w-full lg:w-[792px] aspect-[3/2] bg-no-repeat bg-abtBg bg-cover"></div>
                <div className="w-full lg:w-[567px] py-8 lg:py-0 flex flex-col gap-4 justify-center">
                    <h2 className='text-3xl lg:text-4xl mb-6 font-medium'>{about['main_intro']}</h2>
                    <p className='text-lg leading-relaxed tracking-wide'>{about['paragraphs'][0]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{about['paragraphs'][1]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{about['paragraphs'][2]}</p>
                    <p className='text-lg leading-relaxed tracking-wide'>{about['paragraphs'][3]}</p>
                    <div className='mt-12'>
                        <Link className='hover:text-gray-500 text-2xl lg:text-3xl border-b-2 border-b-black hover:border-b-gray-500 transition-colors duration-300' href={{"{about['cta_link']}"}}>
                            {about['cta_text']}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default About"""
        
        with open("src/components/About.tsx", 'w', encoding='utf-8') as f:
            f.write(about_content)
        return True
    
    def update_aboutbanner(self, content_data):
        """Update Aboutbanner.tsx"""
        hero = content_data['about_page']['hero']
        
        aboutbanner_content = f"""import {{ roboto_slab }} from '@/app/fonts'
import React from 'react'
import ServiceBookingForm from './ServiceBookingForm'

const Aboutbanner = () => {{
    return (
        <div className='w-full bg-white py-16 lg:py-24'>
            <div className='max-w-6xl mx-auto px-6 lg:px-8'>
                <div className='text-center max-w-4xl mx-auto'>
                    <h1 className='text-4xl lg:text-5xl font-medium text-gray-900 mb-8'>
                        {hero['title']}
                    </h1>
                    
                    <div className='space-y-6 text-lg leading-relaxed text-gray-700'>
                        <p>
                            {hero['paragraphs'][0]}
                        </p>
                        
                        <p>
                            {hero['paragraphs'][1]}
                        </p>
                        
                        <p className='text-[#8B4513] font-medium italic'>
                            "{hero['tagline']}"
                        </p>
                    </div>

                    {{/* Call to Action */}}
                    <div className='pt-8 flex justify-center'>
                        <ServiceBookingForm 
                            buttonText="{hero['cta_text']}"
                            buttonStyle="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default Aboutbanner"""
        
        with open("src/components/Aboutbanner.tsx", 'w', encoding='utf-8') as f:
            f.write(aboutbanner_content)
        return True
    
    def update_partners(self, content_data, tone="default"):
        """Update Partners.tsx with tone-appropriate content"""
        partners_data = self.get_tone_specific_partners(tone, content_data)
        title = partners_data['title']
        description = partners_data['description']
        
        partners_content = f"""import Image from 'next/image'

const partners = [
    {{ name: 'Artisan', logo: '/partners/bg-br1.jpg' }},
    {{ name: 'F&F', logo: '/partners/bg-br2.jpg' }},
    {{ name: 'Vista', logo: '/partners/bg-br3.jpg' }},
    {{ name: 'Adorn', logo: '/partners/bg-br4.jpg' }},
    {{ name: 'Stenna', logo: '/partners/bg-br5.jpg' }},
    {{ name: 'KC Fabrics', logo: '/partners/bg-br6.jpg' }},
    {{ name: 'Louverline', logo: '/partners/bg-br7.jpg' }},
    {{ name: 'SketchTwenty3', logo: '/partners/bg-br8.jpg' }},
    {{ name: 'Designers Resource', logo: '/partners/bg-br9.jpg' }},
    {{ name: 'Excel Furniture', logo: '/partners/bg-br10.jpg' }},
    {{ name: 'Toso', logo: '/partners/bg-br11.jpg' }},
    {{ name: 'Cole & Son', logo: '/partners/bg-br12.jpg' }},
    {{ name: 'D Decor', logo: '/partners/bg-br13.jpg' }},
    {{ name: 'La Dimora', logo: '/partners/bg-br14.jpg' }},
    {{ name: 'Somfy', logo: '/partners/bg-br15.jpg' }},
    {{ name: 'Sarom', logo: '/partners/bg-br16.jpg' }},
    {{ name: 'Forest Homes', logo: '/partners/bg-br17.jpg' }},
    {{ name: 'Welspun', logo: '/partners/bg-br18.jpg' }},
    {{ name: 'Sansaar', logo: '/partners/bg-br19.jpg' }},
    {{ name: 'NBT', logo: '/partners/bg-br20.jpg' }},
    {{ name: 'Hunter Douglas', logo: '/partners/bg-br21.jpg' }}
]

const Partners = () => {{
    return (
        <section className='w-full py-20 bg-white'>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-medium mb-6 uppercase tracking-wide">{title}</h2>
                    <p className="text-lg max-w-3xl text-center">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-12 gap-y-16">
                    {{partners.map((partner, index) => (
                        <div 
                            key={{index}} 
                            className="flex items-center justify-center col-span-1"
                        >
                            <Image
                                src={{partner.logo}}
                                alt={{partner.name}}
                                width={{140}}
                                height={{60}}
                                className="object-contain max-h-12 hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    ))}}
                </div>
            </div>
        </section>
    )
}}

export default Partners"""
        
        with open("src/components/Partners.tsx", 'w', encoding='utf-8') as f:
            f.write(partners_content)
        return True
    
    def update_constants(self, content_data):
        """Update constants file with tone-appropriate content using existing JSON structure"""
        # Use features array from JSON for Description
        features = content_data.get('features', [])
        
        # Generate description sections from features
        descriptions = []
        for feature in features:
            desc = feature['description'].replace("'", "\\'")
            title_width = "w-[30%]" if feature['title'] == "Made in India" else "w-[47.5%]" if feature['title'] == "Complete Personalisation" else "w-[45%]"
            descriptions.append(f"""    {{
        'title': '{feature['title']}',
        'titleWidth': "{title_width}",
        'images': "{feature['image']}",
        'desc': "{desc}"
    }}""")
        
        descriptions_str = ",\\n".join(descriptions) if descriptions else """    {
        'title': 'Made in India',
        'titleWidth': "w-[30%]",
        'images': "/img/desc1.jpeg",
        'desc': "Experience soft furnishings that are truly yours with our comprehensive customization options."
    }"""
        
        # Use default navigation
        nav_links_str = """    { href: '/about', key: 'About us', text: 'About us'},
    { href: '/productPg', key: 'Our Services', text: 'Our Services'},
    { href: '/qualityNservice', key: 'Quality Standards', text: 'Quality Standards'},
    { href: '/contactUs', key: 'Contact Us', text: 'Contact Us'},
    { href: '/sustainable', key: 'Sustainable Practices', text: 'Sustainable Practices' }"""
        
        constants_content = f"""export const Links = [
    {{ href: '/about', key: 'About us', text: 'About us'}},
    {{ href: '/productPg', key: 'Services', text: 'Services'}},
    {{ href: '/productPg', key: 'Featured Products', text: 'Featured Products'}},
    {{ href: '/qualityNservice', key: 'Quality Standards', text: 'Quality Standards'}},
    {{ href: '/contactUs', key: 'Contact Us', text: 'Contact Us'}},
    {{ href: '/sustainable', key: 'Sustainable Practices', text: 'Sustainable Practices' }},
    {{ href: '/authPg', key: 'Admin', text: 'Admin' }},
]

export const navLinks = [
{nav_links_str}
]

export const BrandsCompany = [
    'pngwing.com.png',
    'gucci.png',
    'mwubo.png',
    'calvin.png',
    'zara.png',
    'nautica.png',
    'secret.png',
    'dior.png',
    'versica.png',
    'wing.png'
]

export const Description = [
{descriptions_str}
]

export const ServicesP = [
    {{
        'img': "bg-CP1",
        "content": "Custom Sofas",
        'position': "bg-[50%_80%] bg-[length:912px_1035px]"
    }},
    {{
        'img': "bg-CP2",
        "content": "Curtain works",
        'position': "bg-[50%_80%] bg-[length:912px_1035px]"
    }},
    {{
        'img': "bg-CP3",
        "content": "Wallpapers",
        'position': "bg-cover"
    }},
    {{
        'img': "bg-CP4",
        "content": "Window Blinds",
        'position': "bg-[length:912px_1035px] bg-[50%_80%]"
    }},
]

export const brands = Array.from({{ length: 24 }}, (_, i) => ({{
    bg: `bg-br${{i + 1}}`,
}}));

export const footerMenu = [
    {{
        title: 'ADDRESS',
        links: [
            '291/A, 34th cross, 9th main,',
            'Jayanagar 4th block,', 
            'Bangalore-560011',
            '',
            '1807, AR Enclave,',
            '5th block, 1st phase, HBR Layout,',
            'Bangalore-560043'
        ]
    }},
    {{
        title: 'EMAIL',
        links: [
            'Snugfurnishing@gmail.com',
            'Examplemail@gmail.com'
        ],
    }},
    {{
        title: 'WHATSAPP NUMBER',
        links: [
            'Mon-Sat',
            '11:00am-7:00pm',
            '+91 95389 53904',
        ],
    }},
    {{
        title: 'CALL US',
        links: [
            'Mon-Sat',
            '11:00am-7:00pm',
            '+91 95389 53904',
        ],
    }}
]

export const qnsabt = [
    {{
        text: 'Quality Assured',
        img: '/img/q1.png'
    }},
    {{
        text: 'Social Resposibility',
        img: '/img/q2.png'
    }},
    {{
        text: 'Exceptional Maintainance ',
        img: '/img/q3.png'
    }},
    {{
        text: 'Sustainable Practice',
        img: '/img/q4.png'
    }},
    {{
        text: 'Sustainable Practice',
        img: '/img/q4.png'
    }},
    {{
        text: 'Sustainable Practice',
        img: '/img/q4.png'
    }}
]

export const qnsDetail = [
    {{
        img: '/img/qnsDet1.png',
        bgColor: 'bg-white',
        title:'Unwavering Commitment to Excellence',
        desc:'At Snug, excellence is not just our goal—it is our standard. We craft premium soft furnishings that masterfully integrate superior design, exceptional comfort, and lasting durability.'
    }},
    {{
        img: '/img/qnsDet2.png',
        bgColor: 'bg-[#E5E4DF]',
        title:'Premium Materials & Sustainability',
        desc:'We meticulously source the finest fabrics and materials from trusted suppliers to deliver exceptional soft furnishing solutions.'
    }},
    {{
        img: '/img/qnsDet3.png',
        bgColor: 'bg-white',
        title:'Innovation in Design & Craftsmanship',
        desc:'Our design philosophy seamlessly blends cutting-edge innovation with timeless elegance.'
    }},
    {{
        img: '/img/qnsDet4.png',
        bgColor: 'bg-[#E5E4DF]',
        title:'Meticulous Attention to Detail',
        desc:'Every element of our soft furnishings reflects our dedication to perfection.'
    }},
    {{
        img: '/img/qnsDet5.png',
        bgColor: 'bg-white',
        title:'Timely & Prompt Delivery',
        desc:'We understand the importance of your timeline and respect your schedule.'
    }},
    {{
        img: '/img/qnsDet6.png',
        bgColor: 'bg-[#E5E4DF]',
        title:'Customer-Centric Design Philosophy',
        desc:'Your vision is the foundation of our creative process.'
    }},
    {{
        img: '/img/qnsDet7.png',
        bgColor: 'bg-white',
        title:'Exceptional Service & Support',
        desc:'Our commitment to excellence extends far beyond the completion of your project.'
    }},
    {{
        img: '/img/qnsDet1.png',
        bgColor: 'bg-[#E5E4DF]',
        title:'Continuous Improvement Through Feedback',
        desc:'We treasure your insights as the cornerstone of our growth and innovation.'
    }}
]

export const productList = [
    {{
        img: '/img/products/curtains.jpg',
        text: 'Custom Curtains'
    }},
    {{
        img: '/img/products/blinds.jpg',
        text: 'Window Blinds'
    }},
    {{
        img: '/img/products/wallpapers.jpg',
        text: 'Wallpapers'
    }},
    {{
        img: '/img/products/upholstery.jpg',
        text: 'Upholstery'
    }},
    {{
        img: '/img/products/flooring.jpg',
        text: 'Flooring'
    }},
    {{
        img: '/img/products/tracks.jpg',
        text: 'Tracks'
    }}
]"""
        
        with open("src/constant/index.ts", 'w', encoding='utf-8') as f:
            f.write(constants_content)
        return True
    
    def update_footer(self, content_data):
        """Update footer brand description"""
        footer_file = "src/components/Footbar.tsx"
        if not os.path.exists(footer_file):
            return False
            
        with open(footer_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_desc = content_data['footer']['brand_description']
        content = re.sub(
            r"(<p className='text-gray-700 text-sm leading-relaxed max-w-xs'>\\s*)(.*?)(\\s*</p>)",
            f"\\1{new_desc}\\3",
            content,
            flags=re.DOTALL
        )
        
        with open(footer_file, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    def apply_tone(self, tone="default"):
        """Apply the specified tone to all components"""
        print(f"Applying {tone} tone to ALL components...")
        
        try:
            content_data = self.load_content(tone)
        except FileNotFoundError as e:
            print(f"Error: {e}")
            return False
        
        updates = [
            ("Banner.tsx", lambda data: self.update_banner(data)),
            ("page.tsx", lambda data: self.update_page(data)),
            ("Service.tsx", lambda data: self.update_service(data)),
            ("About.tsx", lambda data: self.update_about(data)),
            ("Aboutbanner.tsx", lambda data: self.update_aboutbanner(data)),
            ("Partners.tsx", lambda data: self.update_partners(data, tone)),
            ("Constants", lambda data: self.update_constants(data)),
            ("Footbar.tsx", lambda data: self.update_footer(data))
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
        
        if success_count == len(updates):
            print(f"\\n🎉 Successfully applied {tone} tone to ALL components!")
            return True
        else:
            print(f"\\n⚠️  Applied {tone} tone with some issues.")
            return success_count >= len(updates) * 0.8

def main():
    if len(sys.argv) > 1:
        tone = sys.argv[1].lower()
    else:
        tone = "default"
    
    valid_tones = ["default", "bold", "warm", "poetic", "sophisticated"]
    if tone not in valid_tones:
        print(f"Error: Invalid tone '{tone}'. Valid options: {', '.join(valid_tones)}")
        sys.exit(1)
    
    mapper = ContentMapper()
    success = mapper.apply_tone(tone)
    
    if not success:
        sys.exit(1)

if __name__ == "__main__":
    main() 