import React, { useState } from 'react'
import { Movie } from './components/Movie'
import { InputButton } from './components/InputButton'
import { LivesCounter } from './components/LivesCounter'
import { ScoreCounter } from './components/ScoreCounter'



//logica juego

//objeto de peliculas
const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
  { name: "The Matrix", emoji: "🕶️💊👽" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "The Lion King", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
  { name: "The Terminator", emoji: "🤖🔫🕶️" },
  { name: "Indiana Jones", emoji: "🤠🔍💎" },
  { name: "Back to the Future", emoji: "⏰🚗💥" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  { name: "The Godfather", emoji: "🍕🤵🔫" },
  { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
  { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
  { name: "Schindler's List", emoji: "📜🚂🔴" },
  { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
  { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
  { name: "Fight Club", emoji: "👊💼🚽" },
  { name: "Inception", emoji: "🌀👩‍🚀🎩" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
];

const App = () => {
  //indice pelicula actual
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0)
  //useState para score y vidas
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)

  const checkAnswer = (answer) => {
    //conviertir a minusculas nombres de las peliculas en el objet
    const currentMovie = movies[currentMovieIndex].name.toLowerCase()

    //comparar la respuesta del jugador
    if (answer.toLowerCase() === currentMovie) {
      setScore(score + 1)
      setCurrentMovieIndex(currentMovieIndex + 1)
    } else {
      setLives(lives - 1)
      if (lives === 1) {
        alert('Game Over - Try Again')
      }
    }
  }

  return (
    <div>
      <div className='container'>
        <div className='header'>
          <ScoreCounter score={score} />
          <LivesCounter lives={lives} />
        </div>
        <div className='movie-container'>

          <Movie emoji={movies[currentMovieIndex].emoji} />
        </div>
        <div className='input-container'>
          <InputButton checkAnswer={checkAnswer} />

        </div>

      </div>






    </div>
  )
}

export default App
