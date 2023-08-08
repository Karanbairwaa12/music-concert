import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Comman from '../component/comman/Comman'
import { MoreBlogTwo } from '../component/blog/MoreBlog.jsx'

const BlogPageTwo = ({item}) => {
  return (
    <>
        <Navbar/>
        <Comman item={item}/>
        <MoreBlogTwo/>
        <Footer/>
    </>
  )
}

export default BlogPageTwo