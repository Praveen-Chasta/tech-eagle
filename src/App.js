import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayersList from "./components/PlayersList";
import RaceTrack from "./components/RaceTrack";
import "./App.css";

class App extends Component {
  state = {
    participationList: [],
  };

  addParticipant = (newPlayer) => {
    this.setState((prevState) => ({
      participationList: [...prevState.participationList, newPlayer],
    }));
  };

  render() {
    const { participationList } = this.state;

    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PlayersList addParticipant={this.addParticipant} />}
          />
          <Route
            path="/raceTrack"
            element={<RaceTrack participationList={participationList} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
