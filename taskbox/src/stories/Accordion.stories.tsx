import React, {useState} from 'react';
import {Accordion} from "../../../src/component/Accordion/Accordion";
import {action} from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};


const callback = action("accordion mode change event fired")
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} onClick={callback} collapsed={true}/>

export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} onClick={callback} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"}  collapsed={value} onClick={()=>setValue(!value)}/>
}