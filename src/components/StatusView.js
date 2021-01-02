import React from "react";

function StatusView({ showStatus }) {
  var scanData = showStatus ? showStatus.map((v) => v.scan) : showStatus;
  if (scanData.length > 1) {
    scanData = scanData[0];
  }
  console.log(scanData);
  return (
    <div className="flex h-screen">
      <div className=" border">
        <div class="flex  py-1">
          <h3 class="text-sm">New landing page</h3>
          <svg
            class="h-4 fill-current text-grey-dark cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          ></svg>
        </div>
        <div className="p-2 content-center">
          <div className="flex flex-row">
            <p>hh</p>
            <div className="border p-2">
              <h1>Dilverd</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusView;
