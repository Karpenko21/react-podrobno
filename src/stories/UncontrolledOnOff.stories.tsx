import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "../component/UncontrolledOnOff/UncontrolledOnOff";


export default {
    title: 'components/UncontrolledOnOff',
    component: UncontrolledOnOff,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const callback = action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>

export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>


export const DefaultInputValue=() => <input defaultValue={"yo"}/>