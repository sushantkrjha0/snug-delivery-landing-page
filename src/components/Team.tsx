import { roboto_slab } from '@/app/fonts'
import React from 'react'
import Image from 'next/image'

const Team = () => {
    return (
        <div className='w-full bg-white py-20'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    
                    {/* Founder Section */}
                    <div className={`${roboto_slab.className} space-y-6`}>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-medium text-[#8B4513]'>Meet Lokesh</h2>
                            <p className='text-xl text-gray-600 font-light'>Founder & Creative Director</p>
                        </div>
                        <div className='space-y-4 text-lg leading-relaxed text-gray-700'>
                            <p>
                                In 2014, Lokesh E., an MBA graduate with a passion for interior design, founded what began as The Furnishing Studio. His vision was clear: to make premium soft furnishing accessible, stylish, and deeply personalized for every client.
                            </p>
                            <p>
                                Over the years, this vision evolved into Snug—a brand that represents more than just fabrics and fittings. With an intuitive understanding of client needs and an unwavering commitment to quality, Lokesh has established Snug as a trusted name where sophistication meets comfort.
                            </p>
                            <p className='text-[#8B4513] font-medium'>
                                "Every space has the potential to tell a beautiful story—we're here to help you write yours."
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-[520px] bg-founderImg bg-cover bg-[50%_25%] bg-no-repeat rounded-lg shadow-lg'></div>

                    {/* Vision Section */}
                    <div className='w-full h-[520px] bg-ourVisionImg bg-cover bg-[50%_25%] bg-no-repeat rounded-lg shadow-lg'></div>
                    <div className={`${roboto_slab.className} space-y-6`}>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-medium text-[#8B4513]'>Our Dream</h2>
                        </div>
                        <div className='space-y-4 text-lg leading-relaxed text-gray-700'>
                            <p>
                                We dream of making every home in India a cozy haven where comfort meets style, and where every soft furnishing tells a story of warmth and welcome.
                            </p>
                            <p className='text-gray-600'>
                                We picture a future where walking into your home feels like getting a warm hug, thanks to perfectly personalized soft furnishings that reflect your heart.
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className={`${roboto_slab.className} space-y-6`}>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-medium text-[#8B4513]'>Our Promise</h2>
                        </div>
                        <div className='space-y-4 text-lg leading-relaxed text-gray-700'>
                            <p>
                                To fill every home with warmth and comfort through soft furnishings that feel like they were made just for you - because they were!
                            </p>
                            <div className='space-y-2'>
                                <p className='font-medium text-[#8B4513]'>We achieve this by:</p>
                                <ul className='space-y-1 text-gray-600 ml-4'>
                                    <li>• Getting to know you and your home's personality</li>
                                    <li>• Walking with you every step of the way with friendly guidance</li>
                                    <li>• Creating each piece with love and care using the best materials</li>
                                    <li>• Making sure everyone can enjoy the comfort they deserve</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[520px] bg-ourMissionImg bg-cover bg-[50%_25%] bg-no-repeat rounded-lg shadow-lg'></div>

                </div>

                {/* Values Section */}
                <div className='mt-20 pt-16 border-t border-gray-200'>
                    <div className='text-center mb-12'>
                        <h2 className={`${roboto_slab.className} text-3xl font-medium text-[#8B4513] mb-4`}>What We Hold Dear</h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>The heart and soul of everything we do</p>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center space-y-4'>
                            <div className='w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mx-auto'>
                                <span className='text-2xl text-[#8B4513]'>✦</span>
                            </div>
                            <h3 className={`${roboto_slab.className} text-xl font-medium text-[#8B4513]`}>Heartfelt Quality</h3>
                            <p className='text-gray-600'>We put love and care into every stitch, using materials that feel as good as they look.</p>
                        </div>
                        
                        <div className='text-center space-y-4'>
                            <div className='w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mx-auto'>
                                <span className='text-2xl text-[#8B4513]'>◆</span>
                            </div>
                            <h3 className={`${roboto_slab.className} text-xl font-medium text-[#8B4513]`}>Your Home, Your Way</h3>
                            <p className='text-gray-600'>We listen to your dreams and work together to make them come true in your space.</p>
                        </div>
                        
                        <div className='text-center space-y-4'>
                            <div className='w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mx-auto'>
                                <span className='text-2xl text-[#8B4513]'>●</span>
                            </div>
                            <h3 className={`${roboto_slab.className} text-xl font-medium text-[#8B4513]`}>Trusted Service</h3>
                            <p className='text-gray-600'>Reliable, professional service from consultation to installation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team