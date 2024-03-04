import React, { useState } from 'react'

const InputButton = ({ checkAnswer }) => {
    const [answer, setAnswer] = useState('')
    
    //tomar datos del form enviado por el user

    const handleChange = (event) => {
        setAnswer(event.target.value)
    }

    const handleSubmit = () => {
        checkAnswer(answer)
        setAnswer('')
    }


    return (
        <div>
            <input
                type="text"
                size={40}
                placeholder='Write the movie based on the emoji'
                value={answer}
                onChange={handleChange}
                className='input-text'
            />
            <button onClick={handleSubmit}>Send</button>
        </div>
    )
}

export { InputButton }