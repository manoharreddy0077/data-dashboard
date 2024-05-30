// src/components/ExportCSV.js
import React from 'react';
import { CSVLink } from 'react-csv';

const ExportCSV = ({ data }) => {
  const csvData = [];

  Object.keys(data).forEach(stateCode => {
    const dates = data[stateCode].dates || {};

    Object.keys(dates).forEach(date => {
      const dailyData = dates[date].total || {};
      csvData.push({
        state: stateCode,
        date: date,
        confirmed: dailyData.confirmed || 0,
        recovered: dailyData.recovered || 0,
        deceased: dailyData.deceased || 0,
        tested: dailyData.tested || 0,
      });
    });
  });

  return (
    <button className="export-button">
      <CSVLink data={csvData} filename="covid19_data.csv">Export CSV</CSVLink>
    </button>
  );
};

export default ExportCSV;
