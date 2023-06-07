import React from "react";


export type ItemsType = {
    title:string
    value: number

}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Optional color of header text
     */
    color?: string
    items: ItemsType[]
    onClick: (value: number) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color} />
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string



}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 style={{color: props.color ? props.color : "black"}}
            onClick={(e) => props.onChange}>{props.title}</h3>
    )
}


export type AccordionBodyPropsType = {
    onClick: (value: number) => void
    items: ItemsType[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=>props.onClick(i.value)} key={index}>{i.title}</li> )}
        </ul>
    )
}





/*

export default {
    title: 'components/Accordion',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'color'
        },
        backgroundColor: {control: 'color'},
    },
};


export const MenuCollapsedMode = () => <Select />

export const UsersUncollapsedMode = () => <Select
    items={[
        {title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}
    ]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<>()
    return <Select  collapsed={value}
                    items={[
                        {title: "Dimych", value: 1},
                        {title: "Valera", value: 2},
                        {title: "Artem", value: 3},
                        {title: "Victor", value: 4}
                    ]}/>
}
*!/

*/