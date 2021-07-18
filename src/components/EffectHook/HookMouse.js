import React, {useState, useEffect} from 'react'

function HookMouse() {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event: ')
        setX(e.clientX)
        setY(e.clientY)
    }

// This returns a clean up code
    useEffect(() => {
        console.log('UseEffect called')
        window.addEventListener('mousemove', logMousePosition)

        
        return () => {
            console.log('Component unmount code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) // Using empty array to specify to call it only on the initial render
    
    return (
        <div>
            Hook X: {x} Y: {y}
        </div>
    )
}

export default HookMouse
