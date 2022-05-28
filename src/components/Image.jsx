import React from 'react'
import "../App.css"

const Image = (props) => {
  return (
    <div>
        <img src={props.img} alt="amazon" className="avatar"/>
    </div>
  )
}

export default Image