"use client";

import { useState } from "react";

// Sample transaction data
const data = [
  { id: "TXN001", date: "2025-08-01", from: { name: "Alice" }, to: { name: "Bob" }, coin: "BTC", amount: 0.5, note: "Payment for website development", status: "Completed" },
  { id: "TXN002", date: "2025-08-02", from: { name: "Charlie" }, to: { name: "Dave" }, coin: "ETH", amount: 2, note: "Refund for order #1234", status: "Pending" },
  { id: "TXN003", date: "2025-08-03", from: { name: "Eve" }, to: { name: "Frank" }, coin: "BTC", amount: 1.2, note: "Consulting fee payment", status: "Completed" },
  { id: "TXN004", date: "2025-08-04", from: { name: "Grace" }, to: { name: "Hank" }, coin: "ETH", amount: 0.75, note: "Partial refund", status: "Failed" },
  { id: "TXN005", date: "2025-08-05", from: { name: "Ivy" }, to: { name: "Jack" }, coin: "BTC", amount: 0.3, note: "Invoice payment", status: "Completed" },
  { id: "TXN006", date: "2025-08-06", from: { name: "Alice" }, to: { name: "Charlie" }, coin: "ETH", amount: 1.5, note: "Project milestone payment", status: "Pending" },
  { id: "TXN007", date: "2025-08-07", from: { name: "Bob" }, to: { name: "Eve" }, coin: "BTC", amount: 0.8, note: "Service charge", status: "Completed" },
  { id: "TXN008", date: "2025-08-08", from: { name: "Dave" }, to: { name: "Frank" }, coin: "ETH", amount: 2.3, note: "Refund processed", status: "Completed" },
  { id: "TXN009", date: "2025-08-09", from: { name: "Grace" }, to: { name: "Ivy" }, coin: "BTC", amount: 1.0, note: "Consultation fee", status: "Pending" },
  { id: "TXN010", date: "2025-08-10", from: { name: "Hank" }, to: { name: "Jack" }, coin: "ETH", amount: 0.6, note: "Invoice payment", status: "Completed" },
];

// Status badge component
function StatusBadge({ status }) {
  const colors = {
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Failed: "bg-red-100 text-red-800",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[status] || "bg-gray-100 text-gray-800"}`}>
      {status}
    </span>
  );
}

export default function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 p-2 dark:bg-neutral-900">
        {/* Table */}
        <div className="overflow-x-auto max-h-[420px]">
          <table className="min-w-[900px] w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10 dark:bg-black">
              <tr className="text-gray-700 dark:text-white">
                <th className="px-4 py-3 border-b font-bold w-[120px]">Transaction ID</th>
                <th className="px-4 py-3 border-b font-bold w-[100px]">Date</th>
                <th className="px-4 py-3 border-b font-bold w-[100px]">From</th>
                <th className="px-4 py-3 border-b font-bold w-[100px]">To</th>
                <th className="px-4 py-3 border-b font-bold w-[70px]">Coin</th>
                <th className="px-4 py-3 border-b font-bold w-[90px] text-right">Amount</th>
                <th className="px-4 py-3 border-b font-bold w-[200px]">Note</th>
                <th className="px-4 py-3 border-b font-bold w-[100px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50 transition-colors dark:hover:bg-neutral-800">
                  <td className="px-4 py-3">{tx.id}</td>
                  <td className="px-4 py-3 ">{tx.date}</td>
                  <td className="px-4 py-3 ">{tx.from.name}</td>
                  <td className="px-4 py-3 ">{tx.to.name}</td>
                  <td className="px-4 py-3 ">{tx.coin}</td>
                  <td className="px-4 py-3  text-right">{tx.amount}</td>
                  <td className="px-4 py-3 truncate max-w-[180px]" title={tx.note}>
                    {tx.note}
                  </td>
                  <td className="px-4 py-3 ">
                    <StatusBadge status={tx.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center px-4 py-3 bg-gray-50 border-t gap-4 dark:bg-black">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 cursor-pointer rounded-lg border ${
              currentPage === 1 ? "bg-gray-200 dark:bg-gray-400 cursor-not-allowed" : "bg-white dark:bg-neutral-900 hover:bg-gray-100"
            }`}
          >
            Prev
          </button>

          <div className="space-x-3">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1.5 cursor-pointer rounded-lg border ${
                    currentPage === pageNum
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-neutral-900 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 cursor-pointer rounded-lg border ${
              currentPage === totalPages ? "bg-gray-200 dark:bg-gray-400 cursor-not-allowed" : "bg-white dark:bg-neutral-900 hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
