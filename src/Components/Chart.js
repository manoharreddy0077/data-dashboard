// src/components/Chart.js
import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

const Chart = ({ data, type }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Data',
        data: data.values,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  switch (type) {
    case 'line':
      return <Line data={chartData} options={options} />;
    case 'bar':
      return <Bar data={chartData} options={options} />;
    case 'pie':
      return <Pie data={chartData} options={options} />;
    case 'doughnut':
      return <Doughnut data={chartData} options={options} />;
    default:
      return <Line data={chartData} options={options} />;
  }
};

export default Chart;
