import { JSX, ReactNode } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import Head from 'next/head'

type Props = {
	children: ReactNode
}

export default function AppLayout({ children }: Props): JSX.Element {
	return (
		<>
			<Head>
				<title>The Healing Loft - Spa and Massage</title>
				<meta name='title' content='The Healing Loft - Spa and Massage' />
				<meta
					name='description'
					content='Revitalize your body and recharge you energy with a high-quality Spa & Massage treatment'
				/>
				<meta name='keywords' content='massage, near, serangoon' />
			</Head>
			<Navbar />
			<div>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSJ62HLN"
					height="0" width="0" style="display:none;visibility:hidden"></iframe>	
					`,
					}}
				></noscript>
				{children}
			</div>
			<Footer />
		</>
	)
}
