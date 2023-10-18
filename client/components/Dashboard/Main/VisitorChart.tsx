"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  cutout: 130,
};

export const data = {
  labels: [
    "Social media",
    "Affiliate visitors",
    "By advertisement",
    "Purchased visitors",
  ],
  datasets: [
    {
      data: [30, 12, 18, 40],
      backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
      ],
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label;
            let value = context.formattedValue;

            if (!label) label = "Unknown";

            let sum = 0;
            let dataArr = context.chart.data.datasets[0].data;
            dataArr.map((data: any) => {
              sum += Number(data);
            });

            let percentage = ((value * 100) / sum).toFixed(2) + "%";
            return label + ": " + percentage;
          },
        },
      },
    },
  ],
};

export function VisitorChart() {
  return (
    <div className="w-[340px] h-[340px]">
      <Doughnut options={options} data={data} />
    </div>
  );
}
