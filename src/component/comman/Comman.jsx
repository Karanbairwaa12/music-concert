import React from 'react'
import './comman.css'
const Comman = ({item}) => {
  return (
    <div className="topContainers">
        	<div className="containerDiv">
        		<div className="containerDivWrapper">
        			<div className="containerDivTitle">{item.pageName}</div>
        			<h1>{item.pageTitle}</h1>
        			<p>Musical show organized world wide, you can join this musical 	show very
        				<br/>
						easily through this site and confirm your ticket with a click
					</p>
        		</div>
        	</div>
            
        </div>
  )
}

export default Comman