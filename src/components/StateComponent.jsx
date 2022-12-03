import React, {useState} from 'react'

const StateComponent = () => {
    const [userInput, setUserInput] = useState("")
// const [the current state, function that updates the state] = useState(initial state) //
    const handleUpdateState = (e) => {setUserInput(e.target.value)}

  return (
    <div className='card'>
        <h2>useState</h2>
        <h3>State: {userInput}</h3>
        <input type="text" onChange={handleUpdateState}/>
    </div>
  )
}

export default StateComponent