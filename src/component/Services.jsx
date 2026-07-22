import React from 'react'
import service from '../assets/assets'

const Services = () => {
    // console.log(service)
    return (
        <div id='services' className='bg-primary py-20'>
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
                <div className="flex flex-col gap-12 md:flex-row justify-between items-center">
                    <div className='content'>
                        <h3 className='text-xl font-bold mb-2'>Why Choose Us</h3>
                        <p className='text-gray-500 max-w-80 mb-15 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est facere fugit magni quo ullam assumenda?</p>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 space-x-6'>
                            {
                                service.map((cur) => (
                                    <div key={cur.id} className='py-2'>
                                        <img className='w-7 mb-1' src={cur.icon} alt="" />
                                        <h6 className='font-bold mb-2'>{cur.title}</h6>
                                        <p className='text-gray-500 max-w-50 text-sm'>{cur.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='service-image'>
                        <img className='w-110 h-120' src="/assets/wcu-banner.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services