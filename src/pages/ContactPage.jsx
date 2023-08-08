import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Comman from '../component/comman/Comman'
import Footer from '../component/footer/Footer'
import Contact from '../component/contact/Contact'

const ContactPage = ({item}) => {
  return (
    <>
        <Navbar/>
        <Comman item= {item}/>
        <Contact/>
        <Footer/>
    </>
    
  )
}

export default ContactPage