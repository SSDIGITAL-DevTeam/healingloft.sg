import { StaticImageData } from 'next/image'

export type NavMenu = {
	name: string
	url: string
}

export type ValueType = {
	image: StaticImageData
	title: string
	desc: string
}

export type TreatmentType = {
	image: StaticImageData
	title: string
	mandarin: string|null
	desc: string
	
}

export type TreatmentNewType = {
	image: StaticImageData
	imageHover:StaticImageData
	title: string
	desc: string
	
	
}
export type TherapistsType = {
	image: StaticImageData
	
	name: string
	ethnicity: string
	desc: string,
	expertise:string[]
}

export type Review = {
	color: string
	name: string
	desc: string
}


