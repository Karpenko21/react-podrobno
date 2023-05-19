import React, {useState} from 'react';

type OnOffPropsType = {
   /* isOn: boolean | null*/
}

export const OnOff = (props: OnOffPropsType) => {

    const [isOn, setIsOn] = useState(false)

    const buttonsStyle = {
        margin: "20px"
    }

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: isOn ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: isOn ? "white" : "red"
    }
    const  indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: isOn ? "green" : "red"
    }


        return (
        <div style={buttonsStyle}>
            <div style={onStyle} onClick={() => {setIsOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {setIsOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

