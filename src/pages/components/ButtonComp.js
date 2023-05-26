import React, { useEffect, useState } from "react";
import {BorderBG,Border} from "./Borders.js";
import "./buttoncompStyle.css";


export default function ButtonComp(props) {

  return (
    <>
      <div id="button">
        <a>
          <h5 style={{color: props.wordColor}} >{props.word}</h5>
        </a>
        <Border filler={props.filler}/>
        <BorderBG fillerBG={props.fillerBG}/>
      </div>
    </>
  );
}
