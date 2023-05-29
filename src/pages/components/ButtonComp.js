import React, { useEffect, useState } from "react";
import BorderBg from "./BorderBg.js";
import Border from "./Border.js";
import "./buttoncompStyle.css";

export default function ButtonComp(props) {
  return (
    <>
      <div id="button" onClick={() => window.open(props.link)}>
        <h5 style={{ color: props.wordColor, fontSize: props.fontSize}}>{props.word}</h5>
        <Border borderFiller={props.borderFiller} />
        <BorderBg fillerBG={props.fillerBG} />
      </div>
    </>
  );
}
// style={{ width: props.btnWidth }}