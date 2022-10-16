import React from "react";
import { ScreenFrame } from "../components/Screen/ScreenFrame";
import { Screen } from "../components/Screen/Screen";
import { Button } from "../components/Button/Button";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { generateUUID } from "../config/generateRandomUUID";
import { writeMoodData } from "../config/onboardSubmit";
import { Link } from "react-router-dom";
import { moodGenerator } from "../config/generateMoods";

/** get user berkeley dept/school and their mood */

export const MoodPage: React.FunctionComponent = () => {
  // mood state hooks
  const [mood1, setMood1] = React.useState(false);
  const [mood2, setMood2] = React.useState(false);
  const [mood3, setMood3] = React.useState(false);
  const [mood4, setMood4] = React.useState(false);
  const [mood5, setMood5] = React.useState(false);
  const [mood6, setMood6] = React.useState(false);
  // dept state hook
  const [dept, setDept] = React.useState('');
  // did a mood get selected
  const [isMood, setIsMood] = React.useState(false);
  // did a dept get selected
  const [isDept, setIsDept] = React.useState(false);

  /** get session cookie uuid */
  const cookie = generateUUID();

  /** get 6 random moods: fear, anger, anticipation, surprise, joy, sad */
  const moodsList: string[] = moodGenerator();
  const moods = {
    m1: moodsList[0],
    m2: moodsList[1],
    m3: moodsList[2],
    m4: moodsList[3],
    m5: moodsList[4],
    m6: moodsList[5]
  }

  const handleOnClick1 = () => {
    setMood1(true);
    setMood2(false);
    setMood3(false);
    setMood4(false);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
    setIsMood(true);
  }

  const handleOnClick2 = () => {
    setMood1(false);
    setMood2(true);
    setMood3(false);
    setMood4(false);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
    setIsMood(true);
  }

  const handleOnClick3 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(true);
    setMood4(false);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
    setIsMood(true);
  }

  const handleOnClick4 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(false);
    setMood4(true);
    setMood5(false);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
    setIsMood(true);
  }

  const handleOnClick5 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(false);
    setMood4(false);
    setMood5(true);
    setMood6(false);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
    setIsMood(true);
  }

  const handleOnClick6 = () => {
    setMood1(false);
    setMood2(false);
    setMood3(false);
    setMood4(false);
    setMood5(false);
    setMood6(true);
    console.log(mood1, mood2, mood3, mood4, mood5, mood6);
    setIsMood(true);
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setDept(event.target.value as string);
    setIsDept(true);
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

  const showSubmitBtn = (
    (isDept && isMood) ? (
      <Link to="/home">
        <Button
          backgroundColor="yellow"
          onClick={handleOnSubmit}
          padding="large"
          variant="primary"
          isDisabled={!(isDept && isMood)}
        >
          <h3 className="bold">SEND MOODZ</h3>
        </Button>
      </Link>
    ) : (
      <></>
    )
  );

  return (
    <ScreenFrame>
      <Screen classname="screen moodpage" type="full" padding="2rem">
        <div className="mood-select">
          <h1 className="bold">Alright, what's the vibe?</h1>
          <div className="mood-select_options">
            <div className="mood-select-option">
              <img className="mood-image" src="/img/face_fear.svg" alt="fear mood"/>
              <Button variant="link" padding="large" toggle={mood1} onClick={handleOnClick1}><h2 className="bold">{moods.m1}</h2></Button>
            </div>
            <div className="mood-select-option">
              <img className="mood-image" src="/img/face_anger.svg" alt="anger mood"/>
              <Button variant="link" padding="large" toggle={mood2} onClick={handleOnClick2}><h2 className="bold">{moods.m2}</h2></Button>
            </div>
            <div className="mood-select-option">
              <img className="mood-image" src="/img/face_hopeful.svg" alt="anticipation mood"/>
              <Button variant="link" padding="large" toggle={mood3} onClick={handleOnClick3}><h2 className="bold">{moods.m3}</h2></Button>
            </div>
            <div className="mood-select-option">
              <img className="mood-image" src="/img/face_surprise.svg" alt="surprise mood"/>
              <Button variant="link" padding="large" toggle={mood4} onClick={handleOnClick4}><h2 className="bold">{moods.m4}</h2></Button>
            </div>
            <div className="mood-select-option">
              <img className="mood-image" src="/img/face_happy.svg" alt="joy mood"/>
              <Button variant="link" padding="large" toggle={mood5} onClick={handleOnClick5}><h2 className="bold">{moods.m5}</h2></Button>
            </div>
            <div className="mood-select-option">
              <img className="mood-image" src="/img/face_sad.svg" alt="sad mood"/>
              <Button variant="link" padding="large" toggle={mood6} onClick={handleOnClick6}><h2 className="bold">{moods.m6}</h2></Button>
            </div>
          </div>
        </div>
        <div className="berkeley-dept">
          <h2 className="bold">Which department are you in?</h2>
          <div className="berkeley-dept_dropdown">
            <FormControl fullWidth>
              <InputLabel id="berkeley-dept-select-label">School/College</InputLabel>
              <Select
                labelId="berkeley-dept-select-label"
                id="berkeley-dept-select"
                value={dept}
                label="School/College"
                onChange={handleSelectChange}
                variant="filled"
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
          {showSubmitBtn}
        </div>
      </Screen>
    </ScreenFrame>
  );
}