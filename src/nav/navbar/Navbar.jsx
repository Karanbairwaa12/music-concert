import React, { useState } from 'react'
import { navData } from './navData';
import './navbar.css'
import upImg from './up.png'
import downImg from './down.png'
const Navbar = () => {
    const [up, setup] = useState(false);
    const [down, setdown] = useState(false);

    const handleUp = () => {
        setup(change => !change);
        setdown(false)
        
    };
    const handleDown = () => {
        setdown(change => !change);
        setup(false)
    };
  return (
    
    <div className="navbar">
        <div className="container">
            <div className="left">
            <img src="https://assets.website-files.com/64056753a2b6532a05724699/6405d09134d514737093f51a_logo-white.png" alt="" />
            </div>
            <div className="right">
            <ul className="navList">
                {
                    navData.map((item,i)=> {
                        if(i===2) {
                            return (
                                <li className="listItem" onClick={handleUp}>
                                    {item.title}
                                    {console.log("up",up)}
                                    {up ? <img src={upImg}/>:<img src={downImg}/>}
                                    {up && (
                                        <ul>
                                            <li>Event</li>
                                            <li>Event Schedul</li>
                                        </ul>
                                    )}
                                </li>
                            )
                        }
                        if(i===3) {
                            return (
                                <li class="listItem" onClick={handleDown}>
                                    {item.title}
                                    {console.log("down",down)}
                                    {down ? <img src={upImg}/>:<img src={downImg}/>}
                                    {down && (
                                        <ul>
                                            <li>About</li>
                                            <li>Venue</li>
                                            <li>Ticket</li>
                                        </ul>
                                    )}
                                </li>
                            )
                        }
                        return (
                            <li className="listItem">{item.title}</li>
                        )
                    })
                }
            </ul>               
            <button>Buy ticket</button>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar