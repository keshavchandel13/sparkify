import React from 'react'
import ScrollVelocity from './animation/Scrollvelocity'
function SparkifyScroll() {
  return (
    <div className='text-white'>
      <ScrollVelocity
  texts={['SPARKIFY', ' "Own The Real Posh" ']} 
  velocity={100} 
  className="custom-scroll-text"
/>
    </div>
  )
}

export default SparkifyScroll
