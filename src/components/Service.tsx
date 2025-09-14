import Image from 'next/image'
import Link from 'next/link'
import { roboto_slab } from '@/app/fonts'

const serviceDescriptions = {
    'curtain-works': 'Let\'s dress your windows in style! Our custom curtains are like a warm hug for your windows, bringing together beauty and comfort while perfectly matching your home\'s personality.',
    'window-blinds': 'Control light and privacy with our friendly range of window blinds. Whether you\'re looking for a cozy morning light or peaceful afternoon shade, we have the perfect solution for your daily comfort.',
    'wallpapers': 'Give your walls a warm embrace with our delightful wallpaper collection. From subtle textures to cheerful patterns, we\'ll help you find the perfect design to make your rooms feel wonderfully welcoming.',
    'upholstery': 'Let\'s bring new life to your beloved furniture! Our upholstery service combines soft, durable fabrics with caring craftsmanship to make your favorite pieces even more comfortable and inviting.'
} as const;

const Service = () => {
    return (
        <section className='w-full py-24'>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-[#B4654A] text-4xl font-medium">Our Services</h2>
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
                            <h3 className="text-white text-2xl mb-4">Custom Curtains</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={`${roboto_slab.className} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {serviceDescriptions['curtain-works']}
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
                            <h3 className="text-white text-2xl mb-4">Window Blinds</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={`${roboto_slab.className} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {serviceDescriptions['window-blinds']}
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
                            <h3 className="text-white text-2xl mb-4">Wallpapers</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={`${roboto_slab.className} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {serviceDescriptions['wallpapers']}
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
                            <h3 className="text-white text-2xl mb-4">Upholstery</h3>
                            <Link href="/productPg" className="text-white text-base underline underline-offset-4 hover:text-gray-200 transition-colors duration-300">
                                Explore
                            </Link>
                        </div>
                        <div className={`${roboto_slab.className} absolute inset-x-0 bottom-0 h-[60%] bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-600 px-10 flex flex-col justify-end`}>
                            <p className="text-white text-lg leading-relaxed tracking-wide text-center mb-32">
                                {serviceDescriptions['upholstery']}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service