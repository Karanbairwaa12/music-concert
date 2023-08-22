import React from 'react'
import './product.css'
import { ProductData } from '../../data'
import Footer from '../footer/Footer'
import Event from '../events/Event'
import Comman from '../comman/Comman'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
const AllProduct = ({item}) => {
  return (
   <>
    <Navbar/>
    <Comman item={item}/>

   <section class="product">
		<div class="productAxis">
			<div class="productContainer">
				<div class="productTitleBlock">
					<div class="productCatagory">
						Shop
					</div>
					<h2>BUY OUR PRODUCT</h2>
					<p>Muscal show organized world wide, you can join this musical show very easily
					<br/>
					through his site and confirm your ticket with a click pursue pleasure
					</p>
				</div>
				<div class="productWrapper">
                    <div class="productListWrapper">
                        <div class="productList">
                           
                            {ProductData.map((item, i) =>
                              (
                                <Link to={`/product/${item.id}`}>
                                
                                    <div class="productListItem" key={item.id}>
                                        <div class="productItem">
                                        <div class="productItemImage">
                                            <a href="#" class="productImageLink">
                                            <img src={item.img} alt={item.name} />
                                            </a>
                                            {/* <div class="productAddToCart">
                                                <Link to="/product">
                                                    <button>Add to Cart</button>
                                                </Link>
                                            
                                            </div> */}
                                        </div>
                                        <div class="productItemContent">
                                            <a href="#" class="productContentLink">
                                            {item.name}
                                            </a>
                                            <div class="productPriceBlock">
                                            <div>Price</div>
                                            <div>{item.price}</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                                )
                            )}
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</section>
    <Footer/>
    </>
  )
}

export default AllProduct