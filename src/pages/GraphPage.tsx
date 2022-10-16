import React from "react";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";
import '../styles/pages/_GraphPage.scss';
import MoodRatios from "../components/MoodRatios/MoodRatios"
import Map from "../components/Map/Map"


export const GraphPage: React.FunctionComponent = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <ScreenFrame>
      <Screen type="auto">
        <div id="grid-container">
          <div id="grid-item-top">
            <h1>How is UC Berkeley doing today?</h1>
            <h3 className="date">{date}</h3> 
          </div>

          <div id="grid-item-bottom-left">
              <MoodRatios/>
          </div>

          <div id="grid-item-bottom-right">
              <Map/>
          </div>
        </div>
      </Screen>
    </ScreenFrame>
  );
}