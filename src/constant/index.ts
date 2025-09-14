export const productCategories = [
    {
        category: "Custom Furniture",
        items: [
            { title: "Custom Sofas", href: "/productPg?service=custom_sofa" },
            { title: "Custom Chairs", href: "/productPg?service=custom_chair" },
            { title: "Custom Tables", href: "/productPg?service=custom_table" }
        ]
    },
    {
        category: "Window Treatments",
        items: [
            { title: "Curtain Tracks", href: "/productPg?service=tracks" },
            { title: "Blinds", href: "/productPg?service=blinds" },
            { title: "Curtains", href: "/productPg?service=curtains" }
        ]
    },
    {
        category: "Services",
        items: [
            { title: "Interior Design", href: "/productPg?service=design" },
            { title: "Installation", href: "/productPg?service=installation" },
            { title: "Consultation", href: "/productPg?service=consultation" }
        ]
    }
];

export const Links = [
    { href: '/about', key: 'About us', text: 'About us'},
    { href: '/productPg', key: 'Services', text: 'Services'},
    { href: '/productPg', key: 'Featured Products', text: 'Featured Products'},
    { href: '/qualityNservice', key: 'Quality Standards', text: 'Quality Standards'},
    { href: '/contactUs', key: 'Contact Us', text: 'Contact Us'},
    { href: '/sustainable', key: 'Sustainable Practices', text: 'Sustainable Practices' },
    { href: '/authPg', key: 'Admin', text: 'Admin' },
]

export const navLinks = [
    { href: '/about', key: 'About us', text: 'About us'},
    { href: '/productPg', key: 'Our Services', text: 'Our Services'},
    { href: '/qualityNservice', key: 'Quality Standards', text: 'Quality Standards'},
    { href: '/contactUs', key: 'Contact Us', text: 'Contact Us'},
    { href: '/sustainable', key: 'Sustainable Practices', text: 'Sustainable Practices' }
]

export const serviceProductDetails = {
    custom_sofa: [
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/custom_sofa/SAN_1978.jpg',
            title: 'Cozy Sectional Seating',
            desc: 'Perfect for family gatherings and movie nights. This sectional combines comfort with style, featuring premium fabrics and sturdy construction.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/custom_sofa/SAN_1985.jpg',
            title: 'Elegant Single Seater',
            desc: 'A sophisticated single seater that adds elegance to any room. Crafted with attention to detail and premium materials.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/custom_sofa/SAN_2018.jpg',
            title: 'Modern L-Shaped Sofa',
            desc: 'Contemporary design meets comfort in this L-shaped sofa. Perfect for modern living spaces and open floor plans.'
        }
    ],
    tracks: [
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/tracks/image%202.jpeg',
            title: 'Manual Curtain Tracks',
            desc: 'Smooth-operating manual tracks that provide reliable curtain movement. Easy to install and maintain.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/tracks/image3.jpg',
            title: 'Motorized Tracks',
            desc: 'Smart motorized tracks for ultimate convenience. Control your curtains with a remote or smartphone app.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/tracks/Manual%20tracks.jpg',
            title: 'Heavy-Duty Tracks',
            desc: 'Built to last, these heavy-duty tracks can handle the weight of thick, luxurious curtains.'
        }
    ],
    blinds: [
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/window_blinds/1.%20Roman%20Blind_.jpg',
            title: 'Roman Blinds',
            desc: 'Classic and elegant, Roman blinds offer excellent light control and add sophistication to any window.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/window_blinds/2.%20Wooden%20Blind.jpg',
            title: 'Wooden Blinds',
            desc: 'Natural wood blinds that bring warmth and texture to your space. Available in various wood finishes.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/window_blinds/3.%20Zebra%20Blind.png',
            title: 'Zebra Blinds',
            desc: 'Modern and versatile, Zebra blinds offer both privacy and light control with their unique alternating fabric design.'
        }
    ],
    curtains: [
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/curtains/Blackout%20Curtain.png',
            title: 'Blackout Curtains',
            desc: 'Perfect for bedrooms and media rooms. These curtains block out light completely for better sleep and entertainment.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/curtains/Semi%20Sheer%20Curtain.png',
            title: 'Semi-Sheer Curtains',
            desc: 'Balance privacy with natural light. These curtains filter sunlight while maintaining a sense of openness.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/curtains/Sheer%20Curtain.png',
            title: 'Sheer Curtains',
            desc: 'Light and airy, sheer curtains add elegance while allowing maximum natural light into your space.'
        }
    ],
    wallpapers: [
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/wallpapers/1.%20Paper%20Based%20Wallpaper.png',
            title: 'Paper-Based Wallpaper',
            desc: 'Traditional and breathable, paper-based wallpapers are perfect for bedrooms and living areas.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/wallpapers/3.%20Vinyl%20Wallpaper.png',
            title: 'Vinyl Wallpaper',
            desc: 'Durable and washable, vinyl wallpapers are ideal for kitchens and bathrooms.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/wallpapers/4.%20Fabric%20Wallpaper.png',
            title: 'Fabric Wallpaper',
            desc: 'Luxurious and textured, fabric wallpapers add depth and sophistication to any room.'
        }
    ],
    flooring: [
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/flooring/Flooring.png',
            title: 'Premium Flooring',
            desc: 'High-quality flooring options that combine durability with aesthetic appeal.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/flooring/flooring2.png',
            title: 'Luxury Vinyl',
            desc: 'Waterproof and scratch-resistant luxury vinyl flooring that looks and feels like natural materials.'
        },
        {
            img: 'https://snug-delivery-landing.s3.amazonaws.com/img/flooring/flooring3.png',
            title: 'Engineered Wood',
            desc: 'Beautiful engineered wood flooring that offers the look of solid wood with better stability.'
        }
    ]
};

