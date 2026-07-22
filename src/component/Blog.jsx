import React from 'react'
import { blog } from '../assets/assets'

const Blog = () => {
  return (
    <div id='blog' className='bg-gray-200 py-20'>
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
                        <div className="flex-row md:flex justify-between mb-4">
                            <h1 className='text-2xl mb-2 font-bold'>Recent Blog</h1>
                            <a className='text-xs cursor-pointer hover:underline underline-offset-2'>View All Posts</a>
                        </div>
                        <div className="grid grid-cols-1 space-x-6 sm:grid-cols-2 gap-y-12 md:grid-cols-3">
                            {
                                blog.map((cur) => (
                                    <div key={cur.id}>
                                        <img className='mb-4 rounded-md h-60 w-120' src={cur.icon} alt="" />
                                        <div className='py-2'>
                                            <h3 className='text-sm font-bold hover:text-secondary cursor-pointer'>{cur.title}</h3>
                                            <p className='text-xs text-gray-500 mb-2'>{cur.description}</p>
                                            <p className='text-xs text-gray-500'>{cur.author}</p>
                                        </div>
                                    </div>
        
                                ))
                            }
                        </div>
                    </div>
    </div>
  )
}

export default Blog