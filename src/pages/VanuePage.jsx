import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Comman from '../component/comman/Comman'
import Vanue from '../component/vanue/Vanue.jsx'
import Footer from '../component/footer/Footer'

const VanuePage = ({item}) => {
  return (
    <>
        <Navbar/>
        <Comman item={item}/>
        <Vanue/>
        <Footer/>
    </>
  )
}

export default VanuePage