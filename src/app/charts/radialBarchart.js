"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const RadialbarChart = () => {
  const [state] = React.useState({
    series: [85, 60, 67,50],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
    colors: ["#EB8153", "#4441DE", "#60C695", "#F34F80"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
          },
        },
      },
      labels: ["Income", "Spend", "Installment","Invest",],
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default RadialbarChart;
