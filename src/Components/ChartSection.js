import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import './ChartSection.css';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartSection = ({ data, selectedState }) => {
  if (!data || !data[selectedState]) return null;

  const stateData = data[selectedState].dates;
  const dates = Object.keys(stateData);
  const confirmed = dates.map((date) => stateData[date].total.confirmed || 0);
  const recovered = dates.map((date) => stateData[date].total.recovered || 0);
  const deceased = dates.map((date) => stateData[date].total.deceased || 0);
  const tested = dates.map((date) => stateData[date].total.tested || 0);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Confirmed',
        data: confirmed,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Recovered',
        data: recovered,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Deceased',
        data: deceased,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Tested',
        data: tested,
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      },
    ],
  };

  return (
    <div className="chart-section">
      <div className="chart-item">
        <Line data={chartData} />
      </div>
      <div className="chart-item">
        <Bar data={chartData} />
      </div>
      <div className="chart-item">
        <Pie
          data={{
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
          }}
        />
      </div>
      <div className="chart-item">
        <Doughnut
          data={{
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
          }}
        />
      </div>
    </div>
  );
};

export default ChartSection;
