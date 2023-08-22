import React, { useEffect, useState } from 'react'
import './schedul.css'
import { eventSchdulData,eventDataButton } from '../../data'
import SchedulItem from './SchedulItem'
const Schedul = () => {
    const [click, setClick] = useState(0)
    const [isTransparent, setIsTransparent] = useState(false);
    const handleClick=(i,event)=> {
        event.preventDefault();
        setClick(i)
    }

    const handleClicktrans = () => {
        setIsTransparent(true);
    
        // After 0.5 seconds, reset the transparency to false
        setTimeout(() => {
          setIsTransparent(false);
        }, 100);
      };
    const handlleButtonClick = (i, event)=> {
        handleClick(i,event);
        handleClicktrans()
    }
  return (
    <section className="Schedul">
		<div className="SchedulAxis">
			<div className="SchedulContainer">
				
				<div className="SchedulTabs">
					<div className="SchedulTabsMenu">
                        {
                            eventDataButton.map((item,i)=> {
                                return(
                                    <a href="/" key={i} className={`SchedulTabsLink ${click === i ? 'active':''}`} onClick ={(event)=> handlleButtonClick(i,event)}>
                                        <div className="SchedulTabsText">
                                            {item.name}
                                        </div>
                                    </a>
                                )
                            })
                        }
						{/* <a href="/" className="SchedulTabsLink">
							<div className="SchedulTabsText">
								Kate Middleton
							</div>
						</a>
						<a href="/" className="SchedulTabsLink">
							<div className="SchedulTabsText">
								Kate Middleton
							</div>
						</a>
						<a href="/" className="SchedulTabsLink">
							<div className="SchedulTabsText">
								Kate Middleton
							</div>
						</a>
						<a href="/" className="SchedulTabsLink">
							<div className="SchedulTabsText">
								Kate Middleton
							</div>
						</a> */}
					</div>
					<div className="SchedulTabsContent">
						<div className="SchedulItemList">
                            {
                                eventSchdulData.map((item,i)=> {
                                    return (
                                        click === i && <SchedulItem item={item} isTransparent={isTransparent}/>
                                    )
                                })
                            }
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Schedul