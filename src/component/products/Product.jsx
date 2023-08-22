import React, { useEffect, useState } from 'react'
import './product.css'
import { ProductData } from '../../data'
const Product = () => {
  return (
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
                                i <= 3 ? (
                                <div class="productListItem" key={item.id}>
                                    <div class="productItem">
                                    <div class="productItemImage">
                                        <a href="#" class="productImageLink">
                                        <img src={item.img} alt={item.name} />
                                        </a>
                                        {/* <div class="productAddToCart">
                                        <button>Add to Cart</button>
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
                            
                            ) : null
                            )}
                        </div>
                    </div>
                    <a href="/product" class="productMore">
                        <div class="readMore">View All Products</div>
                        <div class="readMoreIcon">
                        <img src="https://assets.website-files.com/64056753a2b6532a05724699/640ff4594260e391a8ae8f1b_arrow-right.png" alt="Right Arrow" />
                        </div>
                    </a>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Product