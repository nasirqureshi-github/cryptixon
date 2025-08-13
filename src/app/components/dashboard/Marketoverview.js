import React from "react";
import DualLineChart from "@/app/charts/DuallineChart";
import Dropdown from "./Dropdown";

const titles = [
  { text: "ETH",},
  { text: "XMR",},
  { text: "LTC",},
  { text: "XMR",},
];

const options = [
  { value: "Weekely (2024)", label: "Weekely (2024)" },
  { value: "Daily (2024)", label: "Daily (2024)" },
  { value: "Yearly (2024)", label: "Yearly (2024)" },
];
const Marketoverview = () => {
  return (
    <div className="bg-white p-6 rounded-4xl flex w-full gap-3 mt-8 shadow flex-grow flex-shrink basis-[60%]  transition-all duration-300 py-8 justify-center dark:bg-neutral-900">
      <div className="inline-block ">
        <h1 className="text-xl font-semibold mb-2">Market Overview</h1>
        <p className="text-sm text-gray-500">
          Digital trends evolve each year, reshaping industries worldwide
        </p>
        <div className="flex flex-wrap  gap-4 items-center">
          {titles.map((title, index) => {
            return (
              <div className="flex items-center gap-2 mt-5" key={index}>
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-base text-gray-500">{title.text}</p>
              </div>
            );
          })}
         <div className="mt-4"> <Dropdown placeholder="Weekely (2024)" options={options} /></div>
         
        </div>
        <DualLineChart />
      </div>
    </div>
  );
};

export default Marketoverview;
