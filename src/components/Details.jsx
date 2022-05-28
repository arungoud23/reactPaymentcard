import React from 'react'

const Details = (props) => {
  return (
    <>
    {/* <div>{props.case}</div> */}
    <div style={{backgroundColor:"black",color:"white",width:"100px",height:"30px",textAlign:"center"}}>{props.study}</div>
    <h1>{props.gift}</h1>
    <h1>{props.pay}</h1>
    <h4>{props.mobile}</h4>
    </>
  )
}

export default Details