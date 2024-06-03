import { JSX, useEffect, useRef, useContext, useState } from 'react'
import Image from 'next/image'
import Banner from '@/assets/banner.webp'
import BannerMobile from '@/assets/banner-mobile.webp'
import AboutImage from '@/assets/about-image.webp'
import ThreeLeaves from '@/assets/svg/three-leaves.svg'
import ThreeLeavesBg from '@/assets/svg/three-leaves-bg.svg'
import Loader from '@/assets/svg/loader.svg'
import Treatment from '@/components/cards/treatmentcard'
import { useIntersectionObserver } from 'usehooks-ts'
import { useMediaQuery } from 'usehooks-ts'
import { reviewData } from '@/db/values'
import { Review } from '@/types/global'
import Galleries from '@/components/galleries'
import ReviewCard from '@/components/cards/reviewcard'
import AppLayout from '@/components/layout'
import { NavContext } from '@/context/NavContext'
import ValueCard from '@/components/cards/valuecard'

export default function Home(): JSX.Element {
  // states
  const [isYoutubeShow, setIsYoutubeShow] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(true)

  // refs
  const videoRef = useRef<HTMLDivElement | null>(null)
  const serviceRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  // context
  const { setCurrentNav } = useContext(NavContext)

  // use media query
  const isMobile = useMediaQuery('(max-width: 768px)')

  // intersection observer video
  const entry = useIntersectionObserver(videoRef, {})
  const isVisible = entry?.isIntersecting

  // intersection observer navigation
  const serviceEntry = useIntersectionObserver(serviceRef, {
    threshold: 0.3,
  })
  const aboutEntry = useIntersectionObserver(aboutRef, {
    rootMargin: '-150px',
  })
  const contactEntry = useIntersectionObserver(contactRef, { threshold: 0 })

  const isServiceEntry = serviceEntry?.isIntersecting
  const isAboutEntry = aboutEntry?.isIntersecting
  const isContactEntry = contactEntry?.isIntersecting

  // useEffect
  useEffect(() => {
    if (isVisible) setIsYoutubeShow(true)

    if (!isServiceEntry && !isAboutEntry && !isContactEntry) {
      setCurrentNav('#home')
    }

    if (isServiceEntry && !isAboutEntry) {
      setCurrentNav('#service')
    }

    if (isAboutEntry && !isServiceEntry) {
      setCurrentNav('#about')
    }

    if (isContactEntry && !isAboutEntry) {
      setCurrentNav('#contact')
    }
  }, [isVisible, isServiceEntry, isAboutEntry, isContactEntry])

  return (
    <AppLayout>
      <main className='flex flex-col items-center justify-between'>
        {/* banner */}
        <div id='home' className='container relative min-h-[75vh] px-8 pb-8 pt-24 lg:py-28'>
          <Image
            priority
            src={Banner}
            alt='desktop-banner'
            className='hidden min-h-[75vh] w-full rounded-2xl object-cover lg:block'
          />

          <Image
            priority
            src={BannerMobile}
            alt='mobile-banner'
            className='min-h-[75vh] w-full rounded-2xl object-cover lg:hidden'
          />

          <div className='absolute inset-0 flex flex-col items-center justify-center gap-y-8 p-16 text-center text-white'>
            <h1 className='max-w-4xl text-3xl font-semibold leading-snug lg:text-6xl'>
              WE&apos;LL PAMPER YOU FROM HEAD-TO-TOE
            </h1>

            <h2 className='max-w-2xl text-lg font-medium uppercase'>
              Revitalize your body and mind after a long, tiring day. <br /> You deserve some relaxation
            </h2>

            <a
              href='#contact'
              type='button'
              className='c-button-primary mt-8 rounded-2xl bg-white px-6 py-4 text-xl font-bold text-primary'
            >
              Rejuvenate Me
            </a>
          </div>
        </div>

        {/* service ref */}
        <div className='w-full' ref={serviceRef}>
          {/* experience section*/}
          <div className='container relative p-8'>
            <div className='absolute -top-4 xl:-top-8 2xl:-top-24' id='service'></div>

            <div className='flex flex-col items-center text-center'>
              <h3 className='mb-4 italic text-tertiary lg:text-xl'>– Experience the luxurious treatments</h3>

              <h2 className='mb-6 text-2xl font-semibold text-primary lg:text-4xl'>
                SAY GOODBYE TO STRESS AND TENSION
              </h2>

              <h3 className='mb-8 max-w-2xl lg:text-lg'>
                Soothe away any tiring, muscle stiffness, or discomfort zone on your body then embrace the relaxation
                and rejuvination for your body, mind, and soul with our expert therapists
              </h3>

              <a
                href='#contact'
                type='button'
                className='c-button-primary bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] px-12 text-xl text-primary'
              >
                Book Now
              </a>
            </div>
          </div>

          {/* treatments section */}
          <div className='container p-8'>
            <Treatment />
          </div>

          {/* offer section */}
          <div className='w-full bg-[url("/images/offer-section-bg.webp")]'>
            <div className='flex flex-col items-center py-12 text-center'>
              <div className='container p-8 text-white'>
                <h3 className='mb-4 font-medium italic text-secondary lg:text-xl'>
                  – Experience the luxurious treatments
                </h3>

                <h2 className='mb-6 text-2xl font-semibold lg:text-4xl'>{new Date().getFullYear()} EXCLUSIVE OFFER</h2>

                <h3 className='mx-auto mb-8 max-w-2xl lg:text-lg'>
                  Soothe away any tiring, muscle stiffness, or discomfort zone on your body then embrace the relaxation
                  and rejuvination for your body, mind, and soul with our expert therapists
                </h3>
              </div>

              <div className='container px-8 pb-8 2xl:py-16 flex flex-col md:flex-row gap-y-8 md:gap-x-16 xl:gap-x-16 xl:px-32 2xl:px-44 2xl:gap-x-32'>
                {/* offer card */}
                <div className='w-full 2xl:scale-110'>
                  <div className='rounded-t-2xl bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] w-full p-8 text-black'>
                    <h3 className='mb-8 text-sm font-semibold lg:text-xl'>SPECIAL OFFER ON</h3>

                    <h3 className='text-2xl font-semibold lg:text-4xl'>
                      Aromatherapy <br /> 心靈香薰
                    </h3>
                  </div>

                  <div className='rounded-b-2xl bg-white px-12 2xl:px-26 py-16'>
                    <div className='text-center'>
                      <span className='text-7xl font-bold lg:text-8xl'>$15</span>

                      <span className='font-semibold text-4xl'>&nbsp;OFF</span>

                      <p className='font-medium text-2xl lg:text-3xl mt-1.5'>(9am - 4pm)</p>
                    </div>

                    <div className='mt-14 mb-2 w-full text-center'>
                      <a
                        id='whatsapp-cta-2'
                        href='https://api.whatsapp.com/send/?phone=6591444649&text=Hi%2C+I+would+like+to+make+a+reservation+for+Aromatherapy.+Name+%3A+Email+%3A+Date+%3A+Time+%3A&type=phone_number&app_absent=0'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='c-button-primary bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] px-8 py-4 text-xl text-primary lg:px-28'
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* offer card */}
                <div className='w-full 2xl:scale-110'>
                  <div className='rounded-t-2xl bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] w-full p-8 text-black'>
                    <h3 className='mb-8 text-sm font-semibold lg:text-xl'>SPECIAL OFFER ON</h3>

                    <h3 className='text-2xl font-semibold lg:text-4xl'>
                      Ancient Acupressure
                      <br /> 古法指壓
                    </h3>
                  </div>

                  <div className='rounded-b-2xl bg-white px-12 2xl:px-26 py-16'>
                    <div className='text-center'>
                      <span className='text-7xl font-bold lg:text-8xl'>$49</span>

                      <p className='font-medium text-2xl lg:text-3xl mt-1.5'>for 1 hour</p>
                    </div>

                    <div className='mt-14 mb-2 w-full text-center'>
                      <a
                        id='whatsapp-cta-2'
                        href='https://api.whatsapp.com/send/?phone=6591444649&text=Hi%2C+I+would+like+to+make+a+reservation+for+Ancient+Acupressure.+Name+%3A+Email+%3A+Date+%3A+Time+%3A&type=phone_number&app_absent=0'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='c-button-primary bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] px-8 py-4 text-xl text-primary lg:px-28'
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* about ref */}
        <div className='w-full' ref={aboutRef}>
          {/* about section */}
          <div className='container relative p-8'>
            <div className='absolute top-4' id='about'></div>

            <div className='flex flex-col justify-center gap-y-4 py-8 text-center lg:flex-row lg:items-center lg:justify-between'>
              <div className='flex flex-col gap-4 lg:text-left'>
                <h3 className='font-medium italic text-tertiary lg:text-xl'>– Step into our world</h3>

                <h2 className='text-2xl font-semibold lg:text-4xl'>ABOUT US</h2>

                <h3 className='max-w-2xl leading-loose lg:text-lg'>
                  The Healing Loft is in the heartland of Serangoon Garden, Singapore. We provide a safe and clean
                  environment, good massages, at reasonable prices to make our customer satisfied. We also committed to
                  make our Customer&apos;s wellness to be our top priority by providing various services such as
                  Aromatherapy, Ancient Acupressure Treatment, and Signature THL Treatment with our expert therapists
                </h3>
              </div>

              <Image className='mt-4 object-contain object-right lg:h-[520px]' src={AboutImage} alt='image' />
            </div>
          </div>

          {/* values */}
          <div className='container p-8'>
            <div className='flex flex-col justify-center gap-y-4 py-8 text-center lg:flex-row lg:items-center'>
              <div className='flex flex-col gap-4'>
                <h3 className='font-medium italic text-tertiary lg:text-xl'>– Browse our values</h3>

                <h2 className='text-2xl font-semibold text-primary lg:text-4xl'>DISCOVER WHY WE ARE DIFFERENT</h2>

                <h3 className='leading-loose lg:text-lg'>
                  In search of a blissful escape to recharge your spirit? <br className='hidden lg:block' />
                  We&apos;ve got just what you need.
                </h3>

                <div className='my-4 w-full text-center'>
                  <a
                    href='#contact'
                    type='button'
                    className='c-button-primary bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] px-8 py-4 text-lg text-primary'
                  >
                    Start My Enjoyment
                  </a>
                </div>
              </div>
            </div>

            {/* card */}
            <div>
              <ValueCard />
            </div>
          </div>

          {/* video section */}
          <div ref={videoRef} className={`p-8 lg:p-0 -mt-8 lg:min-h-screen w-full`}>
            {isYoutubeShow && (
              <div className=''>
                {isLoading && (
                  <div className='flex justify-center w-full'>
                    <Image src={Loader} alt='loading...' />
                  </div>
                )}
                <iframe
                  onLoad={() => setIsloading(false)}
                  className={`${isMobile ? 'rounded-2xl' : ''} ${
                    isLoading ? 'scale-0' : 'lg:scale-100'
                  } aspect-video min-w-full duration-500`}
                  src='https://www.youtube.com/embed/ze9i4z1A81E'
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* galleries section*/}
          <div className='w-full'>
            <div className='container flex flex-col gap-4 p-8 text-center'>
              <h3 className='font-medium italic text-tertiary lg:text-xl'>– Immerse yourself in</h3>

              <h2 className='text-2xl font-semibold text-primary lg:text-4xl'>
                PICTURE THE VIBES YOU&apos;LL <br className='hidden lg:block' />
                ENCOUNTER
              </h2>

              <h3 className='leading-loose lg:text-lg'>
                This is a glimpse of the atmosphere that exactly you&apos;ll experience here. Immerse yourself in the
                mood that awaits you
              </h3>
            </div>

            {/* galleries */}
            <div className='container p-8'>
              <Galleries />
            </div>
          </div>

          {/* reviews section */}
          <div className="w-full bg-[url('/images/reviews-bg.webp')] bg-cover bg-center bg-no-repeat">
            <div className='container px-8 py-12 lg:py-24'>
              <div className='mb-12 flex flex-col gap-4 text-center lg:mb-24'>
                <h3 className='font-medium italic text-secondary lg:text-xl'>– This might convince you</h3>

                <h2 className='text-2xl font-semibold text-white lg:text-4xl'>WHAT THEY SAY ABOUT US</h2>
              </div>

              {/* reviews */}
              <div className='mt-8 gap-x-8 space-y-8 lg:columns-2'>
                {reviewData.map((review: Review, index: number) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>

              <div className='mt-10 w-full text-center lg:mt-20'>
                <a
                  href='https://www.google.com/search?q=the+healing+loft&oq=the+hea&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCEEUYOTIGCAMQRRg7MgoIBBAuGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTA1NWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x31da16ff00000001:0xea1d62f334036a92,1,,,,'
                  target='_blank'
                  type='button'
                  className='c-button-primary bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] px-8 py-4 text-lg font-extrabold text-primary'
                >
                  See All Reviews
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* appointment section */}
        <div
          ref={contactRef}
          className='w-full flex flex-col lg:flex-row lg:gap-x-8 relative px-8 pt-12 pb-20 lg:pb-12 overflow-hidden'
        >
          <div className='absolute -top-20' id='contact'></div>

          {/* background */}
          <div className=''>
            <Image
              className='w-80 absolute -top-44 -left-40 lg:w-96 lg:scale-150 lg:top-80 lg:left-40 2xl:top-96 2xl:left-80'
              src={ThreeLeavesBg}
              alt='three-leaves-image'
            />

            <Image
              className='w-96 scale-150 absolute -bottom-40 -right-32 lg:scale-125 lg:-right-44'
              src={ThreeLeavesBg}
              alt='three-leaves-image'
            />
          </div>

          <div className='w-full flex flex-col lg:flex-row gap-x-8 gap-y-28 container lg:p-8'>
            <div className='w-full flex flex-col items-center justify-center gap-y-6 lg:gap-y-2 text-center'>
              <Image className='w-24' src={ThreeLeaves} alt='three-leaves-image' />

              <h2 className='text-4xl font-semibold text-primary lg:text-7xl mb-12'>CALL US NOW</h2>

              <a
                id='whatsapp-cta'
                type='button'
                aria-label='The Healing Loft'
                href='tel:+6591444649'
                target='_blank'
                className='relative z-10 c-button-primary bg-gradient-to-t from-[#CB9E00] via-[#FDD23A] to-[#CB9E00] text-primary text-xl'
              >
                +65 9144 4649
              </a>
            </div>

            <div className='w-full'>
              <h2 className='text-4xl font-semibold mb-10 text-primary text-center lg:text-left'>THE LOCATION</h2>

              <div className='w-full relative 2xl:pr-4'>
                <iframe
                  className='aspect-square lg:aspect-auto lg:h-[450px] 2xl:h-[600px] w-full rounded-2xl'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6859375863637!2d103.8657901!3d1.365111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16ff00000001%3A0xea1d62f334036a92!2sThe%20Healing%20Loft!5e0!3m2!1sen!2sen!4v1691380665529!5m2!1sen!2sen'
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
