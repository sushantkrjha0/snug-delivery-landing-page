import Image from 'next/image'

const partners = [
    { name: 'D\'Decor', logo: '/partners/bg-br1.jpg' },
    { name: 'Sansaar', logo: '/partners/bg-br2.jpg' },
    { name: 'R R Decor', logo: 'https://www.rrdecor.com/images/logo2.png' },
    { name: 'Azco', logo: '/partners/azco-logo.png' },
    { name: 'Sarom', logo: '/partners/bg-br5.jpg' },
    { name: 'KC Fabrics', logo: '/partners/bg-br6.jpg' },
    { name: 'F&F', logo: '/partners/bg-br7.jpg' },
    { name: 'Texam', logo: '/partners/Texam.png' },
    { name: 'Designer Resource', logo: '/partners/bg-br9.jpg' },
    { name: 'Armani Casa', logo: '/partners/bg-br10.jpg' },
    { name: 'Roberto Cavalli', logo: '/partners/bg-br11.jpg' },
    { name: 'SketchTwenty3', logo: '/partners/bg-br12.jpg' },
    { name: 'Cole & Sons', logo: '/partners/bg-br13.jpg' },
    { name: 'Le Demora', logo: '/partners/bg-br8.jpg' },
    { name: 'Artisan', logo: '/partners/bg-br15.jpg' },
    { name: 'Excell', logo: '/partners/bg-br16.jpg' },
    { name: 'Stenna', logo: '/partners/bg-br17.jpg' },
    { name: 'HunterDouglas', logo: '/partners/bg-br18.jpg' },
    { name: 'Louverline', logo: '/partners/bg-br19.jpg' },
    { name: 'Adorn', logo: '/partners/bg-br20.jpg' },
    { name: 'Vista', logo: '/partners/bg-br8.jpg' },
    { name: 'NBT', logo: '/partners/bg-br3.jpg' },
    { name: 'Somfy', logo: '/partners/bg-br4.jpg' },
    { name: 'Toso', logo: '/partners/bg-br21.jpg' }
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