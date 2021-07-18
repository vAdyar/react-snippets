import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const[count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
        // setCount(count + 1)  // If you use this you need to mentions the dependency array in the useEffect
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])  

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
