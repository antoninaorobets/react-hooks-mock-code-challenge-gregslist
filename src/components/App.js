import React,{useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [filterParam, setFilterParam] = useState('')
  

  return (
    <div className="app">
      <Header setFilterParam={setFilterParam}/>
      <ListingsContainer filterParam={filterParam}/>
    </div>
  );
}

export default App;
