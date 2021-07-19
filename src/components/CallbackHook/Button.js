import React from 'react'

function Button({ clickHandler, buttonTitle}) {
    console.log('Rendering button', buttonTitle)
    return (
    
        <button onClick={clickHandler}>
            {buttonTitle}
        </button>
        
    )
}

export default React.memo(Button)
