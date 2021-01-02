import React from "react";

function StatusView({ showStatus }) {
  const scanData = showStatus ? showStatus.map((v) => v.scan) : showStatus;
  return (
    <div className="constainer">
      <div className="">
        {scanData.map((scan) => {
          scan.map((s) => console.log(s));
        })}
      </div>
    </div>
  );
}

export default StatusView;
