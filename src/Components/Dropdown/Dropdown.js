import React, { useEffect, useRef } from "react";

export default function Dropdown(props) {
  return (
    <div
      className="dropdown"
      style={{ position: "absolute", top: "100%", right: "0" }}
    >
      {props.children}
    </div>
  );
}
