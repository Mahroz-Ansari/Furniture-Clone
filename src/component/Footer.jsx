import React from 'react'
import { footer } from '../assets/assets'

const Footer = () => {
    return (
        <div className='py-20'>
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
                <div className="flex flex-col gap-6 mb-8 md:flex-row">
                    <div className="content">
                        <h3 className='text-2xl font-bold mb-2'>Stilo</h3>
                        <p className='text-xs text-gray-500 max-w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ea ducimus! Numquam neque corrupti iusto, vero velit repellat.</p>
                    </div>
                    <div className='flex flex-col gap-6 sm:flex-row space-x-4 md:space-x-12'>
                        {footer.map((cur) => (
                            <div key={cur.id} className='flex flex-col gap-y-2'>
                                <h3 className='text-sm font-bold'>{cur.title}</h3>
                                <p className='text-gray-500 text-xs font-semibold'>{cur.order}</p>
                                <p className='text-gray-500 text-xs font-semibold'>{cur.location}</p>
                                <p className='text-gray-500 text-xs font-semibold'>{cur.trade}</p>
                                <p className='text-gray-500 text-xs font-semibold'>{cur.gift}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='text-gray-300 py-2' />
                <p className='text-xs text-gray-500'>&copy; 2026 By Stilo Furniture. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer