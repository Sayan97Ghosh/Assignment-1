
import './App.css';
import Middle from './Pages/Middle';

import React,{useState,useEffect} from "react";
import PunchInput from './Pages/PunchInput';

function App() {
  const [data,setData] = useState([])
  const getData = async() =>{
    await fetch("http://localhost:9870/attendence/")
     .then((res)=>res.json())
     .then((res)=>setData(res.newUser))
  }



  useEffect(()=>{
    getData()
  },[])
// console.log(data);
  return (
    <div className="App">

      <Middle 
      data = {data}
      
      />

      <PunchInput/>

    </div>
  );
}

export default App;
