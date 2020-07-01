import React from "react";
import Header from "./Header";
import ItemList from "./ItemList";

function App() {
  const name = "Tony";
  const name2 = "Chee";
  return (
    <React.Fragment>
      <Header />
      <ItemList />
      <h1>Merch Site</h1>
      <h3>Hoodies</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}
export default App;