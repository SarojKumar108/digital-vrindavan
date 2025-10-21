import React , {useEffect,useState} from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(()=>{
    axios.get("http://localhost:5000/")
    .then(res=> setMsg(res.data))
    .catch(err=>setMsg("cannot reach backend"));
  })
  return (
    <div style={{padding: 24, fontFamily: "system-ui,sans-serif"}}>
      <h1> Digital Vrindavan</h1>
      <p>{msg}</p>
    </div>
  )
}
export default App 