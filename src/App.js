import logo from './logo.svg';
import './App.css';
import {axiosAuth} from './api/service';
import { useEffect, useState } from 'react';


function App() { 
  const [data, setdata] = useState([])
  const fetch = async() =>{
    try{
      await axiosAuth.post('/',{email:"ankit007im@gmail.com"}).then(result=>{
        setdata(result.data)
      });
      
    }catch(err){
      console.log(err);
    }
  }

  const getStatusCount = (data)=>{
    var codes = []
    data.map(d => {
      codes.push(d.current_status_code)
    })
    console.log(codes);
  }

  useEffect(()=>{
    fetch();
    getStatusCount(data)
  },[])

  
  return (
    <div className="App">
      <h1>Shipment app</h1>
      {/* {data.map(d=>(
        <p>{d.current_status_code}</p>
      ))} */}
    </div>
  );
}

export default App;
