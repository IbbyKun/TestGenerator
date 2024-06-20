import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement } from 'chart.js';
Chart.register(ArcElement);

const CircularChart = ({ data, total }) => {
  const chartData = {
    labels: [String(data)], // Use data value as the label
    datasets: [
      {
        label: 'Open Jobs',
        data: [data, total - data], // Filling with the data value and remaining with (total - data)
        backgroundColor: ['#6B46C1', '#f0f0f0'], // Fill the open jobs color and remaining color
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '120px', height: '120px', textAlign: 'center' }}>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default CircularChart;
