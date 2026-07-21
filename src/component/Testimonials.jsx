import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { testimonials } from '../assets/assets';

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const { icon, id, title, author, description } = testimonials[index]

    const prev = () => {
        setIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)
    }

    const next = () => {
        setIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1)
    }
    return (
        <div id='testimonials' className='py-20'>
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
                <div className="text-center">
                    <h1 className='text-2xl mb-2 font-bold'>Testimonials</h1>
                </div>
                <div className="flex justify-between">
                    <div onClick={prev}><FaChevronLeft className='bg-gray-300 cursor-pointer w-8 h-8 rounded-full p-2 hover:bg-secondary hover:text-primary' /></div>
                    <div className='text-center'>
                        <p className='text-xs text-gray-500 max-w-100 mx-auto mb-6'>{description}</p>
                        <img className='mx-auto w-15 h-15 rounded-full mb-3' src={icon} alt="" />
                        <h3 className='text-xs font-bold mb-1'>{title}</h3>
                        <p className='text-sm text-gray-500'>{author}</p>
                    </div>
                    <div onClick={next}><FaChevronRight className='bg-gray-300 cursor-pointer w-8 h-8 rounded-full p-2 hover:bg-secondary hover:text-primary' /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials