import React from "react";
import { Button } from "../components/Button/Button";
import { Logo } from "../components/Logo/Logo";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

/** error page */

export const ErrorPage: React.FunctionComponent = () => {

  return (
    <ScreenFrame>
      <Screen type="full" padding="2rem">
        <div className="onboardpage-graphics">
          <div className="moods-container fear">
            <img src="/img/blue_fear.svg" alt="fear" className="moods fear" />
          </div>
          <div className="moods-container anger">
            <img src="/img/red_anger.svg" alt="anger" className="moods anger" />
          </div>
          <div className="moods-container surprised">
            <img src="/img/purple_surprise.svg" alt="surprised" className="moods surprised" />
          </div>
          <div className="moods-container sad">
            <img src="/img/gray_sad.svg" alt="sad" className="moods sad" />
          </div>
          <div className="moods-container hopeful">
            <img src="/img/green_hopeful.svg" alt="hopeful" className="moods hopeful" />
          </div>
          <div className="moods-container happy">
            <img src="/img/yellow_happy.svg" alt="happy" className="moods happy" />
          </div>
        </div>
        <div className="data-button">
          <Button
            classname="button data-icon"
            backgroundColor="white"
            onClick={() => {}}
            padding="even"
            variant="primary"
          >
            <img className="data-button-icon" src="/icons/column-chart.svg" alt="bar-chart button" />
          </Button>
        </div>
        <div className="get-started-content">
          <div className="logo-container">
            <Logo />
          </div>
          <h1 className="bold">Uh-oh!</h1>
          <h3>You're vibin' a little too hard!</h3>
          <p><i>Click the logo to get you back home!</i></p>
        </div>
      </Screen>
    </ScreenFrame>
  );
}