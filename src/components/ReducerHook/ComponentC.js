import React, {useContext} from 'react'
import {CountContext} from './Reducer'

function ComponentC() {
    const count = useContext(CountContext)

    return (
        <div>
            Component C: {count.countState}
            <button onClick={() => count.countDispatch('increment')}>Increment</button>
            <button onClick={() => count.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => count.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentC
