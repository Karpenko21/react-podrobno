import React from 'react';

import {UncontrolledRating} from "../../../src/component/UncontrolledRating/UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};



export const RatingMode = () => <UncontrolledRating/>



