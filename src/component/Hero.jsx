import React from 'react'

const Hero = () => {
    return (
        <div id='home' className='bg-secondary py-20 h-full'>
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
                <div className="flex flex-col items-center gap-12 md:flex-row justify-between text-left text-primary">
                    <div className=''>
                        <h1 className='text-5xl font-bold mb-8 max-w-100'>Redesign Your Space, Refine Your Look.</h1>
                        <p className='text-xs mb-6 max-w-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sapiente, eligendi quia! Odit aspernatur sit ullam.</p>
                        <div className='flex items-center space-x-4'>
                            <a href="#"><button className='cursor-pointer px-6 py-3 rounded-full border-acent bg-acent hover:bg-transparent text-black hover:border hover:border-acent hover:text-acent transition-all duration-300 ease-in-out'>Shop Now</button></a>
                            <a href="#"><button className='cursor-pointer border border-primary px-6 py-3 rounded-full outline-0 hover:bg-acent hover:border-none hover:text-black transition-all duration-300 ease-in-out'>Explore</button></a>
                        </div>
                    </div>
                    <div className='hero-image'>
                        <img className='w-120 h-100' src="/assets/hero-banner.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero