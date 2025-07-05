import { TherapistsType } from '@/types/global'
import { JSX } from 'react'


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
                "Aromatherapy",
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
            "desc": "Hello, I am Julie from Hebei, China. Although I have only been engaged in massage for a short time, I am willing to continue to learn. I want to use massage skills to exchange beauty with you, help sub-healthy people in need, and use hands as a medium to convey health and warmth!",
            "expertise": [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatherapy",
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
                "Aromatherapy"
            ],

        },
        // {
        //     image: NicoleImage,
        //     name: 'Nicole',
        //     ethnicity: 'Thai',
        //     "desc": "I am peaceful, casual, and love sports and nature. I have 13 years of massage experience. The massage techniques I provide release tension and stress in a safe and nourishing space, allowing you to deeply relax your body and mind.",
        //     "expertise": [
        //         "Ancient acupressure",
        //         "THL",
        //         "Thai yoga",
        //         "Aromatherapy",
        //         "Foot bath",
        //         "Pregnancy massage",
        //         "Facial care"
        //       ]
        // },
        {
            image: JennyImage,
            name: 'Jenny',
            ethnicity: 'Chinese',
            "desc": "I am warm and friendly, and I pay attention to hygiene and safety. I will provide a personalized massage plan based on your physical condition to ensure that you can get an effective massage experience",
            "expertise": [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatherapy",
                "Foot bath",
                "Ear cleaning",
                "Facial care"
            ]
        },

        // {
        //     image: SandyImage,
        //     name: 'Sandy',
        //     ethnicity: 'Chinese',
        //     desc: "I am as quiet as a virgin and as fast as a rabbit. I am a professional and experienced masseur. I just want to convey my personal experience to more people through my hands.",
        //     expertise: [
        //         "Ancient acupressure",
        //         "Aromatherapy",
        //         "Foot bath",
        //         "Ear cleaning"
        //     ]
        // },
        {
            image: AngelImage,
            name: 'Angel',
            ethnicity: 'Thai',
            desc: "I am quiet, introverted, and serious about my work. I have good time management skills, and I can arouse your awareness of your body and inner feelings through focused, stable, flowing, and in-depth techniques.",
            expertise: [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatherapy",
                "Foot bath",
                "Facial care",
                "Pregnancy massage"
            ]
        },
        // {
        //     image: ClaireImage,
        //     name: 'Claire',
        //     ethnicity: 'Chinese',
        //     desc: "I am enthusiastic, polite, diligent, studious and sincere. I will listen carefully to customer feedback and suggestions to continuously improve my service and technical level.",
        //     expertise: [
        //         "Ancient acupressure",
        //         "Aromatherapy",
        //         "Foot bath"
        //     ]
        // },
        {
            image: DorisImage,
            name: 'Doris',
            ethnicity: 'Chinese',
            desc: "I am Doris. I am gentle, considerate, approachable, careful and meticulous in my work. My service concept is customer-centric, focusing on customer needs and experience.",
            expertise: [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatherapy",
                "Foot bath",
                "Ear cleaning"
            ]
        },
        {
            image: kimiImage,
            name: 'Kimi',
            ethnicity: 'Chinese',
            desc: "Hi, I'm Kimi. I'm good at communication, responsible, sincere, cheerful, lively, friendly, and passionate about the world and myself. I'm willing to convey emotions with my hands and connect with people in the most simple way. Throughout the massage therapy, I will let you meet your body again, and also let you meet your inner self again.",
            expertise: [
                "Ancient acupressure",
                "THL",
                "Thai yoga",
                "Aromatherapy",
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
                "Aromatherapy",
                "Foot Spa"
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
