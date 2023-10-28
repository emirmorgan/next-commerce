"use client";

import { useDashboard } from "@/context/DashboardContext";
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
import SalesChartSkeleton from "./Skeleton";

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
        callback: (value: any) => {
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

export default function SalesChart() {
  const { statistics } = useDashboard();

  if (!statistics) {
    return <SalesChartSkeleton />;
  }

  const labels = statistics.sales.thisMonth.map((data) => data.label);
  const thisMonthData = statistics.sales.thisMonth.map((data) => data.data);
  const lastMonthData = statistics.sales.lastMonth.map((data) => data.data);

  const data = {
    labels,
    datasets: [
      {
        label: "This Month",
        data: thisMonthData,
        barPercentage: 0.5,
        borderRadius: 14,
        backgroundColor: "rgb(30,144,255)",
      },
      {
        label: "Last Month",
        data: lastMonthData,
        barPercentage: 0.4,
        borderRadius: 14,
        backgroundColor: "rgba(30,144,255, 0.5)",
        barThickness: 6,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
