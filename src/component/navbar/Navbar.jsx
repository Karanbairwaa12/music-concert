import React, { useState } from 'react'
import { navData } from './navData';
import './navbar.css'
import upImg from './up.png'
import downImg from './down.png'
import { Link } from 'react-router-dom';
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
                                            <Link to='/event'>
                                                <li>Event</li>
                                            </Link>
                                            <Link to='/eventschedul'>
                                                <li>Event Schedul</li>
                                            </Link>
                                            
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
                                            <Link to='/about'>
                                                <li>About</li>
                                            </Link>
                                            <Link to='/vanue'>
                                                <li>Venue</li>
                                            </Link>
                                            <Link to='/ticket'>
                                                <li>Ticket</li>
                                            </Link>
                                               
                                        </ul>
                                    )}
                                </li>
                            )
                        }
                        return (
                            <Link to={item.path}>
                                <li className="listItem">{item.title}</li>
                            </Link>
                            
                        )
                    })
                }
            </ul>               
            {/* <div class="navList">
                <div className='listItem'>
                    <a href="/">HOME</a>
                </div>
                <div className='listItem'>
                    <a href="/performer">PERFORMER</a>
                </div>
                <div className='listItem' onClick={handleUp}>
                    <span>SHOW</span>
                    {console.log("up",up)}
                    
                    {up && (
                            <div className="drop">
                                <a href="/event">EVENT</a>
                                <a href="/eventschedul">EVENT SCHEDUL</a>
                            </div>   
                            )}
                </div>
                <div className='listItem' onClick={handleDown}>
                    
                    <span>PAGES</span>
                    {console.log("down",down)}
                    
                    {down && (
                            <div className="drop">
                                <a href="/about">About</a>
                                <a href="/venue">Venue</a>
                                <a href="/ticket">Ticket</a>
                            </div>
                            )}
                </div>
                <div className='listItem'>
                    <a href="/shop">SHOP</a>
                </div>
                <div className='listItem'>
                    <a href="/blog">BLOG</a>
                </div>
                <div className='listItem'>
                    <a href="/contact">CONTACT</a>
                </div>
            </div> */}
            
            <button>
                <Link 
                    to='/ticket'
                >
                    Buy ticket
                </Link>
            </button>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar