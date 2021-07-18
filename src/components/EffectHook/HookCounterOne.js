import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // Calls after every render of the component
    useEffect(() => {
        console.log('Function effect updating')

        document.title = `Function clicked ${count} times`
    }, [count]) //Use the array to specify the changing variable to run effect

    return (
        <div>
            <input
                 type='text' 
                 value={name}
                 onChange={e => {
                     setName(e.target.value)
                 }}
                />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
