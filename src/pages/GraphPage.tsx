import React from "react";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const GraphPage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen type="auto">
        home
      </Screen>
    </ScreenFrame>
  );
}