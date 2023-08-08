import React from 'react'

import './blog.css'
import { blogData } from './blogData'
import { ArrowForward } from '@material-ui/icons';
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
const MoreBlogOne = () => {
  return (
    <section className="blog">
    		<div className="blogSection">
	    		<div className="blogContainer">
					<div className="blogListWrapper">
						<div className="blogList">
							{
                               blogData.map((item,i)=> {
                                   return(i<=5 && (
                                    <Link 
                                    key={item.id}
                                    to={`/blogdetail/${item.id}`}
                                    >
                                        <BlogItem item={item}/>
                                    </Link>
                                   ))
                               }) 
                            }
						</div>
                        <div className="blogNavigation">
                            <Link to="/blog/page2">
                                Next
                            </Link>
                        </div>
					</div>	
	    		</div>
	    	</div>
    	</section>
  )
}

const MoreBlogTwo = () => {
    return (
      <section className="blog">
              <div className="blogSection">
                  <div className="blogContainer">
                      <div className="blogListWrapper">
                          <div className="blogList">
                              {
                                 blogData.map((item,i)=> {
                                     return(
                                        i>=6 && (
                                            <Link 
                                            key={item.id}
                                            to={`/blogdetail/${item.id}`}
                                            >
                                                <BlogItem item={item}/>
                                            </Link>
                                           )
                                     ) 
                                 }) 
                              }
                          </div>
                          <div className="blogNavigation">
                            <Link to="/blog/page1">
                                Previous
                            </Link>
                          </div>
                      </div>	
                  </div>
              </div>
          </section>
    )
  }

export {MoreBlogOne,MoreBlogTwo}