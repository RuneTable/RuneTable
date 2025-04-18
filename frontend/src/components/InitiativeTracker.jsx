import React, { useState } from 'react';

function InitiativeTracker() {
  const [creatures, setCreatures] = useState([]);
  const [name, setName] = useState('');
  const [hp, setHp] = useState('');
  const [ac, setAc] = useState('');
  const [initiative, setInitiative] = useState('');

  const addCreature = () => {
    if (name.trim() === '') return;
    setCreatures([...creatures, {
      name,
      hp: parseInt(hp) || 0,
      ac: parseInt(ac) || 0,
      initiative: parseInt(initiative) || 0
    }]);
    setName('');
    setHp('');
    setAc('');
    setInitiative('');
  };

  const rollInitiative = () => {
    const updatedCreatures = creatures.map(creature => ({
      ...creature,
      initiative: Math.floor(Math.random() * 20) + 1
    })).sort((a, b) => b.initiative - a.initiative);
    setCreatures(updatedCreatures);
  };

  return (
    <div className="tracker-container">
      <h1>Initiative Tracker</h1>
      <div className="add-creature-form">
        <input
          type="text"
          placeholder="Creature Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="HP"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
        <input
          type="number"
          placeholder="AC"
          value={ac}
          onChange={(e) => setAc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Initiative"
          value={initiative}
          onChange={(e) => setInitiative(e.target.value)}
        />
        <button onClick={addCreature}>Add Creature</button>
        <button onClick={rollInitiative}>Roll All</button>
      </div>
      <div className="initiative-list">
        {creatures.map((creature, index) => (
          <div key={index} className="creature-card">
            <h3>{creature.name}</h3>
            <p><strong>HP:</strong> {creature.hp}</p>
            <p><strong>AC:</strong> {creature.ac}</p>
            <p><strong>Initiative:</strong> {creature.initiative}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InitiativeTracker;
