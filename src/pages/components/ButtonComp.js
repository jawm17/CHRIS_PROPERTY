import React, { useEffect, useState } from "react";
import { BorderBG, Border } from "./Borders.js";
import "./buttoncompStyle.css";

export default function ButtonComp(props) {
  return (
    <>
      <div id="button">
        <h5 style={{ color: props.wordColor }}>{props.word}</h5>
        <Border borderFiller={props.borderFiller} />
        <BorderBG fillerBG={props.fillerBG} />
      </div>
    </>
  );
}
// style={{ width: props.btnWidth }}