import React from 'react'
import EventsItem from '../eventsItem/EventsItem'
import './event.css'
import { eventData } from '../../data'
const Event = () => {
  return (
    <section className="events">
    		<div className="eventSection">
    			<div className="eventContainer">
    				<div className="eventTitleBlock">
    					<div className="eventCatagory">EVENT</div>
    					<h2>UPCOMING MUSICAL SHOW</h2>
    					<p>Muscal show organized world wide, you can join this musical show very easily
    						<br/>
						through his site and confirm your ticket with a click pursue pleasure</p>
    				</div>
    				<div className="eventListWrapper">
    					<div className="eventList">
                            {
                                eventData.map((item)=> {
                                  return <EventsItem item={item}/> 
                                })
                            }
    						   						
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
  )
}

export default Event