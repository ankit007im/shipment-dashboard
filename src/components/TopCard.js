import React from "react";

function TopCard({ statusCode, onItemSelect, selected }) {
  const sayHello = (name) => {
    alert(`Hello, ${name}!`);
  };
  return (
    <div className="container p-4">
      {statusCode ? (
        <div className="container">
          <div className="flex card gap-4 justify-center ">
            {Object.keys(statusCode).map((keyName, i) => (
              <div
                className={
                  keyName == selected
                    ? "bg-blue-500 p-4 rounded-md"
                    : "bg-blue-100 p-4 rounded-md clickable"
                }
                onClick={() => onItemSelect(keyName)}
                key={i}
              >
                {keyName} {statusCode[keyName]}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>No Data FOund</h1>
      )}
    </div>
  );
}

export default TopCard;
