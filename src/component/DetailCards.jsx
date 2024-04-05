import React from 'react'
import "../styles/detailCard.css"
function DetailCards({ property, value }) {
  return (
    <div className='detail-card '>
      <p className='uppercase font-thin text-2xl'>{property[0]}</p>
      <h1 className='text-2xl  italic'>{value} {property[1]}</h1>
    </div>
  )
}

export default DetailCards