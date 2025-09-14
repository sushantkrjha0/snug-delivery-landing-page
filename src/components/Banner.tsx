import Link from 'next/link'

const Banner = () => {
    return (
        <div className='w-full flex justify-center bg-BP3 bg-no-repeat bg-cover bg-[50%_70%]'>
            <div className='w-[100%] h-[35rem] lg:h-[50rem] overflow-hidden relative'>
                <div className='absolute inset-0 bg-black/10'></div>
                <div className='absolute inset-0 flex flex-col gap-10 items-end justify-center px-8 lg:px-16'>
                    <div className='flex flex-col gap-0 text-right'>
                        <h1 className="text-white font-neue-regrade text-4xl lg:text-6xl font-bold drop-shadow-lg [text-shadow:_2px_2px_8px_rgb(0_0_0_/_50%)] leading-tight">
                            Welcome Home to Comfort
                        </h1>
                        <p className="text-white/90 drop-shadow-md [text-shadow:_1px_1px_4px_rgb(0_0_0_/_30%)] whitespace-nowrap">
                            Where every thread tells a story of warmth and comfort
                        </p>
                        <Link 
                            href="/productPg" 
                            className='text-white hover:text-white/90 flex justify-end items-center gap-2 group transition-colors mt-6'
                        >
                            <span className='font-neue-regrade italic text-[1.125rem] tracking-wide border-b border-white/90 group-hover:border-white transition-colors'>
                                Start Your Journey
                            </span>
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Banner