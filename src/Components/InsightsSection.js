import React from 'react';
import './InsightsSection.css';

const InsightsSection = ({ data, selectedState }) => {
  if (!data || !data[selectedState]) return null;

  const stateData = data[selectedState].dates;
  const dates = Object.keys(stateData);
  
  let highestConfirmed = { value: 0, state: '' };
  let highestRecovered = { value: 0, state: '' };
  let highestDeceased = { value: 0, state: '' };
  let highestTested = { value: 0, state: '' };

  for (const date of dates) {
    const dailyData = stateData[date].total;
    if (dailyData.confirmed > highestConfirmed.value) {
      highestConfirmed = { value: dailyData.confirmed, state: selectedState };
    }
    if (dailyData.recovered > highestRecovered.value) {
      highestRecovered = { value: dailyData.recovered, state: selectedState };
    }
    if (dailyData.deceased > highestDeceased.value) {
      highestDeceased = { value: dailyData.deceased, state: selectedState };
    }
    if (dailyData.tested > highestTested.value) {
      highestTested = { value: dailyData.tested, state: selectedState };
    }
  }

  return (
    <div className="insights-section">
      <h3>Insights</h3>
      <div className="insight">
        <strong>Highest Confirmed Cases:</strong>
        <span>{highestConfirmed.value} ({highestConfirmed.state})</span>
      </div>
      <div className="insight">
        <strong>Highest Recovered Cases:</strong>
        <span>{highestRecovered.value} ({highestRecovered.state})</span>
      </div>
      <div className="insight">
        <strong>Highest Deceased Cases:</strong>
        <span>{highestDeceased.value} ({highestDeceased.state})</span>
      </div>
      <div className="insight">
        <strong>Highest Tested Cases:</strong>
        <span>{highestTested.value} ({highestTested.state})</span>
      </div>
    </div>
  );
};

export default InsightsSection;
