import React from 'react'
import './ticket.css'
import {ticketData} from './ticketData.js'
const Ticket = () => {
  return (
    
    <section className="ticketCart">
		<div className="ticketCartAxis">
			<div className="ticketCartContainer">
                <div className="ticketTitleBlock">
                    <div className="ticketCatagory">TICKET</div>
                    <h2 className="ticketHeading">CHOOSE YOUR TICKET</h2>
                    <p class="ticketParagraph">
                    Muscal show organized world wide, you can join this musical show very easily
                    <br/>
                    through his site and confirm your ticket with a click pursue pleasure
                    </p>
                </div>
				<div className="ticketCartWrapper">
                    {
                        ticketData.map((item)=> {
                            return(
                            <div className="ticketCartBlock">
                                <h2 className="ticketCartBlockHead">{item.type}</h2>
                                <div className="ticketPriceBlock">{item.money}</div>
                                <div className="ticketBlockInfo">
                                    <div className="ticketFeatureList">
                                        <a href="#" className="ticketFeatureListLink">Ticket for one Show</a>
                                        <a href="#" className="ticketFeatureListLink">One 500 ml water bottle</a>
                                        <a href="#" className="ticketFeatureListLink">VIP gate entry pass</a>
                                        <a href="#" className="ticketFeatureListLink">First row seat allow</a>
                                    </div>
                                </div>
                                <div className="ticketPurchaseBlock">
                                    <a href="/contact" className="ticketPurchaseButton">Purchase</a>
                                </div>
                            </div>
                            )
                        } )
                    }
					
					
				</div>
			</div>
		</div>
	</section>
  )
}

export default Ticket