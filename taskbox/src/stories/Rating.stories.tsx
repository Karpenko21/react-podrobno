import React, {useState} from "react";
import {Rating, RatingValueType} from "../../../src/component/Rating/Rating";



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Rating stoties',
    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const EmptyStars = () => <Rating value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>

export const RatingChanging = () => {
    const [rating, setRaring] = useState<RatingValueType>(5)
        return <Rating value={rating} onClick={setRaring}/>
        }


