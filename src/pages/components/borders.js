import React from "react";
import "./buttoncompStyle.css";

export const BorderBG = (props) => {
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
};

export const Border = (props) => {
  return (
    <>
      <svg
        id="border"
        xmlns="http://www.w3.org/2000/svg"
        fill={props.borderFiller}
        viewBox="0 0 199 58"
      >
        <path
          fill-rule="evenodd"
          d="M5.5.5h188v21.34l5.114 7.16-5.114 7.16V57.5H5.5V36.16L.386 29 5.5 21.84V.5Zm1 1v20.66L1.614 29 6.5 35.84V56.5h186V35.84l4.886-6.84-4.886-6.84V1.5H6.5Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M1.5 4.5h196v17.66L192.614 29l4.886 6.84V53.5H1.5V35.84L6.386 29 1.5 22.16V4.5Zm1 1v16.34L7.614 29 2.5 36.16V52.5h194V36.16L191.386 29l5.114-7.16V5.5H2.5Z"
          clip-rule="evenodd"
        ></path>

      </svg>

    </>
  );
};
