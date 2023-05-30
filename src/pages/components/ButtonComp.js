import React, { useEffect, useState } from "react";
import BorderBg from "./BorderBg.js";
import Border from "./Border.js";
import "./buttoncompStyle.css";

export default function ButtonComp(props) {
  return (
    <>
      <div id="button" onClick={props.link ? () => window.open(props.link) : () => document.getElementById(props.location).scrollIntoView({ behavior: 'smooth' })}>
        <h5 style={{ color: props.wordColor, fontSize: props.fontSize}}>{props.word}</h5>
        <Border borderFiller={props.borderFiller} />
        <BorderBg fillerBG={props.fillerBG} />
      </div>
    </>
  );
}
// style={{ width: props.btnWidth }}