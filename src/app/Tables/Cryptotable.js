"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
const data = [
  { rank: 1, coin: "Bitcoin", icon: "cryptocurrency-color:btc", price: "$29,450", change: "+2.5%", volume: "$24B", graph: "📈" },
  { rank: 2, coin: "Ethereum", icon: "cryptocurrency-color:eth", price: "$1,850", change: "-1.2%", volume: "$12B", graph: "📉" },
  { rank: 3, coin: "Ripple", icon: "cryptocurrency-color:xrp", price: "$0.63", change: "+0.8%", volume: "$1.5B", graph: "📈" },
  { rank: 4, coin: "Litecoin", icon: "cryptocurrency-color:ltc", price: "$92.30", change: "+0.4%", volume: "$900M", graph: "📈" },
  { rank: 5, coin: "Cardano", icon: "cryptocurrency-color:ada", price: "$0.28", change: "-0.5%", volume: "$600M", graph: "📉" },
  { rank: 6, coin: "Solana", icon: "cryptocurrency-color:sol", price: "$24.20", change: "+1.7%", volume: "$450M", graph: "📈" },
  { rank: 7, coin: "Polkadot", icon: "cryptocurrency-color:dot", price: "$5.10", change: "+0.2%", volume: "$320M", graph: "📉" }
];

const ITEMS_PER_PAGE = 5;

export default function CryptoTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="p-4 bg-white shadow w-full mb-6 rounded-4xl dark:bg-neutral-900">
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full ">
          <thead>
            <tr>
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Coin</th>
              <th className="p-3 text-left">Last Price</th>
              <th className="p-3 text-left">Change (24h)</th>
              <th className="p-3 text-left">Volume (24h)</th>
              <th className="p-3 text-left">Graph</th>
            </tr>
          </thead>
          <tbody>
            {selectedData.map((coin) => (
              <tr key={coin.rank} className="">
                <td className="p-3">{coin.rank}</td>
                <td className="p-3 flex items-center gap-2">
                   <Icon icon={coin.icon} width="20" height="20" />
                  {coin.coin}
                </td>
                <td className="p-3">{coin.price}</td>
                <td className={`p-3 ${coin.change.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                  {coin.change}
                </td>
                <td className="p-3">{coin.volume}</td>
                <td className="p-3">{coin.graph}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-3 py-1 cursor-pointer border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 cursor-pointer py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 cursor-pointer border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
