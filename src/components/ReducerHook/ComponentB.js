import React, {useContext} from 'react'
import {CountContext} from './Reducer'

function ComponentB() {
    const count = useContext(CountContext)

    return (
        <div>
            Component B: {count.countState}
            <button onClick={() => count.countDispatch('increment')}>Increment</button>
            <button onClick={() => count.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => count.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentB
