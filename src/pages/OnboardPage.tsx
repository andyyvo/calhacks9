import React from "react";
import { Button } from "../components/Button/Button";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

/** get started page */

export const OnboardPage: React.FunctionComponent = () => {

  return (
    <ScreenFrame>
      <Screen type="full" padding="2rem">
        <div className="onboardpage-graphics">

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
          <Button
            backgroundColor="yellow"
            onClick={() => {}}
            padding="large"
            variant="primary"
          >
            <h3 className="bold">Let us know!</h3>
          </Button>
        </div>
      </Screen>
    </ScreenFrame>
  );
}