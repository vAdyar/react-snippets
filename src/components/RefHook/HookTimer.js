import React, { useState, useEffect, useRef } from 'react'
import FocusInput from './FocusInput'

function HookTimer() {

    const [timer, setTimer] = useState(0)
    // This can be used to create a generic container to store mutable values and will not re-render when the data it stores changes 
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook timer </button>
        </div>
    )
}

export default HookTimer
