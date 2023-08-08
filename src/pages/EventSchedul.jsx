import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Comman from '../component/comman/Comman'
import Schedul from '../component/schedul/Schedul'
import Footer from '../component/footer/Footer'
const EventSchedul = ({item}) => {
  return (
    <>
      <Navbar/>
      <Comman item = {item}/>
      <Schedul/>
      <Footer/>
    </>
    
  )
}

export default EventSchedul