import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Comman from '../component/comman/Comman.jsx'
import Footer from '../component/footer/Footer'
import Ticket from '../component/ticket/Ticket'
import AboutBanner from '../component/banner/AboutBanner'
import Product from '../component/products/Product'


const About = ({item}) => {
  const img = "https://assets.website-files.com/64056753a2b6532a05724699/6449f02855c9d0358aed1fbb_banner-2-1.png"
  return (
    <>
      <Navbar/>
      <Comman item={item}/>
      <AboutBanner img = {img}/>
      <Ticket/>
      <Product/>
      <Footer/>
    </>
  )
}

export default About