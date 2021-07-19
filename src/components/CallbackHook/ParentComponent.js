import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {

    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(10000)

    // useCallbak is use to send a cached function to the component during re-rendering in order to prevent the reload of component.
    // This will not invoke the function as contrary to the useMemo hook
    const incrementSalary = useCallback(() => {
        setSalary( prevSalary => prevSalary + 1000)
    }, [salary])

    const incrementAge = useCallback(() => {
        setAge( prevAge => prevAge + 1)
    }, [age])

    return (
        <div>
            <Title />
            <Count text='Age' count={age}/>
            <Button clickHandler={incrementAge} buttonTitle='Increment Age'></Button>
            <Count text='Salary' count={salary}/>
            <Button clickHandler={incrementSalary} buttonTitle='Increment Salary'></Button>
        </div>
    )
}

export default ParentComponent
