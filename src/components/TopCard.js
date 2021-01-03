import React from "react";

function TopCard({ statusCode, onItemSelect, selected }) {
  return (
    <div className="container p-4">
      {statusCode ? (
        <div className="container ">
          <div className="flex card gap-4 justify-center ">
            {Object.keys(statusCode).map((keyName, i) => (
              <div
                className={
                  keyName == selected
                    ? "bg-blue-600 p-2 h-20 w-20 text-white rounded-md"
                    : "bg-indigo-200 p-2 h-20 w-20 text-blue-600 rounded-md clickable"
                }
                onClick={() => onItemSelect(keyName)}
                key={i}
              >
                <div className="flex flex-col">
                  <div className="text-xs font-bold pr-6 pb-2">{keyName}</div>
                  <div className="text-4xl font-normal pl-4">
                    {statusCode[keyName]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>No Data Found</h1>
      )}
    </div>
  );
}

export default TopCard;
