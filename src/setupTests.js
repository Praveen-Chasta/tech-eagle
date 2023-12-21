// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import PlayersList from "./components/PlayersList";
import RaceTrack from "./components/RaceTrack";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PlayersList />} />
          <Route exact path="/raceTrack" element={<RaceTrack />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
