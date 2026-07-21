import React from 'react'
import { LuSend } from "react-icons/lu";

const Subscribe = () => {
    return (
        <div className='py-20'>
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
                <div className="flex flex-col gap-12 md:flex-row space-x-12">
                    <div className="content">
                        <h3 className='text-2xl font-bold mb-4'>Subscribe to NewsLetter</h3>
                        <form className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-y-4 md:flex-row space-x-4'>
                                <input type="text" placeholder='Your Name' className='border border-gray-300 text-xs p-2 outline-0 w-48' />
                                <input type="email" placeholder='E-mail' className='border border-gray-300 text-xs p-2 outline-0 w-48' />
                            </div>
                            <button className='bg-secondary text-primary rounded-sm w-8 h-8 cursor-pointer flex justify-center items-center'><LuSend className='text-xl' /></button>
                        </form>
                    </div>
                    <div>
                        <img className='w-80' src="/news-banner.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe