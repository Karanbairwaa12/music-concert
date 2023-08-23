import React from 'react'
import './Banner.css'
const AboutBanner = ({img}) => {
  return (
    <section className="banner">
    		<div className="bannerSectionGap">
    			<div className="bannerContainer">
                    <div class="videoBannerWrapper">
                            <div class="videoBannerBlock">
                                <img src="https://assets.website-files.com/64056753a2b6532a05724699/6449f7fa4c81320ec3d8fe53_video-banner-bg-1.jpg" class="videoBannerImage"/>
                                <a href="#" class="videoIconBlock">
                                    <img src="https://assets.website-files.com/64056753a2b6532a05724699/6449f9ee43a6865d651ab2fd_video-play-button.png"/>
                                </a>
                            </div>
					</div>
    				<div className="bannerWraper">
    					<div className="bannerImgBlock">
    						<img src={img}/>
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
    								<a href="/ticket" className="bannerBtnOutline wBannerBtn">
    									Buy Ticket
    								</a>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section> 
  )
}

export default AboutBanner