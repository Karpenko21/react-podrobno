import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "../component/UncontrolledRating/UncontrolledRating";

export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const callback = action("rating was changed inside component")

export const EmptyRaring = () => <UncontrolledRating defaultRating={0} onClick={callback}/>
export const Rating1 = () => <UncontrolledRating defaultRating={1} onClick={callback}/>
export const Rating2 = () => <UncontrolledRating defaultRating={2} onClick={callback}/>
export const Rating3 = () => <UncontrolledRating defaultRating={3} onClick={callback}/>
export const Rating4 = () => <UncontrolledRating defaultRating={4} onClick={callback}/>
export const Rating5 = () => <UncontrolledRating defaultRating={5} onClick={callback}/>



