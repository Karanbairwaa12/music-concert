import React from 'react'
import Navbar from '../component/navbar/Navbar'
import FlexSlider from '../component/slider/FlexSlider'
import Comman from '../component/comman/Comman.jsx'
import Footer from '../component/footer/Footer'

const Performer = ({item}) => {
  return (
    <>
    <Navbar/>
    <Comman item={item}/>
    <FlexSlider/>
    <Footer/>
    </>
  )
}

export default Performer