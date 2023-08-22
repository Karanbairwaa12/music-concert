import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <section className="banner">
    		<div className="bannerSectionGap">
    			<div className="bannerContainer">
    				<div className="bannerWraper">
    					<div className="bannerImgBlock">
    						<img src="https://assets.website-files.com/64056753a2b6532a05724699/644903b9fa9e895f67ac0c53_banner-1-1.png" className="bannerImg"/>
    					</div>
    					<div className="bannerContent">
    						<div className="bannerTitleBlock">
    							<div className="bannerCategory">
    								MUVENT
    							</div>
    							<h2 className="bannerTitle">
    								ORGANIZE QUALITY 
    								<br/>
    								MUSICAL SHOWS
    							</h2>
    							<p className="bannerPara">
    								Musical show organized world wide, you can join this musical show very 
    								<br/>
    								easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
    							</p>
    							<div className="bannerButtons">
    								<Link to ='/about' className="bannerBtnPrimary wBannerBtn">
    									Learn More
    								</Link>
    								<Link to="/ticket" className="bannerBtnOutline wBannerBtn">
    									Buy Ticket
    								</Link>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section> 
  )
}

export default Banner