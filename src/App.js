import React from "react";
import Cards from "./compoments/Cards";
import "./App.css";
import MenuSide from "./compoments/MenuSide";
import Navbars from "./compoments/Navbar";
import data from "./compoments/project.json";

function App() {
  const asset = data.tasks[0].assets;

  return (
    <div className="App">
      <Navbars />
      <div className="container">
        <div className="menu_side">
          <MenuSide />
        </div>
        <div className="blue_square"></div>
        <div className="asset_container">
          <h1 className="assets_heading">
            You Are Taking Challenges Of New Project
          </h1>
          <div className="assets_title">
            <p>demo task</p>
          </div>
          <div className="asset">
            {asset.map((asset) => (
              <Cards asset={asset} />
            ))}
          </div>
        </div>

        <button className="next_button">Next</button>
      </div>
    </div>
  );
}

export default App;
