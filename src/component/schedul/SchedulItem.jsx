import React from 'react'
import './schedul.css'
const SchedulItem = ({item,isTransparent}) => {
  return (
    <div className={`SchedulItem ${isTransparent ? 'transparent' :""}`}>
        <div className="SchedulItemImageBlock">
            <img alt="this is img" src={item.img}/>
            <h2>{item.name}</h2>
            <div className="SchedulItemName">Rock Star</div>
            <div className= "SchedulSocialBlock">
                <a href="/" className="SchedulIcon">
                    <img alt="this is img" src="https://assets.website-files.com/64056753a2b6532a05724699/6409bef9940a27a0cb08674c_facebook.svg"/>
                </a>
                <a href="/" className="SchedulIcon">
                    <img alt="this is img" src="https://assets.website-files.com/64056753a2b6532a05724699/6409c7900f1b4f176be0dc5f_instagram.svg"/>
                </a>
                <a href="/" className="SchedulIcon">
                    <img alt="this is img" src="https://assets.website-files.com/64056753a2b6532a05724699/6409c7902ae09628991f738e_twitter.svg"/>
                </a>
                <a href="/" className="SchedulIcon">
                    <img alt="this is img" src="https://assets.website-files.com/64056753a2b6532a05724699/641be33594d12bd4a6f2dd6c_whatsapp.svg"/>
                </a>
            </div>
            </div>
            <div className="SchedulItemContent">
                <div className="SchedulItemInfo">
                    <div className="SchedulInfoWrap">
                        <div className="SchedulInfoBlock">
                            <div className="SchedulInfoTitle">Concert Date</div>
                            <div className="SchedulInfoSpan">25 August, 2023</div>
                        </div>
                        <div className="SchedulInfoBlock">
                            <div className="SchedulInfoTitle">Concert Titme</div>
                            <div className="SchedulInfoSpan">5.30 pm</div>
                        </div>
                    </div>
                    <div className="SchedulConcertPlace">
                        <div className="ConcertTitle">
                            Concert Place
                        </div>
                        <div className="ConcertSpan">
                            Sydney Opera House, Bennelong Point,
                            <br/>
                            Sydney NSW 2000, Australis
                        </div>
                    </div>
                    <a href="/" className="SchedulLinkButton">Buy Ticket</a>
                </div>
                <div className="SchedulDevider"></div>
                <div className="SchedulItemInfo">
                    <div className="SchedulInfoWrap">
                        <div className="SchedulInfoBlock">
                            <div className="SchedulInfoTitle">Concert Date</div>
                            <div className="SchedulInfoSpan">25 August, 2023</div>
                        </div>
                        <div className="SchedulInfoBlock">
                            <div className="SchedulInfoTitle">Concert Titme</div>
                            <div className="SchedulInfoSpan">5.30 pm</div>
                        </div>
                    </div>
                    <div className="SchedulConcertPlace">
                        <div className="ConcertTitle">
                            Concert Place
                        </div>
                        <div className="ConcertSpan">
                            Sydney Opera House, Bennelong Point,
                            <br/>
                            Sydney NSW 2000, Australis
                        </div>
                    </div>
                    <a href="/" className="SchedulLinkButton">Buy Ticket</a>
                </div>
            </div>
    </div>
  )
}

export default SchedulItem