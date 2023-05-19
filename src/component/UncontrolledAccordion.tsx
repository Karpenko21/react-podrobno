import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={()=> {setCollapsed(!collapsed)}}>TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2>{props.title}</h2>
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