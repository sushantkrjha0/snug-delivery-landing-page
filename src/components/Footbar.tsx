"use client"
import { dm_sans, roboto_slab } from '@/app/fonts';
import { footerMenu, Links } from '@/constant';
import { Copyright, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import TermsPopup from './TermsPopup'
import PrivacyPopup from './PrivacyPopup'

const Footbar = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false)
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

    return (
        <footer className='w-full bg-[#E5E4DF] pt-16 pb-8'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12'>
                    {/* Brand Section */}
                    <div className='lg:col-span-1 space-y-6'>
                        <div>
                            <Image
                                src="/snug.png"
                                width={140}
                                height={80}
                                alt="Snug Soft Furnishings"
                                className="mb-4"
                            />
                            <p className='text-gray-700 text-sm leading-relaxed max-w-xs'>
                                Creating warm, welcoming homes with love and care. We bring comfort and happiness to Bangalore families through our heartfelt soft furnishing services.
                            </p>
                        </div>
                        
                        {/* Social Media */}
                        <div className='flex gap-4'>
                            <Link 
                                href="https://www.facebook.com/snugfurnishing/?_rdr" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors' 
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook size={18} className="text-gray-600" />
                            </Link>
                            <Link 
                                href="https://www.instagram.com/snug_furnishing/?hl=en" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors' 
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={18} className="text-gray-600" />
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/lokesh-e-3456a641/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors' 
                                aria-label="Connect with us on LinkedIn"
                            >
                                <Linkedin size={18} className="text-gray-600" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-6'>
                        <h4 className='font-semibold text-lg text-[#8B4513] border-b border-[#8B4513]/20 pb-2'>Quick Links</h4>
                        <nav className='space-y-3'>
                            {Links.filter(link => link.key !== 'Admin').map((link) => (
                                <Link 
                                    key={link.key}
                                    href={link.href}
                                    className='block text-gray-700 hover:text-[#8B4513] transition-colors duration-200'
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* Addresses */}
                        <div className='space-y-6'>
                            <h4 className='font-semibold text-lg text-[#8B4513] border-b border-[#8B4513]/20 pb-2 flex items-center gap-2'>
                                <MapPin size={18} />
                                Our Locations
                            </h4>
                            <div className='space-y-4'>
                                <Link 
                                    href="https://maps.app.goo.gl/kLyzYopyMtfUQqir6?g_st=iw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='block text-sm text-gray-700 hover:text-[#8B4513] transition-colors cursor-pointer group'
                                >
                                    <p className="font-medium mb-1 group-hover:underline">Jayanagar Showroom</p>
                                    <p>291/A, 34th cross, 9th main,</p>
                                    <p>Jayanagar 4th block,</p>
                                    <p>Bangalore-560011</p>
                                </Link>
                                <Link 
                                    href="https://maps.app.goo.gl/kLyzYopyMtfUQqir6?g_st=iw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='block text-sm text-gray-700 hover:text-[#8B4513] transition-colors cursor-pointer group'
                                >
                                    <p className="font-medium mb-1 group-hover:underline">HBR Layout Office</p>
                                    <p>1807, AR Enclave,</p>
                                    <p>5th block, 1st phase, HBR Layout,</p>
                                    <p>Bangalore-560043</p>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className='space-y-6'>
                            <h4 className='font-semibold text-lg text-[#8B4513] border-b border-[#8B4513]/20 pb-2'>Get in Touch</h4>
                            
                            {/* Email */}
                            <div className='space-y-2'>
                                <div className='flex items-center gap-2 text-[#8B4513] font-medium'>
                                    <Mail size={16} />
                                    <span className="text-sm">Email</span>
                                </div>
                                <div className='space-y-1 text-sm text-gray-700 ml-6'>
                                    <p>Snugfurnishing@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='space-y-2'>
                                <div className='flex items-center gap-2 text-[#8B4513] font-medium'>
                                    <Phone size={16} />
                                    <span className="text-sm">Call / WhatsApp</span>
                                </div>
                                <div className='space-y-1 text-sm text-gray-700 ml-6'>
                                    <p>+91 95389 53904</p>
                                    <p className="text-xs text-gray-500">Mon-Sat: 11:00am - 7:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-300 pt-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-sm text-gray-500'>
                            © 2024 Snug Soft Furnishings. All rights reserved.
                        </p>
                        <div className='flex gap-6 text-sm'>
                            <button 
                                onClick={() => setIsPrivacyOpen(true)}
                                className='text-gray-500 hover:text-[#8B4513] transition-colors cursor-pointer'
                            >
                                Privacy Policy
                            </button>
                            <button 
                                onClick={() => setIsTermsOpen(true)}
                                className='text-gray-500 hover:text-[#8B4513] transition-colors cursor-pointer'
                            >
                                Terms & Conditions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PrivacyPopup 
                isOpen={isPrivacyOpen} 
                onClose={() => setIsPrivacyOpen(false)} 
            />
            <TermsPopup 
                isOpen={isTermsOpen} 
                onClose={() => setIsTermsOpen(false)} 
            />
        </footer>
    )
}

export default Footbar