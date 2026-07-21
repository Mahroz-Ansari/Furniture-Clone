import React from 'react'
import { product } from '../assets/assets'
import { FaStar } from "react-icons/fa";

const Products = () => {
    return (
        <div id="products" className='py-20'>
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
                <div className="text-center">
                    <h1 className='text-2xl mb-2 font-bold'>Popular Products</h1>
                    <p className='text-xs text-gray-500 max-w-82 mx-auto mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio et numquam corrupti.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-4 md:grid-cols-3 max-w-4xl mx-auto">
                    {
                        product.map((cur) => (
                            <div key={cur.id} className="bg-gray-200 pt-5">
                                <img className='w-60 h-60 mx-auto mb-4 cursor-pointer hover:scale-105 transition-all duration-300 ' src={cur.icon} alt="" />
                                <hr className='border-2 border-gray-300' />
                                <div className='px-4 py-2'>
                                    <h3 className='text-sm font-bold'>{cur.title}</h3>
                                    <div className='flex items-center gap-1 text-sm'><FaStar className='text-acent' /><span className='text-gray-500'>{cur.rate}</span></div>
                                    <p className='text-secondary text-sm font-semibold'>${cur.price}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className='flex justify-center pt-15'>
                    <a href="#"><button className='cursor-pointer px-6 py-3 rounded-full border-acent bg-acent hover:bg-transparent text-black hover:border hover:border-acent hover:text-acent transition-all duration-300 ease-in-out'>All Products</button></a>
                </div>
            </div>
        </div>
    )
}

export default Products