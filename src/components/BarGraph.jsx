import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Traffic by Device',
    },
  },
};

const labels = ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: '#95A4FC',
    }
  ],
};

export function BarGraph() {
  return <Bar options={options} data={data} />;
}
