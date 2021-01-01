import logo from './logo.svg';
import './App.css';
import {axiosAuth} from './api/service';
import { useEffect, useState } from 'react';
import array_count_values from './utils/statusCount'

function App() { 
  const [data, setdata] = useState([])
  const [code, setcode] = useState({})
  const fetch = async() =>{
    try{
      await axiosAuth.post('/',{email:"ankit007im@gmail.com"}).then(result=>{
        setdata(result.data)
        console.log("2");

        getStatusCount(result.data)
      });
      
    }catch(err){
      console.log(err);
    }
  }

  const getStatusCount = async(data) =>{
    console.log("1");
    var codes  = data.map(d=>d.current_status_code)
    setcode(await array_count_values(codes));
  }
  useEffect(()=>{
    fetch();
  },[])

  return (
    
    <div className="App">
      <h1>Shipment app</h1>
      {code ? (<p>
        {Object.keys(code).map((keyName, i) => (
        <li className="travelcompany-input" key={i}>
            <span className="input-label">Name: {keyName}  Count: {code[keyName]}</span>
        </li>
      ))} </p>
      ):
      (<h1>No Data FOund</h1>)
      }
        
    </div>
  );
}

export default App;
