'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/SVGs/Logo.svg'
import lightLogo from '@/assets/SVGs/lightLogo.svg'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import light from '@/assets/images/contrast.png'
import dark from '@/assets/images/moon.png'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className='bg-header flex justify-between items-center px-6 py-4 md:px-20 lg:px-[5%]'>
            <div className='flex items-center mr-2'>
                {
                    theme === 'light' ?
                        <Image src={logo} alt="Logo" width={100} height={25} /> :
                        <Image src={lightLogo} alt="Logo" width={100} height={25} />
                }
            </div>
            <div className='hidden lg:flex items-center space-x-10 text-dark-gray'>
                <Link href="/" className="hover:font-bold">
                    Home
                </Link>
                <Link href="/service" className="hover:font-bold">
                    Service
                </Link>
                <Link href="/feature" className="hover:font-bold">
                    Feature
                </Link>
                <Link href="/product" className="hover:font-bold">
                    Product
                </Link>
                <Link href="/testimonial" className="hover:font-bold">
                    Testimonial
                </Link>
                <Link href="/faq" className="hover:font-bold">
                    FAQ
                </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4 ml-20">
                <Button variant="ghost">Login</Button>
                <Button className='px-5'>Sign up</Button>
                <div className='h-10 w-10 border pt-2 pl-[7px] rounded-md' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    {
                        theme === 'light' ?
                            <Image src={light} alt="theme" height={25} /> :
                            <Image src={dark} alt="theme" height={25} />
                    }
                </div>
            </div>
            <div className="lg:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 right-0 bg-header flex flex-col items-center space-y-4 py-4">
                    <Link href="/" className="hover:font-bold" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/service" className="hover:font-bold" onClick={() => setIsOpen(false)}>
                        Service
                    </Link>
                    <Link href="/feature" className="hover:font-bold" onClick={() => setIsOpen(false)}>
                        Feature
                    </Link>
                    <Link href="/product" className="hover:font-bold" onClick={() => setIsOpen(false)}>
                        Product
                    </Link>
                    <Link href="/testimonial" className="hover:font-bold" onClick={() => setIsOpen(false)}>
                        Testimonial
                    </Link>
                    <Link href="/faq" className="hover:font-bold" onClick={() => setIsOpen(false)}>
                        FAQ
                    </Link>
                    <div className="space-x-4">
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Login</Button>
                        <Button className='px-5' onClick={() => setIsOpen(false)}>Sign up</Button>
                    </div>
                    <div className='h-10 w-10 border pt-2 pl-[7px] rounded-md' onClick={() => {
                        setTheme(theme === 'light' ? 'dark' : 'light');
                        setIsOpen(false);
                    }}>
                        {
                            theme === 'light' ?
                                <Image src={light} alt="theme" height={25} /> :
                                <Image src={dark} alt="theme" height={25} />
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
