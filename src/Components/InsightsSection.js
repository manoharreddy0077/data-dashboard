import React from 'react';
import './InsightsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus, faHeartbeat, faSkull, faVial } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faVirus} className="insight-icon" />
        <strong>Highest Confirmed Cases:</strong>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(highestConfirmed.value / highestConfirmed.value) * 100}%` }}></div>
        </div>
        <span>{highestConfirmed.value} ({highestConfirmed.state})</span>
      </div>
      <div className="insight">
        <FontAwesomeIcon icon={faHeartbeat} className="insight-icon" />
        <strong>Highest Recovered Cases:</strong>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(highestRecovered.value / highestRecovered.value) * 100}%` }}></div>
        </div>
        <span>{highestRecovered.value} ({highestRecovered.state})</span>
      </div>
      <div className="insight">
        <FontAwesomeIcon icon={faSkull} className="insight-icon" />
        <strong>Highest Deceased Cases:</strong>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(highestDeceased.value / highestDeceased.value) * 100}%` }}></div>
        </div>
        <span>{highestDeceased.value} ({highestDeceased.state})</span>
      </div>
      <div className="insight">
        <FontAwesomeIcon icon={faVial} className="insight-icon" />
        <strong>Highest Tested Cases:</strong>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(highestTested.value / highestTested.value) * 100}%` }}></div>
        </div>
        <span>{highestTested.value} ({highestTested.state})</span>
      </div>
    </div>
  );
};

export default InsightsSection;
