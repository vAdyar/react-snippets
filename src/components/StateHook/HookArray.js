import React, {useState} from 'react'

function HookArray() {
    const [items, setItems] = useState([])
    
// Need to spread the existing items in the array else will be set to null/empty
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookArray
 