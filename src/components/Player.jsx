import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleBlur = () => {
    handleEditClick(); // Save changes and exit editing mode on blur
  };

  const EditablePlayerName = () => {
    return isEditing ? (
      <input
        type="text"
        value={playerName}
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus
      />
    ) : (
      <span className="player-name">{playerName}</span>
    );
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <EditablePlayerName />
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
