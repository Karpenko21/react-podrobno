import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";


type UncontrolledAccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    //const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})


    return (
        <div>
          {/*  <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={() => props.onClick()}>{props.title}</h2>
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