export const Description = [
    {
        'title': 'Made in India',
        'titleWidth': "w-[30%]",
        'images': "https://snug-delivery-landing.s3.amazonaws.com/img/desc1.jpeg",
        'desc': "Every piece we create carries the warmth of Indian hospitality and craftsmanship. Our talented local artisans pour their hearts into crafting your curtains, blinds, wallpapers, and upholstery, bringing together traditional skills and modern comfort in perfect harmony."
    },
    {
        'title': 'Complete Personalisation',
        'titleWidth': "w-[47.5%]",
        'images': "https://snug-delivery-landing.s3.amazonaws.com/img/desc2.jpeg",
        'desc': "Your home should be as unique as you are! We love working closely with you to create soft furnishings that feel just right. From picking out the perfect fabrics to choosing patterns that make you smile, we're here to help you create spaces that truly feel like you."
    },
    {
        'title': 'Quality Assurance',
        'titleWidth': "w-[45%]",
        'images': "https://snug-delivery-landing.s3.amazonaws.com/img/desc3.jpeg",
        'desc': "We believe in creating furnishings that feel like old friends - reliable, comforting, and always there for you. Every piece we make is crafted with care and attention, using materials that not only look beautiful but stand the test of time, making your home cozy and inviting for years to come."
    }
]

export const ServicesP = [
    {
        'img': "bg-CP1",
        "content": "Custom Sofas",
        'position': "bg-[50%_80%] bg-[length:912px_1035px]"
    },
    {
        'img': "bg-CP2",
        "content": "Curtain Tracks",
        'position': "bg-[50%_80%] bg-[length:912px_1035px]"
    },
    {
        'img': "bg-CP3",
        "content": "Wallpapers",
        'position': "bg-[50%_80%] bg-[length:912px_1035px]"
    },
    {
        'img': "bg-CP4",
        "content": "Window Blinds",
        'position': "bg-[50%_80%] bg-[length:912px_1035px]"
    }
]

export const qnsabt = [
    {
        text: 'Quality Assured',
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/q1.png'
    },
    {
        text: 'Social Responsibility',
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/q2.png'
    },
    {
        text: 'Exceptional Maintenance',
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/q3.png'
    },
    {
        text: 'Sustainable Practice',
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/q4.png'
    },
    {
        text: 'Expert Craftsmanship',
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/q1.png'
    },
    {
        text: 'Customer Satisfaction',
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/q2.png'
    }
]

export const qnsDetail = [
    {
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/qnsDet1.png',
        bgColor: 'bg-white',
        title:'Made with Love',
        desc: 'Every piece is crafted with care and attention to detail, ensuring that your home feels warm and welcoming.'
    },
    {
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/qnsDet2.png',
        bgColor: 'bg-white',
        title:'Quality Materials',
        desc: 'We use only the finest materials that are both beautiful and durable, so your furnishings last for years to come.'
    },
    {
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/qnsDet3.png',
        bgColor: 'bg-white',
        title:'Expert Craftsmanship',
        desc: 'Our skilled artisans bring years of experience to every project, creating pieces that are both functional and beautiful.'
    },
    {
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/qnsDet4.png',
        bgColor: 'bg-white',
        title:'Sustainable Practices',
        desc: 'We care about our planet and use eco-friendly materials and processes whenever possible.'
    },
    {
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/qnsDet5.png',
        bgColor: 'bg-white',
        title:'Customer Satisfaction',
        desc: 'Your happiness is our priority. We work closely with you to ensure every detail meets your expectations.'
    },
    {
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/qnsDet6.png',
        bgColor: 'bg-white',
        title:'Timely Delivery',
        desc: 'We respect your time and deliver your custom furnishings on schedule, every time.'
    },
    {
        img: 'https://snug-delivery-landing.s3.amazonaws.com/img/qnsDet7.png',
        bgColor: 'bg-white',
        title:'After-Sales Support',
        desc: 'Our relationship doesn\'t end with delivery. We\'re here to help with maintenance and care tips.'
    }
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
    'versace.png',
    'wing.png'
]

export const Description = [
    {
        'title': 'Made in India',
        'titleWidth': "w-[30%]",
        'images': "https://snug-delivery-landing.s3.amazonaws.com/img/desc1.jpeg",
        'desc': "Every piece we create carries the warmth of Indian hospitality and craftsmanship. Our talented local artisans pour their hearts into crafting your curtains, blinds, wallpapers, and upholstery, bringing together traditional skills and modern comfort in perfect harmony."
    },
    {
        'title': 'Complete Personalisation',
        'titleWidth': "w-[47.5%]",
        'images': "https://snug-delivery-landing.s3.amazonaws.com/img/desc2.jpeg",
        'desc': "Your home should be as unique as you are! We love working closely with you to create soft furnishings that feel just right. From picking out the perfect fabrics to choosing patterns that make you smile, we're here to help you create spaces that truly feel like you."
    },
    {
        'title': 'Quality Assurance',
        'titleWidth': "w-[45%]",
        'images': "https://snug-delivery-landing.s3.amazonaws.com/img/desc3.jpeg",
        'desc': "We believe in creating furnishings that feel like old friends - reliable, comforting, and always there for you. Every piece we make is crafted with care and attention, using materials that not only look beautiful but stand the test of time, making your home cozy and inviting for years to come."
    }
]
