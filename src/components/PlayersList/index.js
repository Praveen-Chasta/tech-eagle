import { useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Players from "../Players";

import "./index.css";

const PlayersList = () => {
  const [participationList, setParticipationList] = useState([]);
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [startTime, setStartTime] = useState("");
  const navigate = useNavigate();

  const addListItems = (event) => {
    event.preventDefault();
    const newPlayer = {
      id: v4(),
      name: name,
      speed: speed,
      startTime: startTime,
    };
    setParticipationList((prevList) => [...prevList, newPlayer]);
    setName("");
    setSpeed("");
    setStartTime("");
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeSpeed = (event) => {
    setSpeed(event.target.value);
  };

  const changeTime = (event) => {
    setStartTime(event.target.value);
  };

  const startRace = () => {
    navigate("/raceTrack", { state: { participationList } });
  };

  return (
    <>
      <div className="bg-container">
        <form className="form-element" onSubmit={addListItems}>
          <h1 className="heading">RUNNER DETAILS</h1>
          <p className="paragraph">*You can add max 10 participants</p>
          <label htmlFor="name" className="label-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Player Name"
            className="input-1"
            value={name}
            onChange={changeName}
          />
          <label htmlFor="speed" className="label-1">
            Speed
          </label>
          <input
            id="speed"
            type="text"
            placeholder="Speed"
            className="input-1"
            value={speed}
            onChange={changeSpeed}
          />
          <label htmlFor="time" className="label-1">
            Time
          </label>
          <input
            id="time"
            type="text"
            placeholder="Time"
            className="input-1"
            value={startTime}
            onChange={changeTime}
          />
          <button type="Submit" className="button">
            + ADD RUNNER
          </button>
        </form>
        <div className="list-item-container">
          <h1>LIST OF PARTICIPANTS</h1>
          <div className="list-tags">
            <p className="tags">Name</p>
            <p className="tags">Speed</p>
            <p className="tags">Start Time</p>
            <p className="tags">End Time</p>
          </div>
          <ul>
            {participationList.length <= 10 ? (
              participationList.map((eachItem) => (
                <Players key={eachItem.id} details={eachItem} />
              ))
            ) : (
              <p className="note">Only 10 players in single race </p>
            )}
          </ul>
          <hr className="hr-line" />
          <div className="button-cont">
            <button type="button" className="button-2" onClick={startRace}>
              Start Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayersList;
