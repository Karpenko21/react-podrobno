import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (isOn: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    const [isOn, setIsOn] = useState(props.defaultOn ? props.defaultOn : false)

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
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: isOn ? "green" : "red"
    }

    const onClicked = () => {
            setIsOn(true)
            props.onChange(true)
    }

    const offClicked = () => {
        setIsOn(false)
        props.onChange(false)
    }

    return (
        <div style={buttonsStyle}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

