import { Description } from '@/constant'
import Image from 'next/image'
import ServiceBookingForm from './ServiceBookingForm'

interface DescriptionItem {
    title: string;
    titleWidth: string;
    images: string;
    desc: string;
}

const Detail = () => {
    // Reorder the sections
    const orderedSections = [
        Description.find(d => d.title === 'Complete Personalisation'),
        Description.find(d => d.title === 'Quality Assurance'),
        Description.find(d => d.title === 'Made in India'),
    ].filter((item): item is DescriptionItem => !!item)

    return (
        <section className='w-full flex justify-center py-24 bg-[#E5E4DF]'>
            <div className="flex flex-col justify-center max-w-7xl px-4">
                <div className="flex flex-col gap-24 mb-16 lg:flex-row justify-between">
                    {orderedSections.map((desc, index) => (
                        <div key={index} className='text-start lg:items-start items-center gap-6 flex flex-col justify-start w-full lg:w-[356px]'>
                            <h2 className="font-neue-regrade text-2xl font-medium tracking-normal whitespace-nowrap">
                                {desc.title}
                            </h2>
                            <Image 
                                src={desc.images}
                                height={258}
                                width={356}
                                alt={desc.title}
                                className="mt-2"
                            />
                            <p className='font-neue-regrade text-gray-900 lg:text-left text-[1.125rem] leading-relaxed tracking-wide'>
                                {desc.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <ServiceBookingForm />
                </div>
            </div>
        </section>
    )
}

export default Detail