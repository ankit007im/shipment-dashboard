import React from "react";

function TableView({ tableData, onItemSelect }) {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>AWB number</th>
            <th>Transporter</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Brand</th>
            <th>Start Date</th>
            <th>ETD</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item._id} onClick={() => onItemSelect(item.awbno)}>
              <td>{item.awbno}</td>
              <td>{item.carrier}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.recipient ? item.recipient : "No Data"}</td>
              <td>{item.pickup_date}</td>
              <td>
                {item.extra_fields
                  ? item.extra_fields["expected_delivery_date"]
                  : "NO DATA"}
              </td>
              <td>{item.current_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
