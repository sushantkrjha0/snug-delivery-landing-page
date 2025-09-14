import { productList } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
    return (
        <div className="w-full py-16 lg:py-24">
            <div className="w-[90%] mx-auto">
                <h2 className="text-3xl lg:text-4xl font-medium mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productList.map((product, index) => {
                        // Map product names to service parameters
                        const serviceMap: { [key: string]: string } = {
                            'Custom Sofas': 'custom_sofa',
                            'Curtains': 'curtains',
                            'Custom Curtains': 'curtains',
                            'Custom Blinds': 'blinds',
                            'Window Blinds': 'blinds', 
                            'Wallpapers': 'wallpapers',
                            'Custom Wallpapers': 'wallpapers',
                            'Beddings': 'beddings',
                            'Custom Beddings': 'beddings',
                            'Upholstery': 'upholstery',
                            'Tracks': 'tracks',
                            'Flooring': 'flooring'
                        };
                        const serviceParam = serviceMap[product.text] || 'curtains';
                        
                        return (
                        <Link 
                            href={`/indItems?service=${serviceParam}`}
                            key={index} 
                            className="group"
                        >
                            <div className="flex flex-col gap-4 bg-white overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                                <div className="aspect-square w-full bg-[#E5E4DF] overflow-hidden">
                                    {product.img ? (
                                        <Image
                                            src={product.img}
                                            alt={product.text}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[#E5E4DF]" />
                                    )}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                    {product.text}
                                </h3>
                            </div>
                        </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
