import React from 'react';
import {UncontrolledAccordion} from "../../../src/component/UncontrolledAccordion/UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};



export const MenuMode = () => <UncontrolledAccordion titleValue={"Menu"}/>

export const UsersMode = () => <UncontrolledAccordion titleValue={"Users"}/>


