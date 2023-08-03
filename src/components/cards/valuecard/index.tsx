import { ValueType } from '@/types/global'
import { JSX } from 'react'
import RevisitSVG from '@/assets/svg/revisit.svg'
import AttitudeSVG from '@/assets/svg/attitude.svg'
import CleanSVG from '@/assets/svg/clean.svg'
import TwoinSVG from '@/assets/svg/twoin.svg'
import Image from 'next/image'

export default function ValueCard(): JSX.Element {
	const valueData = [
		{
			image: RevisitSVG,
			title: 'Revisit Friendly',
			desc: 'The Healing Loft is a place for revisit because the management cares about the services to provide the best experience for our customers',
		},
		{
			image: AttitudeSVG,
			title: 'Attitude Is A Must',
			desc: 'The Healing Loft Staffs have a good attitude to delivering our services with the utmost professionalism and expertise',
		},
		{
			image: CleanSVG,
			title: 'Clean & Hygiene',
			desc: 'The Healing Loft is always provide a private luxury and exclusive space that safe and comfort to leave you total relaxation and enjoy experience',
		},
		{
			image: TwoinSVG,
			title: 'Two-In-One',
			desc: 'Massage and Wellness. We’ll provide you a Spa & Massage that prioritize your well-being. Experience the benefits of wellness through the relaxation and rejuvenation methods',
		},
	]
	return (
		<div className='mb-8 grid gap-x-4 gap-y-8 md:grid-cols-2 lg:mb-24 lg:grid-cols-4'>
			{valueData.map((value: ValueType, index: number) => (
				<div
					key={index}
					className='flex flex-col items-center justify-center gap-y-4 rounded-2xl border bg-primary/10 p-8 text-center shadow duration-150 hover:-translate-y-4 hover:shadow'
				>
					<div className='flex aspect-video h-2/5 w-full flex-col items-center justify-end gap-y-2'>
						<Image
							width={value.image.width}
							height={value.image.height}
							src={value.image.src}
							alt={value.title}
						/>
						<h2 className='text-2xl'>{value.title}</h2>
					</div>
					<h3 className='h-3/5 text-lg'>{value.desc}</h3>
				</div>
			))}
		</div>
	)
}
