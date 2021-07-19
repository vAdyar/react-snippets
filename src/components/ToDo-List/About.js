import { Link } from "react-router-dom"
import HookCounterIncrement from '../StateHook/HookCounterIncrement'
import HookCounterPreviousState from '../StateHook/HookCounterPreviousState'
import HookObject from '../StateHook/HookObject'
import HookArray from '../StateHook/HookArray'
import HookCounterOne from "../EffectHook/HookCounterOne"
import ClassCounterOne from "../EffectHook/ClassCounterOne"
import HookMouse from "../EffectHook/HookMouse"
import MouseContainer from "../EffectHook/MouseContainer"
import IntervalHookCounter from "../EffectHook/IntervalHookCounter"
 
const About = () => {
    return (
        <div>
            <hr />
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
            useEffect examples
            <hr />
            Functional component (Conditional effect):
            <HookCounterOne />
            <hr></hr>
            Class Component:
            <ClassCounterOne />
            <hr></hr>
            Calling effect only once (ComponentDidMount):
            {/* <HookMouse /> */}
            <hr />
            <MouseContainer />
            <hr />
            <IntervalHookCounter />
            <hr /> <hr />
        </div>
    )
}

export default About
