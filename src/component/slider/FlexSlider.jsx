import React from 'react'
import './flexSlider.css'
import { slideData } from '../../data'
import SliderItem from '../sliderItem/SliderItem.jsx';
const FlexSlider = () => {
  return (
    <section className="slider">
    		<div className="sliderSectionGap">
    			<div className="sliderContainer">
                    {/* <div className='sliderArrowLeft wSliderLeft' >
                        <div className="arrowIcon arrowIconLeft"  >
                            <ArrowBackIosNewOutlinedIcon/>
                        </div>
                    </div>
                    <div className='sliderArrowRight'>
                        <div className="arrowIcon arrowIconRight" >
                            <ArrowForwardIosOutlinedIcon/>
                        </div>
                    </div> */}
    				
    				<div className="sliderWrapper">
                            
                            {
                               slideData.map((item)=> {
                                    return (
                                        <SliderItem item={item}/>
                                    )
                                })
                            } 
                            
                                             
    				</div>
                    
    			</div>
    		</div>

    	</section>
  )
}

export default FlexSlider