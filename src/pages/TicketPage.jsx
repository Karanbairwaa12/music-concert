import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Comman from '../component/comman/Comman'
import TicketOnly from '../component/ticket/TicketOnly'
import Footer from '../component/footer/Footer'

const TicketPage = ({item}) => {
  return (
    <>
        <Navbar/>
        <Comman item={item}/>
        <TicketOnly/>
        <Footer/>
    </>
  )
}

export default TicketPage