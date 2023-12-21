import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./index.css";

const RaceTrack = ({ participants }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [winners, setWinners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRaceCompletion = React.useCallback(() => {
    if (!participants || participants.length === 0) {
      return;
    }

    const sortedParticipants = participants
      .slice()
      .sort((a, b) => a.endTime - b.endTime);

    setWinners([
      { place: "Gold", name: sortedParticipants[0]?.name },
      { place: "Silver", name: sortedParticipants[1]?.name },
      { place: "Bronze", name: sortedParticipants[2]?.name },
    ]);

    setIsModalOpen(true);
  }, [participants]);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (elapsedTime >= RACE_DURATION) {
      handleRaceCompletion();
    }
  }, [elapsedTime, handleRaceCompletion]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Race Track</h1>
      <p>Elapsed Time: {elapsedTime} seconds</p>

      {participants &&
        participants.map((participant) => (
          <div
            key={participant.id}
            style={{
              width: `${(elapsedTime * participant.speed) / 10}px`,
              height: "20px",
              backgroundColor: "blue",
            }}
          />
        ))}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Winners Modal"
      >
        <h2>Race Winners</h2>
        <ul>
          {winners.map((winner) => (
            <li key={winner.place}>
              {winner.place}: {winner.name}
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

const RACE_DURATION = 30;

export default RaceTrack;
