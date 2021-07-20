import React from 'react'
import HookCounterOne from "../EffectHook/HookCounterOne"
import ClassCounterOne from "../EffectHook/ClassCounterOne"
import HookMouse from "../EffectHook/HookMouse"
import MouseContainer from "../EffectHook/MouseContainer"
import IntervalHookCounter from "../EffectHook/IntervalHookCounter"

function EffectHook() {
    return (
        <div>
            Effect Hook
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

export default EffectHook
