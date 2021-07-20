import HookCounterIncrement from './HookCounterIncrement'
import HookCounterPreviousState from './HookCounterPreviousState'
import HookObject from './HookObject'
import HookArray from './HookArray'
 
const About = () => {
    return (
        <div>
            State example
            <hr />
            HookCounterOne: 
            <HookCounterIncrement></HookCounterIncrement>
            <hr></hr>
            HookCounterTwo: 
            <HookCounterPreviousState></HookCounterPreviousState>
            <hr></hr>
            HookCounterThree: 
            <HookObject/>
            <hr></hr>
            HookArray:
            <HookArray />
            <hr></hr> <hr />
        </div>
    )
}

export default About
