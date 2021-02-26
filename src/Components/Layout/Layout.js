import React, { useState } from "react";
import classes from "./Layout.module.css";

function Layout(props) {
  const [btnArr] = useState([
    "(",
    "CE",
    ")",
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "^",
    "Sqrt",
    "Square",
    "e",
    ".",
    "0",
    "=",
    "/",
  ]);
  return (
    <div className={classes.button}>
      {btnArr.map((name) => {
        console.log(name);
        return (
          <button
            key={name}
            name={name}
            onClick={(e) => props.clicked(e.target.name)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

export default Layout;
