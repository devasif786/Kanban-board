import React, { useEffect, useRef } from "react";

export default function Dropdown(props) {
//   const dropdownRef = useRef();
//   const handleclick = (event) => {
//     if (dropdownRef && !dropdownRef.current.contains(event.target)) {
//       if (props.onClose) props.onClose();
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("click", handleclick);
//     return () => {
//       document.removeEventListener("click", handleclick);
//     };
//   });
  return (
    <div
      
      className="dropdown"
      style={{ position: "absolute", top: "100%", right: "0" }}
    >
      {props.children}
    </div>
  );
}
