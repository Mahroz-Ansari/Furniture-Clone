import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Services from '../component/Services'
import Products from '../component/Products'
import Testimonials from '../component/Testimonials'
import Blog from '../component/Blog'
import Subscribe from '../component/Subscribe'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Products/>
        <Testimonials/>
        <Blog/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Home