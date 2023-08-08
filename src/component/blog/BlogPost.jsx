import React from 'react'
import './blogpost.css'
const BlogPost = ({item}) => {
  return (
    <section className="blogPost">
		<div className="blogPostAxis">
			<div className="blogPostContainer">
				<div className="blogPostDetailWrapper">
					<div className="blogPostDetailMeta">
						<a href="#">{item.type}</a>
						<div className="metaSeparator"></div>
						<div className="metaDetailDate">
							August 19, 2023
						</div>
					</div>
					<h2 className="blogPostDetailTitle">{item.text}</h2>
					<div className="singleImageBlock">
						<img src={item.imgLink}/>
					</div>
					<div className="singleImageText">
						<p>Musical show organized world wide, you can join this musical show very easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, show very easily through this site and confirm your ticket with a click pursue pleasure rationally  encounter consequences that are extremely painful. Nor again is there who loves or pursues or desires to obtain pain of itself, pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain</p>
						<p>Musical show organized world wide, you can join this musical show very easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, show very easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful.</p>
					</div>
					<div className="blogPostQuote">
						<img src="https://assets.website-files.com/64056753a2b6532a05724699/6410490115fa7b57ffabe378_quote.png"/>
						<div className="quote">
							Musical show organized world wide, you can join this musical show very easily through this site and ally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues through this site and confirm your ticket with a click pursue pleasure rationally encounter
						</div>
					</div>
					<div className="blogPostImageWithContent">
						<div className="singleImageBlock style-two">
							<img src="https://assets.website-files.com/64056753a2b6532a05724699/6410523dd8a6c6d1621c1ab4_rich-text-image-1.jpg"/>
						</div>
						<div className="singleContent">
							<p>Musical show organized world wide, you can join this musical show very easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain on itself, show very easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there who loves or pursues or desires top obtain pain of itself, pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who overs or pursues or desires to obtain pain of itself, because it is pain, but because oc more than a lot of satisfaction that you may learn</p>
						</div>
					</div>
					<p className="randomText">Musical show organized world wide, you can join this musical show very easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, show very easily through this site and confirm your ticket with a click pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there who loves or pursues or desires to obtain pain of itself, pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain</p>
					<div className="blogPostDetailDevider"></div>
					<div className="blogPostDetailBottom">
						<div className="blogPostDetailLeft">
							<div className="blogPostDetailBottomTitle">
								Tags:
							</div>
							<div>
								<div className="blogPostTagList">
									<div className="blogPostTagListItem">
										<a href="#">Conference</a>
									</div>
									<div className="blogPostTagListItem">
										<a href="#">Musical Show</a>
									</div>
									<div className="blogPostTagListItem">
										<a href="#">Event</a>
									</div>
								</div>
							</div>
						</div>
						<div className="blogPostDetailRight">
							<div className="blogPostDetailBottomTitle">Share</div>
							<div className="blogPostSocialLinks">
								<a href="#">Facebook</a>
								<a href="#">Twitter</a>
								<a href="#">Instagram</a>
							</div>
						</div>
					</div>
				</div>
				<div className="feedbackWrapper">
					<h2 className="feedbackHeading">Comments(03)</h2>
					<div className="feedUserWrapper">
						<div className="feedUserBlock">
							<div className="feedUserBlockImage">
								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6411562434e519dbb1ed8be3_edwin.png"/>
							</div>
							<div className="feedUserContent">
								<div className="feedUserMeta">
									<div className="feedUserName">Edwin Adams</div>
									<div className="feedUserCommentDate">25 August, 2023 - 4.45 pm</div>
								</div>
								<p className="userFeedback">Musical show organized world wide, you can join this musical show very easily through this more than use ally encounter consequences that are extremely painful. Nor again is there anyone who so much of the through this site and confirm your ticket with a click pursue pleasure ration</p>
								<div className="feedUserInteraction">
									<a href="#">Reply</a>
									<div className="metaSeparator"></div>
									<a href="#">Like</a>
									<div className="metaSeparator"></div>
									<a href="#">Comments</a>
								</div>
							</div>
						</div>
					</div>	
				</div>
				
				<div className="blogPostForm">
					<h2 className="blogPostFormHeading">Leave a Reply</h2>
					<div className="contactForm">
						<form>
							<div className="contactInputFeild">
								<input type="text" name="name" placeholder="Your Name" className="W-input"/>
								<input type="email" name="email" placeholder="Your Email" className="W-input"/>
							</div>
							<textarea placeholder="write here" className="textAreaFeild W-input blogPostTextAreaFeild"></textarea>
							<div className="blogPostBtnBlock">
								<input type="submit" name="button" className="contactSubmitBtn w-button blogPostContactBtn"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default BlogPost