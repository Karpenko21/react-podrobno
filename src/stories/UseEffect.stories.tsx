import React, {useEffect, useMemo} from "react";
import {useState} from "react";

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SimpleExample")
    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User "
    })

    useEffect(() => {
        console.log("useEffect only first render (like componentDidMount")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter changing")
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter}{fake}
        <button onClick={() => setFake(fake+1)}>fake+</button>
        <button onClick={() => setCounter(counter +1)}>counter+</button>
    </>
}