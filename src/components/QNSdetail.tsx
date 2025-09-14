import { roboto_slab } from '@/app/fonts'
import { qnsDetail } from '@/constant'
import Image from 'next/image'

const QNSdetail = () => {
    return (
        <div className='py-20 flex justify-center bg-white'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                    {qnsDetail.map((det, index) => (
                        <div key={index} className={`flex flex-col sm:flex-row gap-6 sm:gap-8 items-center pb-8 border-b border-gray-200 last:border-0`}>
                            <div className="flex-shrink-0">
                            <Image 
                                src={det.img}
                                    height={80}
                                    width={80}
                                alt={det.title}
                                    className="object-contain"
                            />
                        </div>
                            <div className="flex-1">
                                <div className={`${roboto_slab.className} flex flex-col gap-1`}>
                                    <h3 className='text-2xl font-medium text-[#333333] font-neue-regrade'>
                                    {det.title}
                                    </h3>
                                    <p className='text-[1.125rem] text-[#666666] font-neue-regrade'>
                                    {det.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QNSdetail