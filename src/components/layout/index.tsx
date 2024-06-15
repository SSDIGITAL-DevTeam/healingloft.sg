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
                    content='Relieve your fatigue, stress and tension through our Spa and Massage in Serangoon that pamper you head-to-toe.'
                />
                <meta
                    name='keywords'
                    content='massage in serangoon, massage serangoon garden, serangoon massage, massage near serangoon, aromatherapy couples massage, best massage in singapore'
                />
                <meta name='thumbnail' content='https://healingloft.sg/img/meta-image-healingloft.webp' />

                {/* google search meta tags*/}
                <meta itemProp='name' content='The Healing Loft - Spa and Massage' />
                <meta
                    itemProp='description'
                    content='Relieve your fatigue, stress and tension through our Spa and Massage in Serangoon that pamper you head-to-toe.'
                />
                <meta itemProp='image' content='https://healingloft.sg/img/meta-image-healingloft.webp' />

                {/* facebook meta tags */}
                <meta property='og:url' content='https://healingloft.sg' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='The Healing Loft - Spa and Massage' />
                <meta
                    property='og:description'
                    content='Relieve your fatigue, stress and tension through our Spa and Massage in Serangoon that pamper you head-to-toe.'
                />
                <meta property='og:image' content='https://healingloft.sg/img/meta-image-healingloft.webp' />

                {/* twitter meta tags */}
                <meta name='twitter:title' content='The Healing Loft - Spa and Massage' />
                <meta
                    name='twitter:description'
                    content='Revitalize your body and recharge you energy with a high-quality Spa & Massage treatment'
                />
                <meta name='twitter:image' content='https://healingloft.sg/img/meta-image-healingloft.webp' />
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
