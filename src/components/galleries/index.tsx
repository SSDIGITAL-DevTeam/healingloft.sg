import { JSX, useState } from 'react'
import Gallery1 from '@/assets/11.webp'
import Gallery2 from '@/assets/12.webp'
import Gallery3 from '@/assets/13.webp'
import Gallery4 from '@/assets/14.webp'
import Gallery5 from '@/assets/15.webp'
import Gallery6 from '@/assets/16.webp'
import Gallery7 from '@/assets/17.webp'
import Gallery8 from '@/assets/18.webp'
import FsLightbox from 'fslightbox-react'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid'

export default function Galleries(): JSX.Element {
    const [toggler, setToggler] = useState<boolean>(false)
    const [imageIndex, setImageIndex] = useState<number>(0)

    const galleries = [
        Gallery2.src,
        Gallery3.src,
        Gallery1.src,
        Gallery6.src,
        Gallery4.src,
        Gallery7.src,
        Gallery8.src,
        Gallery5.src,
    ]

    return (
        <div>
            <div className='columns-2 space-y-4 lg:columns-4'>
                {galleries.map((gallery: any, index: number) => (
                    <div key={index} className='group relative'>
                        <div
                            className='absolute inset-0 flex cursor-pointer items-center justify-center rounded-2xl duration-200 hover:bg-white/60'
                            onClick={() => {
                                setToggler(!toggler)
                                setImageIndex(index)
                            }}
                        >
                            <ArrowsPointingOutIcon className='w-8 text-primary opacity-0 duration-200 group-hover:opacity-100' />
                        </div>

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className='break-inside-avoid rounded-2xl hover:cursor-pointer'
                            src={gallery}
                            alt='interior'
                            loading='lazy'
                        />
                    </div>
                ))}
            </div>
            <FsLightbox
                toggler={toggler}
                sources={galleries}
                sourceIndex={imageIndex}
                types={...new Array(galleries.length).fill('image')}
            />
        </div>
    )
}
