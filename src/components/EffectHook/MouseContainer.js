import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(prevValue => !prevValue)}>Toggle display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
