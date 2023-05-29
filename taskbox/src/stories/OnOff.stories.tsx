import React, {useState} from 'react';
import {OnOff} from "../../../src/component/OnOff/OnOff";
import {action} from '@storybook/addon-actions'

export default {
    title: 'components/OnOff',
    component: OnOff,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};


const callback = action("on or Off clicked")
export const OnMode = () => <OnOff isOn={true} onClick={callback}/>

export const OffMode = () => <OnOff isOn={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff isOn={value} onClick={setValue}/>
}