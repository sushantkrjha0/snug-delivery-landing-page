"use client"
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constant'
import { Search } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <nav className='w-full flex justify-center'>
            <div className='navbar w-[94.5%] flex items-center justify-between'>
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/snug.png"
                        width={160}
                        height={91.92}
                        alt="Snug Logo" 
                    />
                </Link>
                <div className="flex-grow flex justify-center">
                    <ul className="xl:flex hidden text-small gap-7">
                        {navLinks.map((link) => (
                            <li key={link.text}>
                                <Link href={link.href} className="p-3 rounded-md hover:text-primary transition-colors text-[1.125rem] font-neue-regrade">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-shrink-0 w-[160px]"></div>
            </div>
        </nav>
    )
}

export default Navbar