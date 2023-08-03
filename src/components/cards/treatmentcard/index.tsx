import { TreatmentType } from '@/types/global'
import { JSX } from 'react'
import AromatherapyImage from '@/assets/aromatherapy.webp'
import AncientImage from '@/assets/ancient-acupressure.webp'
import SignatureImage from '@/assets/signature-treatment.webp'

export default function Treatment(): JSX.Element {
	const treatmentData = [
		{
			image: AromatherapyImage,
			title: 'Aromatherapy',
			mandarin: '心靈香薰',
			desc: 'The top-rated essential oils will be used by our therapists to take you on a sensory trip that will soothe away any stress and tension and promote a deep sense of peace for you',
		},
		{
			image: AncientImage,
			title: 'Ancient Acupressure',
			mandarin: '古法指壓',
			desc: "By applying pressure to certain sites and meridians, an old Asian therapy method can reduce pain. This treatment will activate your body's innate recovery ability, allowing you to get back to your normal and comfortable condition",
		},
		{
			image: SignatureImage,
			title: 'Signature THL Treatment',
			mandarin: 'THL 三合一理療法 <br/>（指壓，油壓，拉筋)',
			desc: 'Refresh and relax your body, mind & soul with THL three-in-one spa & massage (shiatsu, oil pressure, stretching)',
		},
	]

	return (
		<div className='mb-8 grid gap-x-14 gap-y-8 lg:mb-24 lg:grid-cols-3'>
			{treatmentData.map((treatment: TreatmentType, index: number) => (
				<div className='relative' key={index}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className='h-full w-full rounded-3xl'
						src={treatment.image.src}
						alt={treatment.title}
						aria-label={treatment.title}
					/>
					<div className='group absolute inset-0 flex flex-col items-center justify-center p-8 text-white'>
						<div className='absolute inset-0 flex flex-col items-center justify-center gap-y-4 p-4 text-center text-3xl font-semibold duration-300 group-hover:opacity-0 '>
							<h2>{treatment.title}</h2>
							<h3 dangerouslySetInnerHTML={{ __html: treatment.mandarin }}></h3>
							{/* <h2>{treatment.mandarin}</h2> */}
						</div>
						<p className='text-center lg:text-xl opacity-0 duration-300 group-hover:opacity-100'>
							{treatment.desc}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
