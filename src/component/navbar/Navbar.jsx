import React, { useState } from 'react'
import { navData } from './navData';
import './navbar.css'
import upImg from './up.png'
import downImg from './down.png'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {LocalGroceryStoreOutlined, Search,ArrowForwardIos, Close} from '@mui/icons-material'
import { Add, Remove } from "@mui/icons-material"
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, removeProduct,increment } from '../../Redux/cartSlice';


const Navbar = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const quentity = useSelector(state => state.cart.quentity)
    const [up, setup] = useState(false);
    const [down, setdown] = useState(false);
    const [cartVisible, setCartVisible] = useState(false)
    const [cartQuentity, setCartQuentity] = useState(1)
    const handleUp = () => {
        setup(change => !change);
        setdown(false)
        
    };
    const handleDown = () => {
        setdown(change => !change);
        setup(false)
    };

    const handleCart = (event)=> {
        event.preventDefault();
        setCartVisible(true)
    }
    
    const handleClick = (type)=> {
		if(type === "dec") {
            cartQuentity>1 && setCartQuentity(cartQuentity-1)
        }else {
            setCartQuentity(cartQuentity +1)
        }
	}
    
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
                
                <Badge badgeContent={quentity} color="secondary" >
                    <LocalGroceryStoreOutlined onClick={handleCart} style= {{cursor:"pointer"}}/>
                </Badge>
                <button className="SubmitBtn">
                    <Link 
                        to='/ticket'
                    >
                        Buy Ticket
                    </Link>
                </button>
            </div>
            {
                cartVisible && (
                    <section className="cart">
                        <div className="cartContainer">
                            <div className="cartHeader">
                                <h4>Your Cart</h4>
                                
                                <div className="cartDisappear" onClick= {()=> setCartVisible(false)}>
                                    <Close/>
                                </div>
                                
                            </div>
                            <div className="cartWrapper">
                            <form>
                                <div className="cartList">
                                    {
                                        cart.product.map((product)=> {
                                            return (<div className="cartItem">
                                                <a href="#" className="cartItemImage">
                                                    <img src={product.img}/>
                                                </a>
                                                <div className="cartInfo">
                                                    <a href="#" className="cartItemName">{product.name}</a>
                                                    <div>$ {product.price * product.cartQuentity} USD</div>
                                                    <a href="#" className="cartRemove" onClick = {()=> dispatch(removeProduct(product))}>
                                                        <div>Remove</div>
                                                    </a>
                                                </div>
                                                <div className="ammountContainer">
                                                    <Remove onClick = {()=> dispatch(decrement(product))}/>
                                                    <div className="ammount">{product.cartQuentity}</div>
                                                    <Add onClick = {() => dispatch(increment(product))}/>
                                                </div>
                                            </div>)
                                        })
                                    }
                                    
                                </div>
                                <div className="cartFooter">
                                    <div className="cartLineItem">
                                        <div>Subtotal</div>
                                        <div className="">$ {cart.total} USD</div>
                                    </div>
                                    <div>
                                            <button className="cartBtn" onClick= {()=> setCartVisible(false)}>
                                                Contuniue to Checkout
                                            </button>
                                    
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                        
                    </section>
                )
            }
            
        </div>
    </div>
    
  )
}

export default Navbar