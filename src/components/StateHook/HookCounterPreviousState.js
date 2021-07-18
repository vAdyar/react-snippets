import React, {useState} from 'react'

function HookCounterPreviousState() {
    const initialCount = 0;
    // Array destructuring: useState is used to set the initial state & assign the value to a variable and also a setUpdate state function.
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
            
        </div>
    )
}

export default HookCounterPreviousState
