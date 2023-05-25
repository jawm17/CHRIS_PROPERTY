import React from 'react';
import "./buttoncompStyle.css";

export const BorderBG = (props) => {
  return (
< >
      <svg id="borderBg" class="cta-block-button-bg" xmlns="http://www.w3.org/2000/svg" fill={props.fillerBG} viewBox="0 0 182 48">
        <path
          d="M179.115 1H2.885v15.979L1 19.4l2.827 4.358L1 27.632l1.885 2.905V47h176.23V30.537L181 28.116l-2.827-4.358L181 19.4l-1.885-2.421V1Z">
        </path>
      </svg>
    </>
  );
}

export const Border = (props) => {
  return (
    < >
      <svg id="border" class="cta-block-button-border" xmlns="http://www.w3.org/2000/svg" fill={props.filler} viewBox="0 0 189 50">
        <path fill-rule="evenodd"
          d="M5.5.5h178v17.34l5.114 7.16-5.114 7.16V49.5H5.5V32.16L.386 25 5.5 17.84V.5Zm1 1v16.66L1.614 25 6.5 31.84V48.5h176V31.84l4.886-6.84-4.886-6.84V1.5H6.5Z"
          clip-rule="evenodd"></path>
        <path fill-rule="evenodd"
          d="M1.5.5h186v17.66L182.614 25l4.886 6.84V49.5H1.5V31.84L6.386 25 1.5 18.16V.5Zm1 1v16.34L7.614 25 2.5 32.16V48.5h184V32.16L181.386 25l5.114-7.16V1.5H2.5Z"
          clip-rule="evenodd"></path>
      </svg>
    </>
  );
}
