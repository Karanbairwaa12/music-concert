import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Comman from '../component/comman/Comman'
import Event from '../component/events/Event'
import Product from '../component/products/Product'
import Footer from '../component/footer/Footer'

const EventPage = ({item}) => {
  return (
    <>
      <Navbar/>
      <Comman item={item}/>
      <Event/>
      <Product/>
      <Footer/>
    </>
  )
}

export default EventPage