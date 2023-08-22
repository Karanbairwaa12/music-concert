import React from 'react'
import './HomeContainer.css'
import { Link } from 'react-router-dom'
const HomeContainer = () => {
	const countdownListItem ={
		backgroundImage: `url(${process.env.PUBLIC_URL+ "/circle.png"})`
	}
  return (
	
    <section className="homeContinerSection">
        		<div className = "homeContiner">
        			<div className="homeContinerData">
        				<div className="homeContinerWelcom">
        					WELCOME
        				</div>
        				<h1 className="homeContinerHead">
        					<span className="homeContinerSpan">MUSIC EVENT</span>
        					GET THE BEAT
        				</h1>
        				<p className="homeContinerPara">
        					Musical show organized world wide, you can join this musical show very 
        					<br/>
        					easily through this site and confirm your ticket with a click
        				</p>
        				<div className="homeContinerButton">
        					<Link to='/ticket' className="homeButtonPrimary">Get your ticket</Link>
        				</div>
        				<div className="countdownWraper">
        					<div className="countdownHeading">
        						OUR NEXT SHOW
        					</div>
        					<ul className="countdownList">
        						<li className="countdownListItem" style={countdownListItem}>
        							<div className="countdownListItemInner">
        								<div className="countdownNumber">40</div>
        								<div className="countdowntext">Day</div>
        							</div>
        						</li>
        						<li className="countdownListItem" style={countdownListItem}>
        							<div className="countdownListItemInner">
        								<div className="countdownNumber">16</div>
        								<div className="countdowntext">Hour</div>
        							</div>
        						</li>
        						<li className="countdownListItem" style={countdownListItem}>
        							<div className="countdownListItemInner">
        								<div className="countdownNumber">30</div>
        								<div className="countdowntext">Min</div>
        							</div>
        						</li>
        						<li className="countdownListItem" style={countdownListItem}>
        							<div className="countdownListItemInner">
        								<div className="countdownNumber">15</div>
        								<div className="countdowntext">Sec</div>
        							</div>
        						</li>
        					</ul>
        				</div>

        			</div>
        		</div>
        	</section>
  )
}

export default HomeContainer