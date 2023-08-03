import Image from 'next/image'
import { JSX, useEffect, useState } from 'react'
import Logo from '@/assets/logo.webp'
import WhatsappSvg from '@/assets/svg/whatsapp.svg'
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid'
import { navMenu } from '@/db/navigation'
import { NavMenu } from '@/types/global'

export default function Footer(): JSX.Element {
	// state
	const [scrollTop, setScrollTop] = useState<number>(0)

	// useeffect
	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
	}, [])

	return (
		<footer className='bg-primary/25 text-primary'>
			<div className='container p-4'>
				<div className='flex flex-col items-center gap-y-6 p-8'>
					<Image src={Logo} className='w-16' alt='logo' />
					<p className='text-2xl lg:text-4xl font-semibold lg:mb-8'>The Healing Loft</p>
					<ul className='flex w-max gap-x-4 lg:gap-x-16 lg:text-xl font-medium'>
						{navMenu.map((navItem: NavMenu, index: number) => (
							<li key={index}>
								<a aria-label={navItem.name} href={navItem.url}>
									{navItem.name}
								</a>
							</li>
						))}
					</ul>
					<ul className='mt-2 flex w-max font-medium flex-col items-center gap-y-4 lg:flex-row lg:justify-center lg:gap-x-16'>
						<li className='flex gap-x-2 rounded-xl px-4 py-1.5 duration-150 hover:bg-primary hover:text-secondary'>
							<MapPinIcon className='w-4' />
							<a
								aria-label='address'
								href='https://www.google.com/maps/place/The+Healing+Loft/@1.365111,103.8636014,17z/data=!3m1!4b1!4m6!3m5!1s0x31da16ff00000001:0xea1d62f334036a92!8m2!3d1.365111!4d103.8657901!16s%2Fg%2F11mwbxdklr?entry=ttu'
								target='_blank'
							>
								<address className='lg:text-xl' style={{ fontStyle: 'normal' }}>
									18 Maju Ave, Singapura 556693
								</address>
							</a>
						</li>
						<li className='flex gap-x-2 rounded-xl px-4 py-1.5 lg:text-xl duration-150 hover:bg-primary hover:text-secondary'>
							<PhoneIcon className='w-4' />
							<a href='tel:+65 9144 4649'>+65 9144 4649</a>
						</li>
						<li className='flex gap-x-2 lg:text-xl rounded-xl px-4 py-1.5 duration-150 hover:bg-primary hover:text-secondary'>
							<ClockIcon className='w-4' />
							<time>Mon - Sun : 09.00 am - 22.30 pm</time>
						</li>
					</ul>
				</div>
			</div>
			<div className='h-16 border-t border-primary/25 p-2 text-center'>
				<p className='lg:text-lg'>
					Copyright © 2023 The Healing Loft. <br />
					All Rights Reserved.
				</p>
			</div>

			{/* whatsapp */}
			<div>
				<a
					id='whatsapp-cta'
					aria-label='The Healing Loft'
					href='https://api.whatsapp.com/send?phone=6591444649&text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation.%0AName%20%09%3A%0AEmail%20%09%3A%0ADate%09%3A%0ATime%09%3A'
					target='_blank'
					className={`${
						scrollTop > 0 ? 'scale-100' : 'scale-0'
					} fixed bottom-6 right-4 lg:right-6 rounded-full border bg-[#25d366] px-3 py-2.5 lg:p-4 lg:py-2 text-white shadow-lg duration-200 hover:scale-105 hover:bg-[#075e54] hover:text-white`}
				>
					<div className='flex items-center gap-x-2 font-semibold'>
						<Image src={WhatsappSvg} width={28} height={28} alt='WhatsApp' />
						<span className='hidden lg:inline'>Book Via WhatsApp</span>
					</div>
				</a>
			</div>
		</footer>
	)
}
