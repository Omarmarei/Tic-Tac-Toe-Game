import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [editPlayerName, setEditPlayerName] = useState(false);
  const [newPlayer, setNewPlayer] = useState(initialName);

  function handleEdit() {
    if (editPlayerName) {
      onChangeName(symbol, newPlayer);
    }
    setEditPlayerName((editing) => !editing);
  }

  function nameChange(event) {
    setNewPlayer(event.target.value);
  }

  let playerName = <span className="player-name">{newPlayer}</span>;
  if (editPlayerName) {
    playerName = (
      <input
        type="text"
        required
        value={newPlayer}
        onChange={nameChange}
        placeholder={initialName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{editPlayerName ? "Save" : "Edit"}</button>
    </li>
  );
}
