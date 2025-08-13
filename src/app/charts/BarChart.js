"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
// Dynamically import to avoid SSR issue
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
   const { theme } = useTheme();
  const [state, setState] = React.useState({
    series: [
      { data: [44, 55, 41, 64, 22, 43, 21] },
      { data: [53, 32, 33, 52, 13, 44, 32] }
    ],
    options: {
      chart: {
        type: "bar",
        height: 430,
        toolbar: { show: false }
      },
      colors: ["#1E40AF", "#F59E0B"],
      plotOptions: {
        bar: {
          dataLabels: { position: "top" }
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -10,
        style: { fontSize: "12px", colors: ["#fff"] }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      tooltip: {
         theme: theme, // ✅ automatically changes tooltip colors
        style: {
          color: theme === "dark" ? "#fff" : "#000", // ✅ text color
        },
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={430}
        />
      </div>
    </div>
  );
};

export default BarChart;
