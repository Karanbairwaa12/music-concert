import React, { useState } from 'react'
import './ProductItem.css'
import { addProduct } from '../../Redux/cartSlice'
import { Add, Remove } from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux'
const ProductItem = ({post}) => {
	// const location = useLocation()
    // const path = location.pathname.split("/")[2]
    // const [post, setPost] = useState({})
    // useEffect(()=> {
    //     const res = blogData[path-1]
    //     setPost(res)
    // },[path])
    // console.log(post)
    // const item = {
    //     pageName:post.type,
    //     pageTitle:post.text
    // }
	console.log(post)
	const cart = useSelector(state => state.cart)
	const [cartQuentity, setCartQuentity] = useState(1)
	const dispatch = useDispatch()
	const handleClick = (type)=> {
		if(type === "dec") {
            cartQuentity>1 && setCartQuentity(cartQuentity-1)
        }else {
            setCartQuentity(cartQuentity +1)
        }
	}
	const handleAddCart = ()=> {
		dispatch(addProduct({...post,cartQuentity}))
	}
	console.log(cart)
  return (
	
    <>
    <section className="productDetail">
		<div className="productDetailAxis">
			<div className="productDetailContainer">
				<div className="productDetailWrapper">
					<div className="productDetailBlock">
						<div className="productItemDetail">
							<div className="productDetailImage">
								<a href="#" className="productDetailImageLink">
									<img className="productImg" src={post.img}/>
								</a>
							</div>
							<div className="productDetailContent">
								<h2 className="productDetailHeading">{post.name}</h2>
								<p className="productDetailParagraph">Experience the ultimate music event with top-notch performances, electrifying energy, and an unforgettable atmosphere. Join us for a night of pure entertainment and musical euphoria.</p>
								<div className="productDetailDevider">
									<div className="productDetailPrice">
										Price -$ {post.price} USD
									</div>
								</div>
								<div className="productDetailInfo">
									<div>Product Type:Physical</div>
									<div>SKU:DFDS-BL01</div>
									<div>Inventory:25</div>
								</div>
								<div>
									<div className="productDetailForm">
										<h4>Quentity</h4>
										<div className="ammountContainer">
											<Remove onClick = {()=> handleClick("dec")}/>
											<div className="ammount">{cartQuentity}</div>
											<Add onClick = {()=> handleClick("inc")}/>
										</div>
										<div className="productDetailAddToCart">
											<button className="productDetailBtn" onClick = {handleAddCart}>
												Add to cart
											</button>
										</div>
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
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default ProductItem