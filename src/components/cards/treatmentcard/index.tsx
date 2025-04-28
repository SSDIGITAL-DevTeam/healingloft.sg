import { TreatmentNewType } from '@/types/global';
import { JSX } from 'react';
// import AromatherapyImage from '@/assets/aromatherapy.webp';
// import AncientImage from '@/assets/ancient-acupressure.webp';
// import SignatureImage from '@/assets/signature-treatment.webp';


import AromatherapyImage from '@/assets/treatment/aromatherapy.webp';
import AncientImage from '@/assets/treatment/ancient-acupressure.webp';
import SignatureImage from '@/assets/treatment/signature-thl-treatment.webp';
import ThaiImage from '@/assets/treatment/thai-massage.webp';
import FourHandsMassageTherapyImage from '@/assets/treatment/4-hands-massage-therapy.webp';


import AromatherapyHoverImage from '@/assets/treatment/aromatherapy-hover.webp';
import AncientHoverImage from '@/assets/treatment/ancient-acupressure-hover.webp';
import SignatureHoverImage from '@/assets/treatment/signature-thl-treatment-hover.webp';
import ThaiHoverImage from '@/assets/treatment/thai-massage-hover.webp';
import FourHandsMassageTherapyHoverImage from '@/assets/treatment/4-hands-massage-therapy-hover.webp';





export default function Treatment(): JSX.Element {
  const treatmentData: TreatmentNewType[] = [
    {
      image: AromatherapyImage,
      imageHover: AromatherapyHoverImage,
      title: 'Aromatherapy',
      desc: 'Based on the ancient acupressure technique, the essential oils extracted from aromatic plants are used as a medium to massage and fumigate the muscles and lymph with powerful and painless techniques. The essential oils enter the body through breathing and skin, relieving emotional stress, improving sleep, and enhancing physical health. It is a natural therapy that heals the body, mind, and spirit.',
    },
    {
      image: AncientImage,
      imageHover: AncientHoverImage,
      title: 'Ancient Acupressure',
      desc: "The ancient acupressure method integrates the essence of traditional Chinese medicine theory. It focuses on meridians and acupoints, and through techniques such as pulling tendons, kneading, and pressing, it can effectively and quickly relieve deep muscle tension and pain, allowing the body to relax and balance.",
    },
    {
      image: SignatureImage,
      imageHover: SignatureHoverImage,
      title: 'Signature THL Treatment',
      desc: 'The three techniques of Japanese acupressure, stretching and oil massage are used in combination. The penetration of acupressure and ligament stretching can quickly relax tense and stiff muscles and joints. Stretching can increase the contraction ability of muscles and strengthen the elasticity of ligaments, effectively avoiding complications such as muscle strain and ligament injury during exercise.',
    },
  ];

  const treatmentData2: TreatmentNewType[] = [
    {
      image: ThaiImage,
      imageHover: ThaiHoverImage,
      title: 'Thai Massage',
      desc:  "Thai massage is a gentle, stretching, passive yoga. Stay in the present moment and breathe in sync with the therapist, stretching out tense muscles and increasing the space for joint movement. Thai yoga can not only relieve fatigue, but also improve the body's flexibility. (We have professional therapists from Thailand)",
    },
    {
      image: FourHandsMassageTherapyImage,
      imageHover: FourHandsMassageTherapyHoverImage,
      title: '4 Hands Massage Therapy',
      desc: "Two professional therapists work together to relax and rejuvenate your body. Luxurious aromatherapy oils combined with the masseur's harmonious and synchronized soothing massage techniques will allow you to experience the touch of heaven!",
    },
  ];

  const TreatmentCard = ({
    treatment,
    aspectRatio = 'square',
  }: {
    treatment: TreatmentNewType;
    aspectRatio?: 'square' | 'landscape';
  }) => {
    const aspectClass =
      aspectRatio === 'square' ? 'aspect-square' : 'aspect-[16/9]';

    return (
      <div className="group relative">
        {/* Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-primary/40 group-hover:backdrop-blur"></div>

        {/* Images */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`h-full w-full rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0 ${aspectClass}`}
          src={treatment.image.src}
          alt={treatment.title}
          aria-label={treatment.title}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`absolute top-0 left-0 h-full w-full rounded-3xl object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${aspectClass}`}
          src={treatment.imageHover.src}
          alt={treatment.title}
          aria-label={treatment.title}
        />
          {/* Black hover background */}
        <div className="rounded-3xl absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>


        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white ">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 p-4 text-center text-3xl font-semibold duration-300 group-hover:opacity-0">
            <h2>{treatment.title}</h2>
          </div>
          {/* <div className="relative h-full w-full opacity-0 duration-300 group-hover:opacity-100"> */}
          <div className="relative h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* bg hover */}
            
            <p className="absolute inset-0 flex items-center justify-center text-center p-4 text-lg lg:text-xl">
              {treatment.desc}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* First Grid */}
      <div className="mb-8 grid gap-x-14 gap-y-8 lg:mb-24 lg:grid-cols-3">
        {treatmentData.map((treatment, index) => (
          <TreatmentCard key={index} treatment={treatment} />
        ))}
      </div>

      {/* Second Grid */}
      <div className="mb-8 grid gap-x-14 gap-y-8 lg:mb-24 lg:grid-cols-2">
        {treatmentData2.map((treatment, index) => (
          <TreatmentCard
            key={index}
            treatment={treatment}
            aspectRatio="landscape"
          />
        ))}
      </div>
    </div>
  );
}
