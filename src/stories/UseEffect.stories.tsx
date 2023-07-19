import React, {useEffect, useMemo} from "react";
import {useState} from "react";
import {log} from "util";

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
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}


export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    /*   useEffect(() => {
           setTimeout(() => {
               console.log("setTimeout")
               document.title = counter.toString()
           }, 1000)
       }, [counter])*/


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval")
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*        <button onClick={() => setFake(fake+1)}>fake+</button>
        <button onClick={() => setCounter(counter +1)}>counter+</button>*/}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("component is rendering with" + counter)

    useEffect(() => {
        console.log("Effect occurred" + counter)
        return () => {
            console.log("reset effect" + counter)
        }
    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}


export const KeysTrackerExample = () => {

    const [text, setText] = useState("")

    console.log("component is rendering with" + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState("")

    console.log("component is rendering with" + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setText(("3 seconds passed"))
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}