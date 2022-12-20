import {legacy_createStore as createStore} from 'redux'

let initialState = {
    name: 'kobe',
    count: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const store = createStore(reducer)

export default store