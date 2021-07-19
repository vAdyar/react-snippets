import React from 'react'

function Title() {
    console.log('Renndering title')
    return (
        <div>
            <h2>This is callBack hook</h2>
        </div>
    )
}

export default React.memo(Title)
