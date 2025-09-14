import Image from 'next/image'

const partners = [
    { name: 'D\'Decor', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/DDecor.jpg' },
    { name: 'Sansaar', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Sansaar.jpg' },
    { name: 'R R Decor', logo: 'https://www.rrdecor.com/images/logo2.png' },
    { name: 'Azco', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Azco.png' },
    { name: 'Sarom', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Sarom.jpg' },
    { name: 'KC Fabrics', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/KC_Fabrics.jpg' },
    { name: 'F&F', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/F%26F.jpg' },
    { name: 'Texam', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Texam.png' },
    { name: 'Designer Resource', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Designer_Resource.jpg' },
    { name: 'Armani Casa', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Armani_Casa.jpg' },
    { name: 'Roberto Cavalli', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Le_Demora.jpg' },
    { name: 'SketchTwenty3', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/SketchTwenty3.jpg' },
    { name: 'Cole & Sons', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Cole_and_Sons.jpg' },
    { name: 'Le Demora', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Le_Demora.jpg' },
    { name: 'Artisan', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Forest.jpg' },
    { name: 'Excell', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Excell.jpg' },
    { name: 'Stenna', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Stenna.jpg' },
    { name: 'HunterDouglas', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/HunterDouglas.jpg' },
    { name: 'Louverline', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Louverline.jpg' },
    { name: 'Adorn', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Adorn.jpg' },
    { name: 'Vista', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Vista.jpg' },
    { name: 'NBT', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/NBT.jpg' },
    { name: 'Somfy', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Somfy.jpg' },
    { name: 'Toso', logo: 'https://snug-delivery-landing.s3.amazonaws.com/partners/Toso.jpg' }
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
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={partner.name === 'Texam' ? 200 : 140}
                                    height={partner.name === 'Texam' ? 90 : 60}
                                    className={`object-contain hover:opacity-80 transition-opacity duration-300 ${partner.name === 'Texam' ? 'max-h-20' : 'max-h-12'}`}
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
