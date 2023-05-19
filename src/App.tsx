import React from 'react';
import './App.css';
import {Rating} from "./component/Rating";
import {Accordion} from "./component/Accordion";
import {OnOff} from "./component/OnOff/OnOff";
import {UncontrolledAccordion} from "./component/UncontrolledAccordion";

function App() {

    return (
        <div>
            <AppTitle appTitle={'This is App component'}/>
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'My friends'} />

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff/>
            <OnOff />
            <OnOff/>

        </div>
    )
}

type AppTitlePropsType = {
    appTitle: string
}
function AppTitle(props: AppTitlePropsType) {
    return (
        <>{props.appTitle}</>
    )
}

export default App;
