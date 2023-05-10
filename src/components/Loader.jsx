import {Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{fontStyle:"14",color:"white",fontWeight:800,marginTop:40}}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader