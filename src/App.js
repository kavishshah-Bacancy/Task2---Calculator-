/* eslint-disable no-eval */
import React, { useState } from "react";
import classes from "./App.module.css";
import Layout from "./Components/Layout/Layout";

function App() {
  const [result, setResult] = useState("");
  const [no1, setNo1] = useState(0);
  const [flag, setFlag] = useState(false);
  const backspace = () => {
    setResult(result.toString().slice(0, -1));
  };
  const clearInput = () => {
    setResult("");
  };

  const calculate = () => {
    let calculatedAns = "";
    try {
      if (flag) {
        let val = result;
        let index = val.indexOf("^");
        val = val.substr(index + 1, val.length);
        setResult((no1 ** val).toString());
      } else {
        calculatedAns = eval(result);
        setResult(calculatedAns.toString());
      }
    } catch (error) {
      setResult("Syntax error");
    }
  };

  const findSquare = () => {
    try {
      let currentValue = eval(result);
      let squareValue = currentValue * currentValue;
      setResult(squareValue);
    } catch (error) {
      setResult("Syntax error");
    }
  };

  const findSquareRoot = () => {
    try {
      let sqrtValue = Math.sqrt(result);
      setResult(sqrtValue);
    } catch (error) {
      setResult("Syntax error");
    }
  };

  const findPower = (btnIndetifier) => {
    try {
      setNo1(parseInt(result));
      setResult(result + btnIndetifier);
      setFlag(true);
    } catch (error) {
      setResult("Syntax error");
    }
  };
  const onClickHandler = (btnIndetifier) => {
    if (btnIndetifier === "=") calculate();
    else if (btnIndetifier === "CE") backspace();
    else if (btnIndetifier === "C") clearInput();
    else if (btnIndetifier === "Square") findSquare();
    else if (btnIndetifier === "Sqrt") findSquareRoot();
    else if (btnIndetifier === "^") findPower(btnIndetifier);
    else setResult(result + btnIndetifier);
  };

  return (
    <div className={classes.App}>
      <div className={classes.result}>
        <p>{result}</p>
      </div>
      <Layout clicked={onClickHandler} />
    </div>
  );
}

export default App;
