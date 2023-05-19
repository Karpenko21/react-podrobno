import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.collapsed)}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={props.onClick}>{props.title}</h2>
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