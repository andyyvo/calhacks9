import React from 'react';
import './App.css';
import {AllViz} from './pages/vis_drafts';
import {MoodMapViz} from './pages/mood_map';

function App() {
  return (
    <div className="App">
      <AllViz />
      <MoodMapViz />
    </div>
  );
}

export default App;
