import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './ChartSection.css';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartSection = ({ data, selectedState }) => {
  if (!data || !data[selectedState]) return null;

  const stateData = data[selectedState].dates;
  const dates = Object.keys(stateData);
  const confirmed = dates.map((date) => stateData[date].total.confirmed || 0);
  const recovered = dates.map((date) => stateData[date].total.recovered || 0);
  const deceased = dates.map((date) => stateData[date].total.deceased || 0);
  const tested = dates.map((date) => stateData[date].total.tested || 0);

  const barChartData = {
    labels: dates,
    datasets: [
      {
        label: 'Confirmed',
        data: confirmed,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
      {
        label: 'Recovered',
        data: recovered,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
      {
        label: 'Deceased',
        data: deceased,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
      {
        label: 'Tested',
        data: tested,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgb(255, 206, 86)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Confirmed', 'Recovered', 'Deceased', 'Tested'],
    datasets: [
      {
        data: [
          confirmed[confirmed.length - 1],
          recovered[recovered.length - 1],
          deceased[deceased.length - 1],
          tested[tested.length - 1],
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
      },
    ],
  };

  return (
    <div className="chart-section">
      <div className="chart-item">
        <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
      </div>
      <div className="chart-item">
        <Doughnut data={pieChartData} options={{ maintainAspectRatio: false }} />
      </div>
      <div className="chart-item">
        <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default ChartSection;
