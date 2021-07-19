import React, {useContext} from 'react'
import {CountContext} from './Reducer'

function ComponentA() {
    const count = useContext(CountContext)

    return (
        <div>
            Component A: {count.countState}
            <button onClick={() => count.countDispatch('increment')}>Increment</button>
            <button onClick={() => count.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => count.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
