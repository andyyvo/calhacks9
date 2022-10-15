import React from "react";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const HomePage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen type="auto">
        home
      </Screen>
    </ScreenFrame>
  );
}