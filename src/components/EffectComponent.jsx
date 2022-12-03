import React, {useEffect, useState} from 'react'
import axios from 'axios'

const EffectComponent = () => {
    const [data, setData] = useState({})

    const getData = () => {
        axios.get('https://www.swapi.tech/api/people/1')
        .then((res) => {
            setData(res.data.result.properties)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, [])
// useEffect (function, [dependency]) //

// If no dependency: Runs on every render
// If empty array: Runs only on the first render
// If props or state values: Runs on the first render and any time any dependency value changes

    return (
        <div className='card'>
            <h2>useEffect</h2>
            <h3>Name: {data.name}</h3>
        </div>
    )
}

export default EffectComponent