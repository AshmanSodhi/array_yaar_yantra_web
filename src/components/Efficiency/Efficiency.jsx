import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useTable } from "@tanstack/react-table";

const Efficiency = () => {
  // Normalized efficiency data
  const data = [
    { date: "2025-02-08", efficiency: 0.71 },
    { date: "2025-02-09", efficiency: 0.83 },
    { date: "2025-02-10", efficiency: 0.65 },
    { date: "2025-02-11", efficiency: 1.00 },
    { date: "2025-02-12", efficiency: 0.76 },
    { date: "2025-02-13", efficiency: 0.89 },
    { date: "2025-02-14", efficiency: 0.92 }
  ];

  // Define table columns
  const columns = [
    { Header: "Date", accessor: "date" },
    { Header: "Normalized Efficiency", accessor: "efficiency" }
  ];

  // React Table setup
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="p-6">
      {/* Graph Section */}
      <h2 className="text-xl font-bold mb-4">Daily Normalized Efficiency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="efficiency" stroke="red" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/* Table Section */}
      <h2 className="text-xl font-bold mt-6 mb-4">Efficiency Data Table</h2>
      <table {...getTableProps()} className="w-full border-collapse border border-gray-300">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="border border-gray-300 p-2 text-left">{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border border-gray-300">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border border-gray-300 p-2">{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Efficiency;