import React from "react";
import { ScreenFrame } from "../components/Screen/ScreenFrame";
import { Screen } from "../components/Screen/Screen";
import { Button } from "../components/Button/Button";
import { NavBar } from "../components/NavBar/NavBar";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { generateUUID } from "../config/generateRandomUUID";
import { writeMoodData } from "../config/onboardSubmit";

/** get user berkeley dept/school and their mood */

export const OnboardPage: React.FunctionComponent = () => {
  const [mood1, setMood1] = React.useState(false);
  const [mood2, setMood2] = React.useState(false);
  const [mood3, setMood3] = React.useState(false);
  const [mood4, setMood4] = React.useState(false);
  const [mood5, setMood5] = React.useState(false);
  const [mood6, setMood6] = React.useState(false);
  const [dept, setDept] = React.useState('');

  /** get session cookie uuid */
  const cookie = generateUUID();

  /** get 6 random moods: fear, anger, anticipation, surprise, joy, sad */
  const moods = {
    m1: "fear",
    m2: "anger",
    m3: "anticipation",
    m4: "surprise",
    m5: "joy",
    m6: "sad"
  }

  const handleOnClick1 = () => {
    setMood1(true);
    setMood2(false);
    setMood3(false);
    setMood4(false);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
  }

  const handleOnClick2 = () => {
    setMood1(false);
    setMood2(true);
    setMood3(false);
    setMood4(false);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
  }

  const handleOnClick3 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(true);
    setMood4(false);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
  }

  const handleOnClick4 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(false);
    setMood4(true);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
  }

  const handleOnClick5 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(false);
    setMood4(false);
    setMood5(true);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
  }

  const handleOnClick6 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(false);
    setMood4(false);
    setMood5(false);
    setMood6(true);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setDept(event.target.value as string);
  }

  const handleOnSubmit = () => {
    if (mood1) {
      writeMoodData(cookie, dept, moods.m1);
    } else if (mood2) {
      writeMoodData(cookie, dept, moods.m2);
    } else if (mood3) {
      writeMoodData(cookie, dept, moods.m3);
    } else if (mood4) {
      writeMoodData(cookie, dept, moods.m4);
    } else if (mood5) {
      writeMoodData(cookie, dept, moods.m5);
    } else if (mood6) {
      writeMoodData(cookie, dept, moods.m6);
    }
  }

  return (
    <ScreenFrame>
      <NavBar />
      <Screen type={"full"} padding={'2rem'}>
        <div className="mood-select">
          <h1>SELECT A MOOD</h1>
          <div className="mood-select_options">
            <Button variant="primary" padding="large" toggle={mood1} onClick={handleOnClick1}>fear</Button>
            <Button variant="secondary" padding="large" toggle={mood2} onClick={handleOnClick2}>anger</Button>
            <Button variant="link" padding="large" toggle={mood3} onClick={handleOnClick3}>anticipation</Button>
            <Button variant="primary" padding="large" toggle={mood4} onClick={handleOnClick4}>surprise</Button>
            <Button variant="secondary" padding="large" toggle={mood5} onClick={handleOnClick5}>joy</Button>
            <Button variant="link" padding="large" toggle={mood6} onClick={handleOnClick6}>sad</Button>
          </div>
        </div>
        <div className="berkeley-dept">
          <h2>CHOOSE A SCHOOL</h2>
          <div className="berkeley-dept_dropdown">
            <FormControl fullWidth>
              <InputLabel id="berkeley-dept-select-label">School/College</InputLabel>
              <Select
                labelId="berkeley-dept-select-label"
                id="berkeley-dept-select"
                value={dept}
                label="School/College"
                onChange={handleSelectChange}
              >
                <MenuItem value={"Business"}>Business</MenuItem>
                <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                <MenuItem value={"Computing, Data Science & Society"}>Computing, Data Science & Society</MenuItem>
                <MenuItem value={"Education"}>Education</MenuItem>
                <MenuItem value={"Engineering"}>Engineering</MenuItem>
                <MenuItem value={"Environmental Design"}>Environmental Design</MenuItem>
                <MenuItem value={"Information"}>Information</MenuItem>
                <MenuItem value={"Journalism"}>Journalism</MenuItem>
                <MenuItem value={"Law"}>Law</MenuItem>
                <MenuItem value={"Letters & Science"}>Letters & Science</MenuItem>
                <MenuItem value={"Natural Resources"}>Natural Resources</MenuItem>
                <MenuItem value={"Optometry"}>Optometry</MenuItem>
                <MenuItem value={"Public Health"}>Public Health</MenuItem>
                <MenuItem value={"Public Policy"}>Public Policy</MenuItem>
                <MenuItem value={"Social Welfare"}>Social Welfare</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="submit-onboard">
          <Button
            onClick={handleOnSubmit}
            padding="large"
            variant="primary"
          >
            SUBMIT
          </Button>
        </div>
      </Screen>
    </ScreenFrame>
  );
}