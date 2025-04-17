import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function InitiativeTracker() {
  const [creatures, setCreatures] = useState([]);
  const [newCreature, setNewCreature] = useState({ name: '', initiative: 0 });

  useEffect(() => {
    socket.on('updateCreatures', (updatedCreatures) => {
      setCreatures(updatedCreatures);
    });

    return () => {
      socket.off('updateCreatures');
    };
  }, []);

  const handleAddCreature = () => {
    socket.emit('addCreature', newCreature);
    setNewCreature({ name: '', initiative: 0 });
  };

  const handleRollAll = () => {
    const updated = creatures.map(c => ({
      ...c,
      initiative: Math.floor(Math.random() * 20) + 1
    }));
    socket.emit('rollAll', updated);
  };

  return (
    <div className="tracker">
      <h1>RuneTable Initiative Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newCreature.name}
          onChange={(e) => setNewCreature({ ...newCreature, name: e.target.value })}
        />
        <button onClick={handleAddCreature}>Add</button>
        <button onClick={handleRollAll}>Roll All</button>
      </div>
      <ul>
        {creatures.sort((a, b) => b.initiative - a.initiative).map((c, index) => (
          <li key={index}>
            {c.name} — Initiative: {c.initiative}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InitiativeTracker;
