import React, {useState} from 'react'

function HookCounterIncrement() {

    const [count, setCount] = useState(0)

    return (
        <div>
            {/* Wrong way of incrementing the counter */}
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}

export default HookCounterIncrement
