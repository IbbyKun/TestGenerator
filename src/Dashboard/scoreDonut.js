import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import {ArcElement} from 'chart.js'
Chart.register(ArcElement);
Chart.register({
  id: 'centerText',
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;

    ctx.restore();
    const fontSize = (height / 114).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';

    const text = chart.data.datasets[0].data[0].toString();
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
});

const ScoreDonut = ({ score }) => {
  const getColor = (score) => {
    if (score >= 75) {
      return '#4CAF50';
    } else if (score >= 50) {
      return '#FFC107';
    } else {
      return '#F44336';
    }
  };

  const chartData = {
    labels: ['Score'],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: [getColor(score), '#f0f0f0'],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      centerText: {},
    },
  };

  return (
    <div style={{ width: '50px', height: '50px', position: 'relative' }}>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default ScoreDonut;
