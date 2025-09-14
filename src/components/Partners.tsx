import Image from 'next/image'

const partners = [
    { name: 'D\'Decor', logo: '/partners/DDecor.jpg' },
    { name: 'Sansaar', logo: '/partners/Sansaar.jpg' },
    { name: 'R R Decor', logo: 'https://www.rrdecor.com/images/logo2.png' },
    { name: 'Azco', logo: '/partners/Azco.png' },
    { name: 'Sarom', logo: '/partners/Sarom.jpg' },
    { name: 'KC Fabrics', logo: '/partners/KC_Fabrics.jpg' },
    { name: 'F&F', logo: '/partners/F&F.jpg' },
    { name: 'Texam', logo: '/partners/Texam.png' },
    { name: 'Designer Resource', logo: '/partners/Designer_Resource.jpg' },
    { name: 'Armani Casa', logo: '/partners/Armani_Casa.jpg' },
    { name: 'Roberto Cavalli', logo: '/partners/Le_Demora.jpg' },
    { name: 'SketchTwenty3', logo: '/partners/SketchTwenty3.jpg' },
    { name: 'Cole & Sons', logo: '/partners/Cole_and_Sons.jpg' },
    { name: 'Le Demora', logo: '/partners/Le_Demora.jpg' },
    { name: 'Artisan', logo: '/partners/Forest.jpg' },
    { name: 'Excell', logo: '/partners/Excell.jpg' },
    { name: 'Stenna', logo: '/partners/Stenna.jpg' },
    { name: 'HunterDouglas', logo: '/partners/HunterDouglas.jpg' },
    { name: 'Louverline', logo: '/partners/Louverline.jpg' },
    { name: 'Adorn', logo: '/partners/Adorn.jpg' },
    { name: 'Vista', logo: '/partners/Vista.jpg' },
    { name: 'NBT', logo: '/partners/NBT.jpg' },
    { name: 'Somfy', logo: '/partners/Somfy.jpg' },
    { name: 'Toso', logo: '/partners/Toso.jpg' }
]

const Partners = () => {
    return (
        <section className='w-full py-20 bg-white'>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-medium mb-6 uppercase tracking-wide">Our Friendly Partners</h2>
                    <p className="text-lg max-w-3xl text-center">
                        We work with wonderful partners who share our love for quality and comfort. Together, we source the finest materials to make your home feel extra special and welcoming.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-12">
                    {partners.map((partner, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center col-span-1"
                        >
                            <div className={`${partner.name === 'R R Decor' ? 'bg-black p-2 rounded' : ''}`}>
                                {/* Try regular img tag first for debugging */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={partner.name === 'Texam' ? 200 : 140}
                                    height={partner.name === 'Texam' ? 90 : 60}
                                    className={`object-contain hover:opacity-80 transition-opacity duration-300 ${partner.name === 'Texam' ? 'max-h-20' : 'max-h-12'}`}
                                    onError={(e) => {
                                        console.error(`Failed to load image for ${partner.name}:`, partner.logo);
                                        console.error('Error:', e);
                                    }}
                                    onLoad={() => {
                                        console.log(`Successfully loaded image for ${partner.name}:`, partner.logo);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partners
