import React, {useState} from 'react';
import {Select} from "../component/Select/Select";


export default {
    title: 'components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'color'
        },
        backgroundColor: {control: 'color'},
    },
};


export const WithValue = () => {

    const [value, setValue] = useState("2")

    return (
        <Select
            onChange={setValue}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}
            ]}
            value={value}
           />

    )
}


export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <Select
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}
            ]}
            onChange={setValue}/>
    )
}

