import React, { useState } from 'react'

/*
    [ 마우스무브 ]
*/
const Event03 = () => {
    const [mouseP, setMouseP] =useState({x:0, y:0});

    const handleMouseMove = (e) => {
        setMouseP({x:e.clientX, y:e.clientY})
    }
  return (
    <div onMouseMove={handleMouseMove} style={{height:'200px',background:'red'}}>
        <p>x:{mouseP.x}, y:{mouseP.y}</p>
    </div>
  )
}

export default Event03