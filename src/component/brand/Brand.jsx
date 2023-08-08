import React from 'react'
import { brandData } from '../../data'
import './brand.css'
const BrandItem= ({item})=> {
    return(
        <div className="singleBrand">
            <a href="#" className="singleBrandLogo">
                <img src={item.img}/>
            </a>
        </div>
    )
}
const Brand = () => {
  return (
    <section className="brandSection">
    		<div className="brandContainer">
    			<div className="brandAxis">
    				<div className="brandWrapper">
    					
	    					<div className="brandInner">
                                {
                                    brandData.map((item)=> {
                                        return <BrandItem item={item}/>
                                    })
                                }
	    						
	    					</div>
	    					<div className="brandInner">
	    						<div className="singleBrand">
	    							<a href="#" className="singleBrandLogo">
	    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6417d82ad0396968e19f17db_brand-01.png"/>
	    							</a>
	    						</div>
	    						<div className="singleBrand">
	    							<a href="#" className="singleBrandLogo">
	    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6417d82ad18f1b2f129045a9_brand-02.png"/>
	    							</a>
	    						</div>
	    						<div className="singleBrand">
	    							<a href="#" className="singleBrandLogo">
	    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6417d82a133530139ce6dac5_brand-03.png"/>
	    							</a>
	    						</div>
	    						<div className="singleBrand">
	    							<a href="#" className="singleBrandLogo">
	    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6417d82a831449ceac8e6cc9_brand-04.png"/>
	    							</a>
	    						</div>
	    						<div className="singleBrand">
	    							<a href="#" className="singleBrandLogo">
	    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6417d82a3c9985a32318c873_brand-05.png"/>
	    							</a>
	    						</div>
	    						<div className="singleBrand">
	    							<a href="#" className="singleBrandLogo">
	    								<img src="https://assets.website-files.com/64056753a2b6532a05724699/6417d82ad0396968e19f17db_brand-01.png"/>
	    							</a>
	    						</div>
	    					</div>
    					
    				</div>
    			</div>
    		</div>
    	</section>
  )
}

export default Brand