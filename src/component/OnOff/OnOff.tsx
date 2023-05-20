import React, {useState} from 'react';

type OnOffPropsType = {
    isOn: boolean,
    onClick: (isOn: boolean) => void
}


export const OnOff = (props: OnOffPropsType) => {

    const buttonsStyle = {
        margin: "20px"
    }

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.isOn ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.isOn ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.isOn ? "green" : "red"
    }


    return (
        <div style={buttonsStyle}>
            <div style={onStyle}
                 onClick={() => {
                     props.onClick(true)
                 }}>
                On
            </div>
            <div style={offStyle}
                 onClick={() => {
                     props.onClick(false)
                 }}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

