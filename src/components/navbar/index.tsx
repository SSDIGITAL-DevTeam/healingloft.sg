import { JSX, useState, useEffect, useRef, useContext } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Logo from '@/assets/logo.webp'
import { navMenu } from '@/db/navigation'
import { NavMenu } from '@/types/global'
import { NavContext } from '@/context/NavContext'

export default function Navbar(): JSX.Element {
    // states
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [scrollTop, setScrollTop] = useState<number>(0)

    // ref
    const menuRef = useRef<HTMLUListElement | null>(null)

    // context
    const { currentNav } = useContext(NavContext)

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    useOnClickOutside(menuRef, () => setIsMenuOpen(false))

    return (
        <nav
            className={`${
                scrollTop > 0 ? 'shadow' : 'shadow-none'
            } fixed top-0 z-30 h-20 w-full bg-white duration-300 lg:h-24`}
        >
            {/* mobile nav */}
            <div className='flex h-full items-center justify-between bg-white p-8 lg:hidden'>
                <a href='/'>
                    {/* <Image src={Logo} width={36} alt='logo' /> */}
                    <img src={Logo.src} width={36} alt='logo' />
                </a>

                {/* open menu */}
                <Bars3Icon onClick={() => setIsMenuOpen(true)} className='w-8' />
            </div>

            <div
                className={`${
                    isMenuOpen ? 'h-screen bg-primary' : 'h-0 bg-primary/60'
                } absolute inset-0 overflow-hidden duration-300 lg:hidden`}
            >
                {/* close menu */}
                <XMarkIcon className='absolute right-8 top-6 w-8 text-white' onClick={() => setIsMenuOpen(false)} />
                <ul
                    ref={menuRef}
                    onClick={() => setIsMenuOpen(false)}
                    className='mt-48 flex flex-col items-center gap-y-6 text-xl font-medium text-white'
                >
                    {navMenu.map((navItem: NavMenu, index: number) => (
                        <li
                            key={index}
                            className={`${
                                // "home"=== navItem.url
                                    currentNav === navItem.url
                                    ? 'rounded-xl bg-white font-extrabold text-primary'
                                    : 'text-white'
                            } px-4 py-1.5 font-semibold`}
                        >
                            <a href={navItem.url}>
                                {navItem.name}
                               
                            </a>
                        </li>
                    ))}
                    <li className='mt-8'>
                        <a
                            href='#contact'
                            type='button'
                            className='c-button-primary rounded-2xl bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] px-8 py-4 text-primary'
                        >
                            Book Now
                        </a>
                    </li>
                </ul>
            </div>

            {/* desktop nav */}
            <div className='container px-8 py-4'>
                <div className='hidden items-center justify-between lg:flex'>
                    <a href='/'>
                        {/* <Image src={Logo} width={64} alt='logo' /> */}
                        <img src={Logo.src} width={64} alt='logo' />
                    </a>
                    <ul className='flex items-center gap-x-8 text-xl'>
                        {navMenu.map((navItem: NavMenu, index: number) => (
                            <li
                                className={`${
                                    currentNav === navItem.url
                                        ? 'border-b border-tertiary px-2 py-1 font-bold text-tertiary'
                                        : ''
                                } px-2 py-1`}
                                key={index}
                            >
                                <a href={navItem.url}>{navItem.name}</a>
                            </li>
                        ))}
                        <li className='ml-12'>
                            <a
                                href='#contact'
                                type='button'
                                className='c-button-primary rounded-2xl bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] px-8 py-2.5 text-primary'
                            >
                                Book Now
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
