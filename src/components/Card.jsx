import React from 'react'
import Details from './Details'
import Image from './Image'

const Card = ({id,color,img,study,gift,pay,mobile}) => {
  return (
    <div style={{backgroundColor:color}} className="card">
        <div className="first">
            <div className="date"><h2>28/10/2020</h2></div>
            <div>
               <Image img={img} /> 
            </div>
        </div>
        <div className="details">
        <Details study={study}  gift={gift} pay={pay} mobile={mobile} />
        </div>
    </div>
  )
}

export default Card