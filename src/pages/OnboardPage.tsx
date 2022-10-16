import React from "react";
import { Button } from "../components/Button/Button";
import { Logo } from "../components/Logo/Logo";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";
import { Link } from "react-router-dom";

/** get started page */

export const OnboardPage: React.FunctionComponent = () => {

  return (
    <ScreenFrame>
      <Screen classname="screen onboard" type="full" padding="2rem">
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
            <img src="/img/green_anticipation.svg" alt="hopeful" className="moods hopeful" />
          </div>
          <div className="moods-container happy">
            <img src="/img/yellow_happy.svg" alt="happy" className="moods happy" />
          </div>
        </div>
        <div className="data-button">
          <Link to="/home">
            <Button
              classname="button data-icon"
              backgroundColor="white"
              padding="even"
              variant="primary"
            >
              <img className="data-button-icon" src="/icons/column-chart.svg" alt="bar-chart button" />
            </Button>
          </Link>
        </div>
        <div className="get-started-content">
          <div className="logo-container">
            <Logo />
          </div>
          <h1 className="bold">Hey Cal student! How are you doing today?</h1>
          <Link to="/mood">
            <Button
              backgroundColor="yellow"
              padding="large"
              variant="primary"
            >
              <h3 className="bold">Let us know!</h3>
            </Button>
          </Link>
        </div>
      </Screen>
    </ScreenFrame>
  );
}