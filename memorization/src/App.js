import { useState, useMemo, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const increment = useCallback(()=>{
    setNumber((prevState)=> prevState+1 )
  },[])

  // this comments used for useMemo element
  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number]);

  // const data = calculateObject()

  return (
    <div className="App">
      <Header increment={increment}
      // number={number < 5 ? 0 : number} data={data}
      ></Header>
      <hr></hr>
      <h1>{number}</h1>
      
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

// function calculateObject(number) {
//   console.log("Calculating...");
//   for (let i = 0; i < 100000000; i++) {}
//   console.log("Calculating Completed");

//   return { name: "Mirac",number };
// }

export default App;
