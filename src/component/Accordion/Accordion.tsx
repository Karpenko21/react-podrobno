import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    /**
     * Optional color of header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 style={{color: props.color ? props.color : "black"}}
            onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}