import React from 'react'
import './sliderItem.css'
const SliderItem = ({item}) => {
  return (
        <div className="sliderItem wSliderItem" style={{ width: '370px' }}>
            <div className="sliderItemPerformer">
                <a href="" className="performerImg wPerformerImg">
                    <img src={item.img} className="imgItem" />
                </a>
                <div className="sliderItemPerformerContent">
                    <a href="" className="performerName">{item.name}</a>
                    <a href="" className="performerType">{item.type}</a>
                    <div className="sliderSocialLink">
                        <div className= "sliderSocialBlock">
                            <a href="" className="sliderIcon">
                                <img src="https://assets.website-files.com/64056753a2b6532a05724699/6409bef9940a27a0cb08674c_facebook.svg" />
                            </a>
                            <a href="" className="sliderIcon">
                                <img src="https://assets.website-files.com/64056753a2b6532a05724699/6409c7900f1b4f176be0dc5f_instagram.svg" />
                            </a>
                            <a href="" className="sliderIcon">
                                <img src="https://assets.website-files.com/64056753a2b6532a05724699/6409c7902ae09628991f738e_twitter.svg" />
                            </a>
                            <a href="" className="sliderIcon">
                                <img src="https://assets.website-files.com/64056753a2b6532a05724699/641be33594d12bd4a6f2dd6c_whatsapp.svg" />
                            </a>
                        </div>
                        <div className="sliderSocialSpan">Follow</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SliderItem