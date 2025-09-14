import Link from 'next/link'
import React from 'react'

const Testimonial = () => {
    return (
        <div className='h-[500px] bg-[#E5E4DF] flex justify-center items-center '>
            <div className='w-[56%] flex justify-center gap-10 flex-col items-center text-center'>
                <span className='text-5xl'>Testimonials</span>
                <span>“We had a wonderful experience with Furnishing Studio and Mr. Lokesh in helping us choose the perfect curtains and blinds for our home. Mr. Lokesh was incredibly knowledgeable and attentive, helping us find the best styles and materials to suit our space. From start to finish, the service was seamless, professional, and personalized to our needs. The quality of the curtains and blinds is outstanding, and they’ve truly elevated the look of our home. Highly recommend Furnishing Studio for anyone looking for top-notch home furnishings and exceptional customer service.”</span>
                <span className='text-xl font-semibold'>Rohan Goud</span>
            </div>
        </div>
    )
}

export default Testimonial