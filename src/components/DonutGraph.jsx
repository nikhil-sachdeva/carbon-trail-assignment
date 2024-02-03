import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['United States', 'Canada', 'Mexico', 'Others'],
  datasets: [
    {
      label: 'Traffic by Location',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#B1E3FF',
        '#A1E3CB',
        '#A8C5DA',
        '#1C1C1C99',
      ],
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Traffic by Location',
    },
  },
};


export function DonutGraph() {
  return <Doughnut data={data} options={options} />;
}
