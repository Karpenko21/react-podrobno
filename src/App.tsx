import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./component/Rating/Rating";
import {Accordion} from "./component/Accordion/Accordion";
import {OnOff} from "./component/OnOff/OnOff";
import {UncontrolledAccordion} from "./component/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./component/UncontrolledRating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState <RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState <boolean>(false)

    return (
        <div>
            <AppTitle appTitle={'This is App component'}/>
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'My friends'} />

            <Accordion titleValue={"Menu"} collapsed={false}/>

            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <OnOff/>
            <OnOff/>
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
