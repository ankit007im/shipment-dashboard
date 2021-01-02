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
  const [selectedTable, setselectedTable] = useState();
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
  };

  const handelTable = (tile) => {
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
    <div className="App">
      <h1>Shipment app</h1>
      <TopCard
        statusCode={code}
        onItemSelect={handleCard}
        selected={selectedCard}
      />
      <StatusView showStatus={filteredData} />
      <TableView
        tableData={filteredTableData}
        onItemSelect={handelTable}
        selected={selectedTable}
      />
    </div>
  );
}

export default App;
