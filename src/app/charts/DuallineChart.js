"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";


// Disable SSR for ApexCharts
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DualLineChart = () => {
  const { theme } = useTheme();
  const chartData = {
    series: [
      {
        name: "Income",
        data: [100000, 200000, 150000, 250000, 300000, 350000, 280000],
      },
      {
        name: "Expenses",
        data: [80000, 150000, 120000, 220000, 260000, 300000, 240000],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "line",
        toolbar: {
    show: false,
    
  },
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 2,
      },
      xaxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
        title: {
          text: "Weeks",
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => `${val / 1000}k`,
        },
        title: {
          text: "Amount",
        },
      },
      tooltip: {
         theme: theme, // ✅ automatically changes tooltip colors
        style: {
          color: theme === "dark" ? "#fff" : "#000", // ✅ text color
        },
        y: {
          formatter: (val) => `$${val.toLocaleString()}`,
          
        },
        
      },
      colors: ["#FF7213", "#2258BF"],
    },
  };

  return (
    <div className=" mt-10 w-full">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={400}
        width="100%"
      />
    </div>
  );
};

export default DualLineChart;
