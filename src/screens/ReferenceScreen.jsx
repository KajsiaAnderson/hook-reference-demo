import React from 'react'
import StateComponent from '../components/StateComponent'
import EffectComponent from '../components/EffectComponent'
import RefComponent from '../components/RefComponent'

const ReferenceScreen = () => {
  return (
    <div className='col-container'>
        <h1>Reference</h1>
        <StateComponent />
        <EffectComponent />
        <RefComponent />
    </div>
  )
}

export default ReferenceScreen