import logo from "./logo.svg";
import "./App.css";
import { axiosAuth } from "./api/service";
import { useEffect, useState } from "react";
import array_count_values from "./utils/statusCount";
import TopCard from "./components/TopCard";
import TableView from "./components/TableView";
import StatusView from "./components/StatusView";

function App() {
  const [data, setdata] = useState([]);
  const [code, setcode] = useState({});
  const [selectedCard, setselectedCard] = useState("OOD");
  const [selectedTable, setselectedTable] = useState("68816235");
  const fetch = async () => {
    try {
      await axiosAuth
        .post("/", { email: "ankit007im@gmail.com" })
        .then((result) => {
          setdata(result.data);
          getStatusCount(result.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCard = (title) => {
    setselectedCard(title);
    console.log(selectedCard);
  };

  const handelTable = (tile) => {
    console.log(tile);
    setselectedTable(tile);
  };
  const getStatusCount = async (data) => {
    console.log(data);
    var codes = data.map((d) => d.current_status_code);
    setcode(await array_count_values(codes));
  };

  useEffect(() => {
    fetch();
  }, []);

  const filteredData = selectedCard
    ? data.filter((s) => s.current_status_code == selectedCard)
    : data;

  const filteredTableData = selectedTable
    ? filteredData.filter((s) => s.awbno == selectedTable)
    : filteredData;

  return (
    <div className="App ">
      <h1>Shipment app</h1>
      <div className="p-8">
        <TopCard
          statusCode={code}
          onItemSelect={handleCard}
          selected={selectedCard}
        />
        <div className="flex justify-between">
          <StatusView showStatus={filteredTableData} />
          <TableView
            tableData={filteredData}
            onItemSelect={handelTable}
            selected={selectedTable}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
