
import Navbar from '../component/navbar/Navbar'
import React from 'react'
import HomeContainer from '../component/container/HomeContainer'
import Banner from '../component/banner/Banner'
// import Slider from '../../component/slider/Slider'
import SliderContainer from '../component/slider/Slider'
import Footer from '../component/footer/Footer'
import Event from '../component/events/Event'
import Brand from '../component/brand/Brand'
import Blog from '../component/blog/Blog'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeContainer/>
    <Banner/>
    <SliderContainer/>
    <Event/>
    <Brand/>
    <Blog/>
    <Footer/>
    </>
    
  )
}

export default Home