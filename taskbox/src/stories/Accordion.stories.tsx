import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "../../../src/component/Accordion/Accordion";
import {action} from '@storybook/addon-actions'
import {Story} from "@storybook/react";

export default {
    title: 'components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        color:{
            control: 'color'
        },
        backgroundColor: {control: 'color'},
    },
};


const callback = action("accordion mode change event fired")
/*const OnClickCallBack = action("some otem was clicked")*/


const Template: Story<AccordionPropsType> = (args)=> <Accordion  {...args}/>
/*const callbackProps = {
    onClick: callback,
}*/

export const MenuCollapsedMode2= Template.bind({})
MenuCollapsedMode2.args = {
    titleValue: "Menu",
    onClick: callback,
    collapsed: true,
    color: "red"
}


export const UsersCollapsedMode2= Template.bind({})
UsersCollapsedMode2.args = {
    titleValue: "Users",
    onClick: callback,
    collapsed: true,
    color: "red"
}



export const MenuCollapsedMode=() => <Accordion titleValue={"Menu"} onClick={callback} collapsed={true} color={"red"}/>

export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} onClick={callback} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onClick={() => setValue(!value)}/>
}