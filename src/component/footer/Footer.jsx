import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
    	<div className="footerBlock">
    		<div className="footerContainer">
    			<div className="footerSectionGap">
    				<h2 className="footerHeading">Subscribe our Newsletter</h2>
    				<div className="footerInput">
    					<form className="footerForm">
    						<div className="footerInputBlock wInput">
    							<input type="text" name="" placeholder="Enter email address" className="footerInputText wText"/>
    							<input type="submit" name="" value="Subscribe" className="footerInputButton wButton"/>
    						</div>
    					</form>
    					
    				</div>
    				<div className="footerOffer">* For weekly latest update and offers!</div>
    			</div>
    		</div>
    	</div>
    	<div className="footerBlockTop">
    		<div className="footerBlockTopContainer">
    			<div className="footerBorder">
    				<div className="footerWraper wFooterWraper">
    					<div className="footerWraperLeft">
    						<div className="footerWraperLeftLogo">
    							<img src="https://assets.website-files.com/64056753a2b6532a05724699/6405d09134d514737093f51a_logo-white.png"/>
    						</div>
    						<p>
    							Muscal show organized world <br/> Muscal show organized world
    						</p>
    						<div className="socialLink">
    							<a href="#">
    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6409bef9940a27a0cb08674c_facebook.svg"/>
    							</a>
    							<a href="#">
    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6409c7900f1b4f176be0dc5f_instagram.svg"/>
    							</a>
    							<a href="#">
    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6409c7902ae09628991f738e_twitter.svg"/>
    							</a>
    						</div>
    					</div>
    					<div className="footerWraperRight">
    						<div className="footerRightItem">
    							<h2 className="footerRightHeading">Useful Link</h2>
    							<ul className="footerRightList">
    								<li className="footerRightListItem">About us</li>
    								<li className="footerRightListItem">Upcoming Events</li>
    								<li className="footerRightListItem">Performer</li>
    								<li className="footerRightListItem">Latest News</li>
    								<li className="footerRightListItem">Contact us</li>
    							</ul>
    						</div>
    						<div className="footerRightItem">
    							<h2 className="footerRightHeading">INFORMATION</h2>
    							<ul className="footerRightList">
    								<li className="footerRightListItem">Purchase Ticket</li>
    								<li className="footerRightListItem">Login/Register</li>
    								<li className="footerRightListItem">Style Guide</li>
    								<li className="footerRightListItem">Licenses</li>
    								<li className="footerRightListItem">Change Log</li>
    							</ul>
    						</div>
    						<div className="footerRightItem">
    							<h2 className="footerRightHeading">CONTACT</h2>
    							<p className="footerRightPara">254B, Main Town, North Street
									<br/>
									Selex Tower, New York, USA
								</p>
    							<div className="numberItemBlock">
    								<a href="" className="numberItem">+14562 874 658</a>
    								<a href="" className="numberItem">+98745 612 321</a>
    							</div>
    							<div className="webItemBlock">
    								<a href="" className="emailItem">info@muvent.com</a>
    								<a href="" className="emailItem">www.muvent.com</a>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </footer>
  )
}

export default Footer