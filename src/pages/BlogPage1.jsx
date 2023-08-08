import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Comman from '../component/comman/Comman'
import { MoreBlogOne } from '../component/blog/MoreBlog.jsx'

const BlogPageOne = ({item}) => {
  return (
    <>
        <Navbar/>
        <Comman item={item}/>
        <MoreBlogOne/>
        <Footer/>
    </>
  )
}

export default BlogPageOne