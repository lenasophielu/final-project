import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Vienna" />
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/lena-lumplecker-855b30137/" >Lena Lumplecker</a> and is
      <a href="https://github.com/lenasophielu/final-project" > open-sourced on Git-Hub</a>
      </footer>
    </div>
    </div>
  
  );
}

