import React from "react";
import Card from "./Components/Card";
import Data from "./Components/Data";
import Header from "./Components/Header";

function App() {
  const CardInfo = Data.map(items => {
    return (
      <Card
      key={items.id}
      items={items}
      />
    )
  })

  return (
    <div className="App">
      <Header/>
      {CardInfo}  
    </div>
  );
}

export default App;
