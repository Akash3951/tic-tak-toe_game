import React from 'react'

const Square = (props) => {
    const box={
                border:'2px solid black',
                height:'100px', 
                width:'100px', 
                display:'flex', 
                alignItems:'center',
                justifyContent:'center'
            }

  return (
    <div className='square' style={box} onClick={props.onClick}>
      <h1>{props.value}</h1>
    </div>
  )
}

export default Square
