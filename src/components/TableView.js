import React from "react";
// import convertToDAte from "../utils/dateTime";

function formatDate(nowDate) {
  var newDate = new Date(nowDate);
  return (
    newDate.getDate() +
    "/" +
    (newDate.getMonth() + 1) +
    "/" +
    newDate.getFullYear()
  );
}

function TableView({ tableData, onItemSelect }) {
  return (
    <div className="flex h-screen relative scrollbar">
      <div className="flex-grow overflow-auto">
        <table className="relative w-full table-auto border">
          <thead>
            <tr className="p-6 text-gray-400">
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                AWB number
              </th>
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                Transporter
              </th>
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                Source
              </th>
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                Destination
              </th>
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                Brand
              </th>
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                Start Date
              </th>
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                ETD
              </th>
              <th className="sticky text-xs font-normal top-0 text-left px-6 py-2 bg-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="h-52 divide-y">
            {tableData.map((item) => (
              <tr
                key={item._id}
                onClick={() => onItemSelect(item.awbno)}
                className="text-xs font-normal border "
              >
                <td className="p-3 text-left">{item.awbno}</td>
                <td className="p-3 text-left">{item.carrier}</td>
                <td className="p-3 text-left">{item.from}</td>
                <td className="p-3 text-left">{item.to}</td>
                <td className="p-3 text-left">
                  {item.recipient ? item.recipient : "No Data"}
                </td>
                <td className="p-3 text-left">
                  {formatDate(item.pickup_date)}
                </td>
                <td className="p-3 text-left">
                  {item.extra_fields
                    ? formatDate(item.extra_fields["expected_delivery_date"])
                    : "NO DATA"}
                </td>
                <td className="p-3 text-green-400 text-left">
                  {item.current_status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableView;
