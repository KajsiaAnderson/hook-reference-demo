import React, { useRef } from 'react'

const RefComponent = () => {
    const inputRef = useRef()

    const checkRef = () => {
        alert(`Your input has the string: ${inputRef.current.value}`)
        inputRef.current.value = ''
        inputRef.current.focus()
        //current.value makes the input empty, current.focus moves the cursor back into the input field. 
    }

    return (
        <div className='card'>
            <h2>useRef</h2>
            <input type='text' ref={inputRef} />
            <button onClick={checkRef}>What's my ref?</button>
        </div>
    )
}

export default RefComponent