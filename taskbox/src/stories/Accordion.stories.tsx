import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "../../../src/component/Accordion/Accordion";
import {action} from '@storybook/addon-actions'
import {Story} from "@storybook/react";

export default {
    title: 'components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'color'
        },
        backgroundColor: {control: 'color'},
    },
};


const callback = action("accordion mode change event fired")
const OnClickCallBack = action("some item was clicked")


const Template: Story<AccordionPropsType> = (args) => <Accordion  {...args}/>
/*const callbackProps = {
    onClick: callback,
}*/

export const MenuCollapsedMode2 = Template.bind({})
MenuCollapsedMode2.args = {
    titleValue: "Menu",
    onChange: callback,
    collapsed: true,
    color: "red"
}


export const UsersCollapsedMode2 = Template.bind({})
UsersCollapsedMode2.args = {
    titleValue: "Users",
    onChange: callback,
    collapsed: true,
    color: "red"
}


export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  onChange={callback}
                                                  collapsed={true}
                                                  color={"red"} items={[]}
                                                  onClick={OnClickCallBack}/>

export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"}
                                                     onChange={callback}
                                                     onClick={OnClickCallBack}
                                                     collapsed={false}
                                                     items={[
                                                         {title: "Dimych", value: 1},
                                                         {title: "Valera", value: 2},
                                                         {title: "Artem", value: 3},
                                                         {title: "Victor", value: 4}
                                                     ]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onClick={OnClickCallBack}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Valera", value: 2},
                          {title: "Artem", value: 3},
                          {title: "Victor", value: 4}
                      ]}/>
}