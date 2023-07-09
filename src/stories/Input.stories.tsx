import React, {ChangeEvent, useRef, useState} from 'react';

import {action} from "@storybook/addon-actions";


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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    return (
        <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}
        />
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    return (
        <input type="checkbox" checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}
        />
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"1"}>Kiev</option>
    </select>
}


export const GetValueControlledInputByButtonPress = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </>
}
