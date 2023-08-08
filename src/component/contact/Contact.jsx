import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section class="contact">
		<div class="contactAxis">
			<div class="contactContainer">
				<div class="contactWrapper">
					<div class="contactFormBlock">
						<div class="contactTitleBlock">
							<h2 class="contactHead">Get in Touch</h2>
							<p>Musical show organized world wide, you can join musical
								<br/>
							show very easily through this site and confirm your</p>
						</div>
						<div class="contactForm">
							<form>
								<div class="contactInputFeild">
									<input type="text" name="name" placeholder="Your Name" class="W-input"/>
									<input type="email" name="email" placeholder="Your Email" class="W-input"/>
								</div>
								<textarea placeholder="write here" class="textAreaFeild W-input"></textarea>
								<input type="submit" name="button" class="contactSubmitBtn w-button"/>
							</form>
						</div>
					</div>
					<div class="contactInfoBlock">
						<div class="infoBlock">
							<h3>Address</h3>
							<p>254B, Main Town, North Street
								<br/>
								Selex Tower, New York, USA</p>
						</div>
						<div class="contactDevider"></div>
						<div class="infoBlock">
							<h3>Call Us</h3>
							<div class="widBlock">
								<a href="#">+14562 874 658</a>
								<a href="#">+98745 612 321</a>
							</div>
						</div>
						<div class="contactDevider"></div>
						<div class="infoBlock">
							<h3>Email Us</h3>
							<div class="widBlock">
								<a href="#">info@muvent.com</a>
								<a href="#">info@muvent.com</a>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Contact