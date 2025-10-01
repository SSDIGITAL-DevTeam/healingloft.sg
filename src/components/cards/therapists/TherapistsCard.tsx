import { TherapistsType } from '@/types/global'
import { JSX } from 'react'

import CindyImage from '@/assets/therapists/Cindy.webp' 
import JasmineImage from '@/assets/therapists/Jasmine.webp'
import LilaImage from '@/assets/therapists/lila.webp'
// import NicoleImage from '@/assets/therapists/Nicole.webp'
import JulieImage from '@/assets/therapists/julie.webp'
import JennyImage from '@/assets/therapists/Jenny.webp'
// import SandyImage from '@/assets/therapists/Sandy.webp'
import AngelImage from '@/assets/therapists/Angel.webp'
import kimiImage from '@/assets/therapists/kimi.webp'
import DorisImage from '@/assets/therapists/Doris.webp'
// import ClaireImage from '@/assets/therapists/Claire.webp'
import YoyoImage from '@/assets/therapists/Yoyo.webp'
import RubyImage from '@/assets/therapists/ruby.webp'

export default function Treatment(): JSX.Element {
    const treatmentData = [
        {
            image: JasmineImage,
            name: 'Jasmine',
            ethnicity: 'Chinese',
            "desc": "I am gentle and grounded, with a deep understanding of the body's anatomy and acupuncture points. I can accurately locate areas of tension and relieve pain through mindful, intuitive massage. I find joy in physical connection, meaningful communication, and cultural exchange. Through touch, breath, and presence, I connect with the world in a space of calm neutrality.",
            "expertise": [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatic Healing Therapy",
                "Local physiotherapy",
                "Foot bath",
                "Pedicure",
                "Ear cleaning"
            ]
        },
        {
            image: LilaImage,
            name: 'Lila',
            ethnicity: 'Chinese',
            "desc": "I’m Lila, warm, friendly, and great at communication. I easily build strong rapport with clients. My massage style focuses on rhythmic flow, combined with pauses, gentle shaking, and targeted fascia release. I have extensive experience and have received praise from many customers. I look forward to welcoming you.",
            "expertise": [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatic Healing Therapy",
                "Foot bath"
            ]
        },
        {
            image: JulieImage,
            name: 'Julie',
            ethnicity: 'Chinese',
            "desc": "Hello, I am Julie from Hebei, China. Although I have only been engaged in massage for a short time, I am willing to continue to learn. I want to use massage skills to exchange beauty with you, help sub-healthy people in need, and use hands as a medium to convey health and warmth!",
            expertise: [
                "Ancient acupressure",
                "Foot bath",
                "Aromatic Healing Therapy",
                "Signature THL Therapy"
            ],

        },
   
        {
            image: JennyImage,
            name: 'Jenny',
            ethnicity: 'Chinese',
            "desc": "I am warm and friendly, and I pay attention to hygiene and safety. I will provide a personalized massage plan based on your physical condition to ensure that you can get an effective massage experience",
            "expertise": [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatic Healing Therapy",
                "Foot bath",
                "Ear cleaning",
                "Facial care"
            ]
        },

 
        {
            image: AngelImage,
            name: 'Angel',
            ethnicity: 'Thai',
            desc: "I am quiet, introverted, and serious about my work. I have good time management skills, and I can arouse your awareness of your body and inner feelings through focused, stable, flowing, and in-depth techniques.",
            expertise: [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatic Healing Therapy",
                "Foot bath",
                "Facial care",
                "Pregnancy massage"
            ]
        },
    
        // {
        //     image: DorisImage,
        //     name: 'Doris',
        //     ethnicity: 'Chinese',
        //     desc: "I am Doris. I am gentle, considerate, approachable, careful and meticulous in my work. My service concept is customer-centric, focusing on customer needs and experience.",
        //     expertise: [
        //         "Ancient acupressure",
        //         "THL",
        //         "Thai yoga",
        //         "Aromatic Healing Therapy",
        //         "Foot bath",
        //         "Ear cleaning"
        //     ]
        // },
        {
            image: kimiImage,
            name: 'Kimi',
            ethnicity: 'Chinese',
            desc: "Hi, I'm Kimi. I'm good at communication, responsible, sincere, cheerful, lively, friendly, and passionate about the world and myself. I'm willing to convey emotions with my hands and connect with people in the most simple way. Throughout the massage therapy, I will let you meet your body again, and also let you meet your inner self again.",
            expertise: [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatic Healing Therapy",
                "Foot bath",
                "Facial care"
            ]
        },
        {
            image: YoyoImage,
            name: 'Yoyo',
            ethnicity: 'Vietnamese',
            desc: "Hello! I’m Yoyo from Vietnam. I’ve been specializing in massage and therapeutic bodywork for 5 years. My techniques are skilled and well-balanced in pressure, effectively relieving everyday muscle tension and fatigue through professional methods. I look forward to your attention and appointment!",
            expertise: [
                "Traditional Acupressure",
                "THL",
                "Aromatic Healing Therapy",
                "Foot Spa"
            ]
        },
        {
            image: CindyImage, // pastikan kamu punya import CindyImage
            name: 'Cindy',
            ethnicity: 'Chinese',
            desc: "Hello! I’m Cindy from China, with 16 years of experience in therapeutic massage. I believe a great therapist combines three strengths: professional insight to detect hidden tension, skilled techniques to balance deep and gentle pressure, and genuine care to listen and support each client. For me, massage is more than a craft — it’s a shared journey toward natural healing and well-being. I look forward to welcoming you.",
            expertise: [
                "Localized Therapy",
                "Deep Tissue Massage",
                "Aromatic Healing Therapy",
                "Signature THL Therapy",
                "Head Spa",
                "Foot Spa"
            ]
        },
        {
            image: RubyImage, // pastikan kamu import RubyImage
            name: 'Ruby',
            ethnicity: 'Myanmar',
            desc: "Hello! I’m Ruby from Myanmar, with over 2 years of massage experience. My style is inspired by Japanese techniques, using strong and precise finger pressure. Clients have consistently praised both my skills and my attentive service. I truly love my work, and helping people relieve pain and restore vitality brings me the greatest sense of achievement. I look forward to guiding you toward a healthier and more balanced life.",
            expertise: [
                "Ancient Acupressure",
                "Thai Yoga",
                "Aromatic Healing Therapy",
                "Signature THL Therapy",
                "Foot Bath",
                "Head Massage",
                "Gua Sha"
            ]
        }
    
    ]

    return (
        <div className='mb-8 grid gap-x-14 gap-y-8 lg:mb-24 lg:grid-cols-3'>
            {treatmentData.map((treatment: TherapistsType, index: number) => (
                <div className='group relative' key={index}>
                    {/* overlay */}
                    <div className='absolute inset-0 rounded-3xl bg-primary/40 group-hover:backdrop-blur'></div>

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className=' h-full w-full rounded-3xl aspect-[3/4] lg:aspect-auto object-cover'
                        src={treatment.image.src}
                        alt={treatment.name}
                        aria-label={treatment.name}
                    />

                    <div className='group absolute inset-0 flex flex-col items-center justify-center p-8 text-white'>
                        <div className='absolute inset-x-0 bottom-5 flex flex-col items-center justify-center gap-y-4 p-4 text-center text-3xl font-semibold duration-300 group-hover:opacity-0 '>
                            <h2 className='text-[40px] font-semibold'>{treatment.name}</h2>


                            <h3 className='text-[24px] font-normal'>{treatment.ethnicity}</h3>

                        </div>
                        {/* hover content */}
                        <div className="space-y-2 lg:space-y-6 absolute inset-0 flex flex-col   bg-white opacity-0 translate-y-[-20px] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out p-8  rounded-3xl">
                            <h2 className="text-[#553A31] font-bold text-[14px] lg:text-[24px]">
                                {treatment.name + " (" + treatment.ethnicity + ")"}
                            </h2>
                            <p className="text-[#1A1A1A] text-[12px] lg:text-[16px]">{treatment.desc}</p>
                            {/* expertise     */}
                            {/* expertise */}
                            {/* expertise */}
                            <div className="flex flex-wrap gap-2 mt-4 ">
                                {treatment.expertise && treatment.expertise.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-[#553A31] text-white text-[12px] lg:text-[14px] font-semibold leading-[25px] px-4 py-1 rounded-full"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>
                </div>
            ))}
        </div>
    )
}
