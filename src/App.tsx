import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Date_wrapper from "./Components/Date_wrapper/Date_wrapper";
import Output from "./Components/Output/Output";

function App() {
  const [livedDays, setLivedDays] = useState(0);
  const [livedMonth, setLivedMonths] = useState(0);
  const [livedYears, setLivedYears] = useState(0);
  let onHandleRemove = (
    livedDays: number,
    livedMonths: number,
    livedYears: number
  ) => {
    setLivedDays(livedDays);
    setLivedMonths(livedMonths);
    setLivedYears(livedYears);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Date_wrapper onRemove={onHandleRemove} />

        <Output
          name="birthdayOutput"
          livedDays={livedDays}
          livedMonth={livedMonth}
          livedYears={livedYears}
        />
      </header>
      <footer className="attribution">
        Coded by
        <a href="https://github.com/MrFauli/AgeCalculatorApp-React">
          {" "}
          Gianluca
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
