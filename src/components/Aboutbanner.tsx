import { roboto_slab } from '@/app/fonts'
import React from 'react'
import ServiceBookingForm from './ServiceBookingForm'

const Aboutbanner = () => {
    return (
        <div className='w-full bg-white py-16 lg:py-24'>
            <div className='max-w-6xl mx-auto px-6 lg:px-8'>
                <div className='text-center max-w-4xl mx-auto'>
                    <h1 className='text-4xl lg:text-5xl font-medium text-gray-900 mb-8'>
                        About Snug
                    </h1>
                    
                    <div className='space-y-6 text-lg leading-relaxed text-gray-700'>
                        <p>
                            At Snug, we're like your favorite neighbors who happen to be amazing at making homes cozier! We specialize in creating soft furnishings that make your space feel like a warm hug. Our team loves working with custom curtains, friendly blinds, cheerful wallpapers, and comfy upholstery—each piece crafted with love to make your home feel perfectly you.
                        </p>
                        
                        <p>
                            With over a decade of making homes happier, we understand that every family has their own special story. Our caring team loves getting to know you and working together to bring your vision to life, making sure every fabric we choose and every detail we add helps create spaces that feel wonderfully welcoming.
                        </p>
                        
                        <p className='text-[#8B4513] font-medium italic'>
                            "Where every home gets a warm hug—made just for you."
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className='pt-8 flex justify-center'>
                        <ServiceBookingForm 
                            buttonText="Let's Get Started Together"
                            buttonStyle="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutbanner