import React from "react";

function TableView({ tableData, onItemSelect }) {
  return (
    <div className="flex flex-col h-screen relative">
      <div className=" flex-grow overflow-auto">
        <table className=" relative w-full border">
          <thead className="">
            <tr className=" text-xs p-2 font-extralight text-gray-400">
              <th className="sticky top-0 px-6 py-3 bg-white">AWB number</th>
              <th className="sticky top-0 px-6 py-3 bg-white">Transporter</th>
              <th className="sticky top-0 px-6 py-3 bg-white">Source</th>
              <th className="sticky top-0 px-6 py-3 bg-white">Destination</th>
              <th className="sticky top-0 px-6 py-3 bg-white">Brand</th>
              <th className="sticky top-0 px-6 py-3 bg-white">Start Date</th>
              <th className="sticky top-0 px-6 py-3 bg-white">ETD</th>
              <th className="sticky top-0 px-6 py-3 bg-white">Status</th>
            </tr>
          </thead>
          <tbody className="h-52 divide-y">
            {tableData.map((item) => (
              <tr
                key={item._id}
                onClick={() => onItemSelect(item.awbno)}
                className="text-xs mt-12 font-normal border-t-1"
              >
                <td className="p-4 text-right">{item.awbno}</td>
                <td className="p-4 text-right">{item.carrier}</td>
                <td className="p-4 text-right">{item.from}</td>
                <td className="p-4 text-right">{item.to}</td>
                <td className="p-4 text-right">
                  {item.recipient ? item.recipient : "No Data"}
                </td>
                <td className="p-4 text-right">{item.pickup_date}</td>
                <td className="p-4 text-right">
                  {item.extra_fields
                    ? item.extra_fields["expected_delivery_date"]
                    : "NO DATA"}
                </td>
                <td className="p-4 text-right">{item.current_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableView;
