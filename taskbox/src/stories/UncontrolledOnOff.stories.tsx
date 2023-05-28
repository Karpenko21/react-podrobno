import React, {useState} from 'react';
import {UncontrolledOnOff} from "../../../src/component/UncontrolledOnOff/UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};


export const OnOffMode = () => {
    const [isOn, setIsOn] = useState<boolean>(true)
    return (
        <UncontrolledOnOff onChange={setIsOn}/>
    )
}