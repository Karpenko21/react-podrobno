import React from 'react';
import './App.css';
import {Rating} from "./component/Rating";
import {Accordion} from "./component/Accordion";

function App() {
    return (
        <div>
            <AppTitle appTitle={'This is App component'}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'My friends'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
