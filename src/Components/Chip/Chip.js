import React from "react";
import style from "./Chip.module.css";
import { X } from "react-feather";
export default function Chip(props) {
  return (
    <div className={style.chip} style={{ backgroundColor: props.color }}>
      {props.text}
      {props.close && (
        <X onClick={() => (props.onClose ? props.onClose() : "")} />
      )}
    </div>
  );
}
