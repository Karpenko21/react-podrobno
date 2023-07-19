import React, {useState} from 'react';
import {Clock} from "../component/Clock/Clock";


export default {
    title: 'components/Clock',
    component: Clock,
    tags: ['autodocs'],
};


export const BaseAnalogExample = () => {

    return <Clock mode={'analog'}/>
}


export const BaseDigitalExample = () => {

    return <Clock  mode={'digital'}/>
}

