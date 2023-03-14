import React from "react";
import classes from "./Header.module.scss";
import { HeaderCartButton } from "@components";

export default function Header(props) {
  console.log("Header is rendering");
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>mulliri.com</h1>
        <HeaderCartButton></HeaderCartButton>
      </div>
      <div className={classes["main-image"]}>
        {/* <img src="/images/R.png" alt="meals"></img> */}
      </div>
    </React.Fragment>
  );
}
