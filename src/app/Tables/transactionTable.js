"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

// Sample transaction data with status
const transactions = {
  daily: [
    {
      icon: "cryptocurrency:btc",
      name: "Bitcoin",
      time: "06:24:45 AM",
      amount: "+$5,553",
      status: "Complete",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "06:24:45 AM",
      amount: "+$5,553",
      status: "Pending",
    },
    {
      icon: "cryptocurrency:xmr",
      name: "Monero",
      time: "06:24:45 AM",
      amount: "-$912",
      status: "Cancelled",
    },
    {
      icon: "cryptocurrency:ltc",
      name: "Litecoin",
      time: "06:24:45 AM",
      amount: "+$7,762",
      status: "Complete",
    },
    {
      icon: "cryptocurrency:btc",
      name: "Bitcoin",
      time: "06:24:45 AM",
      amount: "+$5,553",
      status: "Complete",
    },
  ],
  weekly: [
    {
      icon: "cryptocurrency:xmr",
      name: "Monero",
      time: "06:24:45 AM",
      amount: "-$912",
      status: "Cancelled",
    },
    {
      icon: "cryptocurrency:btc",
      name: "Bitcoin",
      time: "09:20:10 AM",
      amount: "+$15,000",
      status: "Pending",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "10:00:45 AM",
      amount: "+$10,200",
      status: "Cancelled",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "06:24:45 AM",
      amount: "+$5,553",
      status: "Pending",
    },
    {
      icon: "cryptocurrency:xmr",
      name: "Monero",
      time: "06:24:45 AM",
      amount: "-$912",
      status: "Cancelled",
    },
    {
      icon: "cryptocurrency:ltc",
      name: "Litecoin",
      time: "06:24:45 AM",
      amount: "+$7,762",
      status: "Complete",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "06:24:45 AM",
      amount: "+$5,553",
      status: "Pending",
    },
  ],
  monthly: [
    {
      icon: "cryptocurrency:xmr",
      name: "Monero",
      time: "03:00:00 PM",
      amount: "-$5,000",
      status: "Complete",
    },
    {
      icon: "cryptocurrency:ltc",
      name: "Litecoin",
      time: "01:45:22 PM",
      amount: "+$9,700",
      status: "Pending",
    },
    {
      icon: "cryptocurrency:btc",
      name: "Bitcoin",
      time: "09:20:10 AM",
      amount: "+$15,000",
      status: "Pending",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "10:00:45 AM",
      amount: "+$10,200",
      status: "Cancelled",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "06:24:45 AM",
      amount: "+$5,553",
      status: "Pending",
    },
    {
      icon: "cryptocurrency:btc",
      name: "Bitcoin",
      time: "09:20:10 AM",
      amount: "+$15,000",
      status: "Pending",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "10:00:45 AM",
      amount: "+$10,200",
      status: "Cancelled",
    },
    {
      icon: "cryptocurrency:eth",
      name: "Ethereum",
      time: "06:24:45 AM",
      amount: "+$5,553",
      status: "Pending",
    },
  ],
};

const getStatusClass = (status) => {
  switch (status) {
    case "Complete":
      return "bg-white border border-green-500 text-green-600 hover:bg-green-500 cursor-pointer hover:text-black ";
    case "Pending":
      return "bg-white border border-gray-400 text-gray-600 hover:bg-[#C8C8C8] cursor-pointer hover:text-black ";
    case "Cancelled":
      return "bg-white border border-red-500 text-red-600 hover:bg-red-500 cursor-pointer hover:text-black ";
    default:
      return "";
  }
};

const getIconBg = (name) => {
  switch (name) {
    case "Bitcoin":
      return "bg-yellow-200 text-yellow-800";
    case "Ethereum":
      return "bg-blue-200 text-blue-800";
    case "Monero":
      return "bg-orange-200 text-orange-800";
    case "Litecoin":
      return "bg-gray-200 text-gray-800";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const TransactionTabs = () => {
  const [activeTab, setActiveTab] = useState("daily");

  return (
    <div className="p-6 bg-white shadow w-full mb-6 rounded-4xl dark:bg-neutral-900">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-4 justify-between ">
        <div>
          <h1 className="text-xl font-semibold mb-2">
            Recent Trading Activities
          </h1>
          <p>check our recent transaction</p>
        </div>
        <div className="flex space-x-4 border-1 border-gray-200 items-center justify-center rounded-md p-2">
          {["daily", "weekly", "monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 text-base font-light py-2 rounded-md cursor-pointer  ${
                activeTab === tab
                  ? "bg-[#2258BF] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-separate border-spacing-y-6">
          <thead className="bg-gray-100 dark:bg-neutral-900">
            <tr>
              <th className="px-4 py-2">Coin</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions[activeTab].map((tx, idx) => (
              <tr key={idx} className=" hover:bg-gray-50 dark:hover:bg-neutral-800">
                <td className="flex items-center gap-2 px-4 py-2">
                  <span className={`p-2 rounded-full ${getIconBg(tx.name)}`}>
                    <Icon icon={tx.icon} className="text-5xl" />
                  </span>

                  {tx.name}
                </td>
                <td className="px-4 py-2">{tx.time}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    tx.amount.includes("-") ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {tx.amount}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`text-base font-medium px-3 py-1 rounded-full ${getStatusClass(
                      tx.status
                    )}`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTabs;
