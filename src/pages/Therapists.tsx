import React, { RefObject } from 'react'

function Therapists({therapistsRef}: {therapistsRef: RefObject<HTMLDivElement>}) {
  return (
    <div className='w-full' ref={therapistsRef}>
    {/* experience section */}
        <div className='container relative p-8'>
            <div className='absolute top-4' id='therapists'></div>
            {/* Konten di sini */}

            <div className='flex flex-col items-center text-center'>
                <h3 className='mb-4 italic text-tertiary lg:text-xl'>
                    – Meet Our Healing Hands
                </h3>

                <h2 className='mb-6 text-2xl font-semibold text-primary lg:text-4xl'>
                    OUR THERAPISTS
                </h2>

                <h3 className='mb-8 max-w-2xl lg:text-lg'>
                    Let our skilled therapists melt away your stress, ease muscle tension, and restore balance to your body and mind. With personalized touch and deep expertise, they’ll guide you to a state of pure relaxation and renewal.

                </h3>

                <a
                    href='#contact'
                    type='button'
                    className='c-button-primary  bg-[#F6D5AA] text-[#4B2317]  px-12 text-xl '
                >
                    Your wellness journey starts here
                </a>
            </div>
        </div>
    </div>

  )
}

export default Therapists