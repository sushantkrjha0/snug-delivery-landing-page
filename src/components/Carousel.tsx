"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function CarouselPlugin() {
    const totalSlides = 5
    const barFillDuration = 4985 // 5 seconds per bar

    const [progressValues, setProgressValues] = React.useState(Array(totalSlides).fill(0))
    const [activeBar, setActiveBar] = React.useState(0)

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const autoplayPlugin = React.useRef(
        Autoplay({
        delay: barFillDuration,
        stopOnInteraction: false,
        playOnInit: true,
        }),
    )

    React.useEffect(() => {
        let step = 0
        const steps = 100
        const intervalTime = barFillDuration / steps

        const interval = setInterval(() => {
            setProgressValues((prev) => {
                const updated = [...prev]
                updated[activeBar] = (step / steps) * 100
                return updated
            })

            step += 1

            if (step > steps) {
                step = 0

                setProgressValues((prev) => {
                const updated = [...prev]
                updated[activeBar] = 100
                return updated
                })

                if (activeBar < totalSlides - 1) {
                setActiveBar((prev) => prev + 1)
                } else {
                setActiveBar(0)
                setProgressValues(Array(totalSlides).fill(0))
                }
            }
        }, intervalTime)

        return () => clearInterval(interval)
    }, [activeBar, barFillDuration])

    return (
        <div className="relative w-[100%] h-[500px]">
            <Carousel
                ref={emblaRef}
                plugins={[autoplayPlugin.current]}
                className="w-full h-full"
            >
                <CarouselContent className="h-full">
                    <CarouselItem key={0} className="h-full">
                        <div className="p-2 h-[500px]">
                            <Card className="h-full">
                            <CardContent className="h-full w-full bg-[#E5E4DF] flex justify-center items-center ">
                                <div className='w-[56%] flex justify-center gap-10 flex-col items-center text-center'>
                                    <span className='text-5xl'>Client Testimonials</span>
                                    <span className='text-[1.125rem] tracking-wide leading-relaxed'>"Exceptional service from start to finish. The team at Snug helped us choose the perfect curtains and blinds for our home. Their knowledge and attention to detail made the entire process seamless and professional. The quality is outstanding and has truly elevated our living space."</span>
                                    <span className='text-xl font-semibold'>Akarsh</span>
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={1} className="h-full">
                        <div className="p-2 h-[500px]">
                            <Card className="h-full">
                            <CardContent className="h-full w-full bg-[#E5E4DF] flex justify-center items-center ">
                                <div className='w-[56%] flex justify-center gap-10 flex-col items-center text-center'>
                                    <span className='text-5xl'>Client Testimonials</span>
                                    <span className='text-[1.125rem] tracking-wide leading-relaxed'>"Impressed with the stylish collections and range of options available. The team provided invaluable guidance throughout the selection process. I'm absolutely delighted with the custom curtains for my new home. Highly recommend Snug for their expertise and quality."</span>
                                    <span className='text-xl font-semibold'>Vinod</span>
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={2} className="h-full">
                        <div className="p-2 h-[500px]">
                            <Card className="h-full">
                            <CardContent className="h-full w-full bg-[#E5E4DF] flex justify-center items-center ">
                                <div className='w-[56%] flex justify-center gap-10 flex-col items-center text-center'>
                                    <span className='text-5xl'>Client Testimonials</span>
                                    <span className='text-[1.125rem] tracking-wide leading-relaxed'>"Outstanding experience working with Snug. They quickly understood our style preferences and suggested perfect wallpaper solutions. Their rich knowledge of design and flawless execution made all the difference. Truly professional service."</span>
                                    <span className='text-xl font-semibold'>Shreenath</span>
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={3} className="h-full">
                        <div className="p-2 h-[500px]">
                            <Card className="h-full">
                            <CardContent className="h-full w-full bg-[#E5E4DF] flex justify-center items-center ">
                                <div className='w-[56%] flex justify-center gap-10 flex-col items-center text-center'>
                                    <span className='text-5xl'>Client Testimonials</span>
                                    <span className='text-[1.125rem] tracking-wide leading-relaxed'>"Prompt, professional, and reliable service. Snug delivered exactly on time and exceeded our expectations with the quality of curtains and blinds. Despite the distance, they maintained excellent communication and professionalism throughout."</span>
                                    <span className='text-xl font-semibold'>Vikyhat</span>
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={4} className="h-full">
                        <div className="p-2 h-[500px]">
                            <Card className="h-full">
                            <CardContent className="h-full w-full bg-[#E5E4DF] flex justify-center items-center ">
                                <div className='w-[56%] flex justify-center gap-10 flex-col items-center text-center'>
                                    <span className='text-5xl'>Client Testimonials</span>
                                    <span className='text-[1.125rem] tracking-wide leading-relaxed'>"Excellent experience with Snug. Professional work delivered within promised timelines without any follow-up needed. The vast selection of curtains and wallpapers caters to every requirement. The entire process was hassle-free from selection to installation."</span>
                                    <span className='text-xl font-semibold'>Anjana</span>
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

            {/* Progress Bars (independent from carousel) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-2 items-center justify-center bottom-20">
                {progressValues.map((value, index) => (
                <div
                    key={index}
                    className="relative bg-gray-300 rounded-full overflow-hidden w-[25px] h-[4px]"
                >
                    <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-[50ms] ease-linear"
                    style={{ width: `${value}%` }}
                    />
                </div>
                ))}
            </div>
        </div>
    )
}
