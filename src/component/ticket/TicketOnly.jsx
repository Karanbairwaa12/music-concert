import React from 'react'
import './ticket.css'
import {ticketData} from './ticketData.js'
const TicketOnly = () => {
  return (
    
    <section className="ticketCart">
		<div className="ticketCartAxis">
			<div className="ticketCartContainer">
                
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
                                    <a href="#" className="ticketPurchaseButton">Purchase</a>
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

export default TicketOnly