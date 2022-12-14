import React from "react";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";
import '../styles/pages/_GraphPage.scss';
import { MoodMap} from "../components/DataVis/MoodMap"
import { MoodRatios } from "../components/DataVis/MoodRatios";
// import { MoodMap } from "../components/DataVis/MoodMap";
import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";


export const GraphPage: React.FunctionComponent = () => {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  return (
    <ScreenFrame>
      <Screen type="auto">
      <div className="data-button">
          <Link to="/">
            <Button
              classname="button data-icon"
              backgroundColor="white"
              padding="even"
              variant="primary"
            >
              <img className="data-button-icon" src="/icons/home.svg" alt="home button" />
            </Button>
          </Link>
        </div>
        <div id="grid-container">
          <div id="grid-item-top">
            <h1>How is UC Berkeley doing today?</h1>
            <h3 className="date">{date}</h3> 
          </div>

          <div id="grid-item-bottom-left">
              <MoodRatios/>
          </div>

          <div id="grid-item-bottom-right">
              <MoodMap/>
          </div>
          <div>
          </div>
        </div>
      </Screen>
    </ScreenFrame>
  );
}