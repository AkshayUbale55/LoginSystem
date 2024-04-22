import { useState } from "react"

export const useToggle = (initialvalue = false)=>{
    // provided the initial value so that useToggle function will return false initially
    const [state, setState] = useState(initialvalue)

    const Toggle = ()=>{
        setState((prev)=>!prev)
    }

    // if we pass the values in array then we can use the toggle function in other components with the custom state names
    return [state,Toggle]

    // if we return as aobject then the custom we import in an component will have the same state names and cannot use customised 
    // return {state,Toggle}

}