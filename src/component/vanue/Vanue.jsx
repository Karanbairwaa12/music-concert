import React from 'react'
import { vanueData } from './Vanue'
import './vanue.css'
const VanueItem= ({item}) => {
    return(
        <div className="vanueListItem">
            <div className="vanueImage">
                <a href="#" className="vanueImageLink">
                    <img src={item.img}/>   
                </a>
            </div>
            <div className="vanueContent">
                <div className="vanueMeta">
                    <a href="#" className="vanueCatagoryName">{item.city}</a>
                </div>
                <a href="#" className="vanueTitle">
                   {item.name}
                </a>
            </div>
        </div>
    )
}
const Vanue = () => {
  return (
    <section className="vanue">
    		<div className="vanueSection">
	    		<div className="vanueContainer">
					<div className="vanueListWrapper">
						<div className="vanueList">
							{
                               vanueData.map((item)=> {
                                   return <VanueItem item={item}/>
                               }) 
                            }
						</div>
					</div>	
	    		</div>
	    	</div>
    	</section>
  )
}

export default Vanue