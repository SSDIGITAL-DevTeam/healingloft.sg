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
	mandarin: string
	desc: string
}

export type Review = {
	color: string
	name: string
	desc: string
}
