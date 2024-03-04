import React from 'react'

const Movie = ({ emoji }) => {
  return (
    <div>
        <h2>Guess The Movie</h2>
        <div className='emoji'>{emoji}</div>
    </div>
  )
}

export {Movie}