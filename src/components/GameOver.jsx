import React from 'react'

const GameOver = ( {restartGame} ) => {
  return (
    <div>
        <h3>Game Over - Try Again</h3>
        <button onClick={restartGame}>Restart</button>
    </div>
  )
}

export {GameOver}