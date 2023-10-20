"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: (value: string) => {
          return "$" + value;
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "This Month",
      data: [800, 700, 800, 900, 600, 700, 700, 600, 500, 500, 400, 500],
      barPercentage: 0.5,
      borderRadius: 14,
      backgroundColor: "rgb(30,144,255)",
    },
    {
      label: "Last Month",
      data: [400, 500, 500, 600, 500, 400, 300, 300, 200, 300, 400, 300],
      barPercentage: 0.4,
      borderRadius: 14,
      backgroundColor: "rgba(30,144,255, 0.5)",
      barThickness: 6,
    },
  ],
};

export default function SalesChart() {
  return <Bar options={options} data={data} />;
}
