import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne( prevCount => prevCount + 1)
    }

    const incrementTwo = () => {
        setCounterTwo( prevCount => prevCount + 1)
    }

    // useMemo invokes the provided function and caches the response of it.
    const isEven =  useMemo(() => {
        let i = 0
        while ( i<500 ) {
            i++ }
        return counterOne % 2 === 0;
    }, [counterOne])

    

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count one - {counterOne}</button>
                <span> {isEven ? 'EVEN' : 'ODD'} </span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
