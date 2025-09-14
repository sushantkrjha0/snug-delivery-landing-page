import { qnsabt } from '@/constant'
import Image from 'next/image'
import React from 'react'
import { roboto_slab } from '@/app/fonts'

const QNS = () => {
    return (
        <div className='w-full py-16 flex justify-center items-center bg-[#E5E4DF]'>
            <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {qnsabt.slice(0, 4).map((q, index) => (
                    <div 
                        key={index} 
                        className={`${roboto_slab.className} flex flex-col justify-center items-center gap-4 p-6 rounded-lg transition-transform duration-300 hover:transform hover:scale-105`}
                    >
                        <Image
                            height={80}
                            width={80}
                            src={q.img}
                            alt={q.text}
                            className="object-contain"
                        />
                        <span className="text-lg text-center font-medium text-gray-800">
                            {q.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QNS