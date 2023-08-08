import React from 'react'

import './blog.css'
import { blogData } from './blogData'
import { Link } from 'react-router-dom'
const BlogItem = ({item})=> {
    return (
        <div className="blogListItem">
            <div className="blogImage">
                <a href="#" className="blogImageLink">
                    <img src={item.imgLink}/>
                </a>
                <a href="#" className="blogImageAuthor">
                    <img src={item.imgAuthor}/>
                </a>
            </div>
            <div className="blogContent">
                <div className="blogMeta">
                    <a href="#" className="blogCatagoryName">{item.type}</a>
                    <div className="blogMetaSeparator"></div>
                    <div className="blogData">Aug 25, 2023</div>
                </div>
                <a href="#" className="blogTitle">
                   {item.text}
                </a>
                <a href="#" className="blogReadMore">
                    <div className="readMore">Read More</div>
                    <div className="readMoreIcon">
                        <img src="https://assets.website-files.com/64056753a2b6532a05724699/640ff4594260e391a8ae8f1b_arrow-right.png"/>
                    </div>
                </a>
            </div>
        </div>
    )
}
const Blog = () => {
  return (
    <section className="blog">
    		<div className="blogSection">
	    		<div className="blogContainer">
	    			<div className="blogTitleBlock">
						<div className="blogCatagory">NEWS</div>
						<h2>LATEST NEWS</h2>
						<p>Muscal show organized world wide, you can join this musical show very easily
							<br/>
						through his site and confirm your ticket with a click pursue pleasure</p>
					</div>
					<div className="blogListWrapper">
						<div className="blogList">
							{
                               blogData.map((item)=> {
                                  return (
                                    <Link 
                                    key={item.id}
                                    to={`/blogdetail/${item.id}`}
                                    >
                                        <BlogItem item={item}/>
                                    </Link>
                                   
                                   )
                               }) 
                            }
						</div>
					</div>	
	    		</div>
	    	</div>
    	</section>
  )
}

export default Blog