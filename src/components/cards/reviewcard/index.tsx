import { JSX } from 'react'
import { Review } from '@/types/global'
import Star from '@/assets/svg/star.svg'

export default function ReviewCard({ review }: { review: Review }): JSX.Element {
    return (
        <div className='flex h-max break-inside-avoid flex-col gap-y-2 rounded-2xl bg-white/10 p-4'>
            <div className='flex items-center gap-x-4'>
                <div
                    style={{ backgroundColor: `${review.color}` }}
                    className='flex aspect-square w-8 items-center justify-center rounded-full font-semibold text-white'
                >
                    <p>{review.name[0]}</p>
                </div>
                <p className='text-xl font-semibold text-white'>{review.name}</p>
            </div>
            <div className='flex items-center gap-x-4'>
                <div className='flex items-center'>
                    {[1, 2, 3, 4, 5].map((star: number, index: number) => (
                        <svg
                            key={index}
                            className='mx-1 h-4 w-4 fill-current text-yellow-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                        >
                            <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                        </svg>
                    ))}
                </div>
                <div className='text-sm italic text-gray-400'>Recommended</div>
            </div>
            <p className='text-white'>{review.desc}</p>
        </div>
    )
}
