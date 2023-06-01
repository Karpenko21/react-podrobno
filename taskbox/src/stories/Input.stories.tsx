import React, {ChangeEvent, useRef, useState} from 'react';

import {} from "../../../src/component/UncontrolledRating/UncontrolledRating";


export default {
    title: 'input',
    //component: Input,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};


export const UncontrolledInput = () => <input value={"hey"}/>

export const TrackValueControlledInputWith = () => {
    const [value, setValue] = useState("")
    return (
        <>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setValue(e.currentTarget.value)
            }
            }/> ---{value}
        </>
    )
}


export const GetValueControlledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value: {value}
        </>
    )
}
