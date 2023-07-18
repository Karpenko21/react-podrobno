import React, {useMemo} from "react";
import {useState} from "react";

export default {
    title: 'useState demo',
}

function  generateData() {
    //difficult counting
    console.log('generateData')
    return 6646464465848;
}

export const Example1 = () => {
    console.log("Example 1 ")
    //const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData) // 6646464465848

    const changer = (state: number) => state + 1


    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}