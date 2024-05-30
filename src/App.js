import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './Components/Filter';
import ChartSection from './Components/ChartSection';
import InsightsSection from './Components/InsightsSection';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState('AP');

  useEffect(() => {
    fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const states = data ? Object.keys(data) : [];

  return (
    <div className="dashboard">
      <header className="header">
        <h1>COVID-19 India Dashboard</h1>
        <p>Track the COVID-19 situation in different states of India</p>
      </header>
      <Filter
        states={states}
        selectedState={selectedState}
        onSelectState={setSelectedState}
      />
      <InsightsSection data={data} selectedState={selectedState} />
      <ChartSection className='chart' data={data} selectedState={selectedState} />
      <div className="export-button">
        <button onClick={() => { /* Add export logic here */ }}>
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default App;
