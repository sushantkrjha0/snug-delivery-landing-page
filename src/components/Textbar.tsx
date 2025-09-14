import { roboto_slab } from '@/app/fonts'

interface TextbarProps {
    texts: string[];
    bgColor?: string;
} 

const Textbar = ({ texts = [], bgColor = 'bg-white' }: TextbarProps) => {
    if (!texts || texts.length === 0) return null;

    return (
        <section className={`py-16 flex justify-center ${bgColor}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {texts.map((text, index) => (
                        <p key={index} className={`${roboto_slab.className} text-lg text-center leading-relaxed text-gray-800`}>
                            {text}
                    </p>
                ))}
            </div>
        </div>
        </section>
    )
}

export default Textbar