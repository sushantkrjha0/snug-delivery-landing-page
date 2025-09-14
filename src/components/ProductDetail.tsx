"use client";

import { serviceProductDetails } from "@/constant";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ServiceBookingForm from "./ServiceBookingForm";

// Custom arrow components
const ChevronLeftIcon = ({ className }: { className: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export default function ProductDetail() {
const searchParams = useSearchParams();
const [selectedProductIndex, setSelectedProductIndex] = useState(0);
const [currentService, setCurrentService] = useState<string>('curtains');

useEffect(() => {
    // Get service from URL parameter, default to 'curtains'
    const service = searchParams.get('service') || 'curtains';
    const validServices = ['custom_sofa', 'curtains', 'tracks', 'blinds', 'wallpapers', 'beddings', 'upholstery', 'flooring'];
    setCurrentService(validServices.includes(service) ? service : 'curtains');
    setSelectedProductIndex(0); // Reset to first item when service changes
}, [searchParams]);

const currentProducts = serviceProductDetails[currentService as keyof typeof serviceProductDetails] || serviceProductDetails.curtains;

const nextImage = () => {
    setSelectedProductIndex((prev) => 
        prev === currentProducts.length - 1 ? 0 : prev + 1
    );
};

const prevImage = () => {
    setSelectedProductIndex((prev) => 
        prev === 0 ? currentProducts.length - 1 : prev - 1
    );
};

    return (
        <div className="flex justify-center py-6">
            <div className="container w-[90%] max-w-7xl py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-6">
                        {/* Main Image with Navigation */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={currentProducts[selectedProductIndex].img}
                                    alt={currentProducts[selectedProductIndex].title}
                                    fill
                                    className="object-cover transition-all duration-500"
                                    priority
                                />
                                
                                {/* Navigation Arrows */}
                                {currentProducts.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                                        >
                                            <ChevronLeftIcon className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                                        >
                                            <ChevronRightIcon className="w-6 h-6" />
                                        </button>
                                    </>
                                )}

                                {/* Image Counter */}
                                {currentProducts.length > 1 && (
                                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                        {selectedProductIndex + 1} / {currentProducts.length}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Horizontal Thumbnail Strip */}
                        {currentProducts.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {currentProducts.map((product, index) => (
                                    <button
                                        key={index}
                                        className={`flex-shrink-0 relative aspect-square w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                                            selectedProductIndex === index 
                                                ? 'ring-2 ring-orange-500 shadow-lg scale-105' 
                                                : 'hover:scale-105 hover:shadow-md'
                                        }`}
                                        onClick={() => setSelectedProductIndex(index)}
                                    >
                                        <Image
                                            src={product.img}
                                            alt={`${product.title} thumbnail`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                                {currentProducts[selectedProductIndex].title}
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {currentProducts[selectedProductIndex].description}
                            </p>
                        </div>

                        {/* Service Features */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                    Complimentary site assessment
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                    Professional installation
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                    Custom design consultation
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                    Quality guarantee
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <ServiceBookingForm 
                                buttonText="Get Quote"
                                buttonStyle="primary"
                            />
                            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                View Gallery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
