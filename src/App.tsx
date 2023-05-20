import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./component/Rating/Rating";
import {Accordion} from "./component/Accordion/Accordion";
import {OnOff} from "./component/OnOff/OnOff";
import {UncontrolledAccordion} from "./component/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./component/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./component/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [isOn, setIsOn] = useState<boolean>(false)

    return (
        <div>
            <AppTitle appTitle={'This is App component'}/>

            <OnOff isOn={isOn} onClick={setIsOn}/>
            <OnOff isOn={isOn} onClick={setIsOn}/>


            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'My friends'}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <Accordion titleValue={"My friend"}
                       collapsed={accordionCollapsed}
                       onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledOnOff onChange={setIsOn}/> {isOn.toString()}
            <UncontrolledOnOff onChange={setIsOn}/> {isOn.toString()}


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
