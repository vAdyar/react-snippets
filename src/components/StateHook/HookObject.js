import React, {useState} from 'react'

function HookObject() {

    const [name, setName] = useState({firstName: '', lastName:''})
    
    // useState need to use the original object as the newer objects would be immuable 
    return (
        <form>
            <input 
                type='text' 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value })}
            />
            <input 
                type='text' 
                value={name.lastName} 
                onChange={e => setName({...name, lastName: e.target.value })}
            />

            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
        </form>
    )
}

export default HookObject