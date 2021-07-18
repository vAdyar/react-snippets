import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function ContextTest() {
    return (
        <div>
            <UserContext.Provider value={'Vikas'} >
                <ChannelContext.Provider value={'Code evolution'}>
                    <ComponentC /> 
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ContextTest
