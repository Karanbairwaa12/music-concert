import React, {useState,useEffect } from 'react'
import Navbar from '../component/navbar/Navbar'
import Comman from '../component/comman/Comman'
import ProductItem from '../component/productItem/ProductItem'
import Footer from '../component/footer/Footer'
import { useLocation} from 'react-router-dom'
import { ProductData } from '../data'
import '../component/comman/comman.css'

const ProductItemPage = ({item}) => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    useEffect(()=> {
        const res = ProductData[path-1]
        setPost(res)
    },[path])
    console.log(post)
    // const productitem = {
    //     pageName:post.type,
    //     pageTitle:post.text
    // }
  return (
    <>
        <Navbar/>
        <div className="topContainers">
        	<div className="containerDiv">
        		<div className="containerDivWrapper">
        			<div className="containerDivTitle">PRODUCT DETAIL</div>
        			<h1 style={{maxWidth:"100%"}}>{post.name}</h1>
        			<p>Musical show organized world wide, you can join this musical 	show very
        				<br/>
						easily through this site and confirm your ticket with a click
					</p>
        		</div>
        	</div>
            
        </div>
        <ProductItem post={post}/>
        <Footer/>
    </>
  )
}

export default ProductItemPage