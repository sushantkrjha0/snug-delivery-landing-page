"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { roboto_slab } from '@/app/fonts'
import Image from 'next/image'

const Service2 = () => {
    return (
        <div className='min-h-screen py-12 lg:py-20 flex justify-center'>
            <div className="w-[90%] lg:w-[86%] flex flex-col gap-8 lg:gap-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative h-[450px] bg-[#E5E4DF] rounded-lg overflow-hidden">
                        <Image
                            src="/service5.jpg"
                            alt="Wallpapers"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                            <h3 className="heading-sub text-white mb-2">Wallpapers</h3>
                            <p className="body-text text-white text-center max-w-[80%]">
                                Elevate your walls with our curated collection of wallpapers, featuring designs from renowned international and Indian brands.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[450px] bg-[#E5E4DF] rounded-lg overflow-hidden">
                        <Image
                            src="/service6.jpg"
                            alt="Window Blinds"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                            <h3 className="heading-sub text-white mb-2">Window Blinds</h3>
                            <p className="body-text text-white text-center max-w-[80%]">
                                Control light and privacy with our sleek window blind solutions, perfect for modern interiors.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[450px] bg-[#E5E4DF] rounded-lg overflow-hidden">
                        <Image
                            src="/service7.jpg"
                            alt="Custom Sofas"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                            <h3 className="heading-sub text-white mb-2">Custom Sofas</h3>
                            <p className="body-text text-white text-center max-w-[80%]">
                                Create your perfect sofa with our custom design service, tailored to your exact specifications and style preferences.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[450px] bg-[#E5E4DF] rounded-lg overflow-hidden">
                        <Image
                            src="/service8.jpg"
                            alt="Bedding"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                            <h3 className="heading-sub text-white mb-2">Bedding</h3>
                            <p className="body-text text-white text-center max-w-[80%]">
                                Transform your bedroom with our luxurious bedding collection, designed for comfort and style.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CustomSofa = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP1 relative overflow-hidden bg-no-repeat bg-[10%_80%] bg-[length:912px_1035px] h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Custom Sofas</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    Your sofa plays a vital role in your living space, offering comfort and reflecting your personal style. At SNUG, we offer a convenient custom sofa service, allowing you to create a piece tailored to your exact specifications.
                </div>
            </div>
        </div>
    )
}

const CurtainWorks = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP2 relative overflow-hidden bg-no-repeat bg-[50%_80%] bg-[length:912px_1035px] h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Curtain Works</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    At SNUG, we offer a curated selection of curtain styles, each designed to meet diverse aesthetic preferences and practical needs.
                </div>
            </div>
        </div>
    )
}

const Wallpapers = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP3 relative overflow-hidden bg-no-repeat bg-cover h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Wallpapers</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    Wallpaper is a powerful design element that can elevate your space. We offer a collection of wallpapers from renowned brands and custom design options.
                </div>
            </div>
        </div>
    )
}

const WindowBlinds = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={`bg-CP4 relative overflow-hidden bg-no-repeat bg-[50%_60%] bg-[length:912px_1035px] h-[520px] flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className={`${roboto_slab.className} relative z-10 flex flex-col items-center text-white w-[90%] pb-6`}>
                <span className='font-semibold text-lg mb-2'>Window Blinds</span>
                <button
                    onClick={() => setShow(prev => !prev)}
                    className='text-sm mb-2 hover:text-gray-300 border-b-2 border-b-white hover:border-b-gray-300'
                >
                    Learn More
                </button>
                <div
                    className={`
                        text-gray-300 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out
                        ${show ? 'max-h-[160px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                >
                    Blinds offer a sleek alternative to curtains with great light control and a clean look. Explore our range of interior and exterior blinds.
                </div>
            </div>
        </div>
    )
}

export default Service2
