import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar/Navbar'
import { useLocation } from 'react-router'
import { blogData } from '../component/blog/blogData'
import Comman from '../component/comman/Comman'
import '../component/comman/comman.css'
import Footer from '../component/footer/Footer'
import BlogPost from '../component/blog/BlogPost'

const BlogDetail = () => {
    
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    useEffect(()=> {
        const res = blogData[path-1]
        setPost(res)
    },[path])
    console.log(post)
    const item = {
        pageName:post.type,
        pageTitle:post.text
    }
  return (
    <>
        <Navbar/>
        <div className="topContainers">
        	<div className="containerDiv">
        		<div className="containerDivWrapper">
        			<div className="containerDivTitle">BLOG DETAIL</div>
        			<h1 style={{maxWidth:"100%"}}>{item.pageTitle}</h1>
        			<p>Musical show organized world wide, you can join this musical 	show very
        				<br/>
						easily through this site and confirm your ticket with a click
					</p>
        		</div>
        	</div>
            
        </div>
        <BlogPost item={post}/>
        <Footer/>
    </>
  )
}

export default BlogDetail