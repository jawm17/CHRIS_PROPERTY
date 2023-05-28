import React from "react";
import "./buttoncompStyle.css";

export default function BorderBg(props) {
    return (
        <>
          <svg
            id="borderBg"
            xmlns="http://www.w3.org/2000/svg"
            fill={props.fillerBG}
            viewBox="0 0 193 49"
          >
            <path d="M190 .5H3V17l-2 2.5L4 24l-3 4 2 3v17h187V31l2-2.5-3-4.5 3-4.5-2-2.5V.5Z"></path>
          </svg>
        </>
      );
}