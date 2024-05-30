import React from 'react';
import './Filter.css';

const Filter = ({ states, selectedState, onSelectState }) => {
  return (
    <div className="filter-section">
      <label htmlFor="state-select">Filter by State:</label>
      <select
        id="state-select"
        value={selectedState}
        onChange={(e) => onSelectState(e.target.value)}
      >
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
