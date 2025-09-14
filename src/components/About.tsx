import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='min-h-[500px] py-16 lg:py-24 bg-[#E5E4DF] flex justify-center items-center'>
            <div className='w-[90%] lg:w-[86%] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24'>
                <div className="w-full lg:w-[792px] aspect-[3/2] bg-no-repeat bg-abtBg bg-cover"></div>
                <div className="w-full lg:w-[567px] py-8 lg:py-0 flex flex-col gap-4 justify-center">
                    <h2 className='text-3xl lg:text-4xl mb-6 font-medium'>OUR STORY</h2>
                    <p className='text-lg leading-relaxed tracking-wide'>Welcome to our cozy corner of the world, where we&apos;re all about making homes happier!</p>
                    <p className='text-lg leading-relaxed tracking-wide'>We believe that a home should wrap you in comfort like a warm blanket. That&apos;s why we put our hearts into creating soft furnishings that make you smile every time you walk through the door.</p>
                    <p className='text-lg leading-relaxed tracking-wide'>Like good neighbors, we care about our planet too. We work with friendly, eco-conscious partners to create furnishings that are kind to both your home and Mother Earth.</p>
                    <p className='text-lg leading-relaxed tracking-wide'>Let us help you turn your house into a warm, welcoming haven with our lovingly crafted curtains, blinds, wallpapers, and upholstery - because everyone deserves a home that gives them a big, comfy hug!</p>
                    <div className='mt-12'>
                        <Link className='hover:text-gray-500 text-2xl lg:text-3xl border-b-2 border-b-black hover:border-b-gray-500 transition-colors duration-300' href={"/about"}>
                            Get to Know Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About