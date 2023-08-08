import React, { useEffect, useRef, useState } from 'react'
import './slider.css'
import Slider from "react-slick";
// import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined' 
// import "slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css"; 
import { slideData } from '../../data'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import SliderItem from '../sliderItem/SliderItem.jsx';
const SliderContainer = () => {
    
// Change the inner text of the element
    // myElement.textContent = 'New Text';
    const CustomPrevArrow = (props) => <MdChevronLeft {...props} />;
    const CustomNextArrow = (props) => <MdChevronRight {...props} />;
    const slider = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/sliderBackground.jpg"})`
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      };

      
  return (
    <section style ={slider} className="slider">
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
    				<div className="sliderTitleBlock">
    					<div className="slideCategory">
    						PERFORMER
    					</div>
    					<h2 className="sliderHeading">OUR PERFORMER <br/> FOR EVENTS</h2>

    				</div>
    				<div className="slider-container">
                            <Slider {...settings}>
                            {
                               slideData.map((item)=> {
                                    return (
                                        <SliderItem item={item}/>
                                    )
                                })
                            } 
                            </Slider>
                                             
    				</div>
                    
    			</div>
    		</div>

    	</section>
  )
}

export default SliderContainer