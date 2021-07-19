import React, {useReducer, useContext} from 'react'
import ComponentC from './ComponentC'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import CounterOne from './CounterOne'
import CounterThree from './CounterThree'
import CounterTwo from './CounterTwo'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Reducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CounterOne />
            <hr />
            <CounterTwo />
            <hr />
            <CounterThree />
            <hr /><hr />
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <ComponentA />
            <hr />
            <ComponentB />
            <hr />
            <ComponentC />
            {count}
            <hr /> <hr />
            </CountContext.Provider>
        </div>
    )
}

export default Reducer
