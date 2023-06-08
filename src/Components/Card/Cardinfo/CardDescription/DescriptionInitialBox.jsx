import React from "react";
import style from "./DescriptionInitialBox.module.css";
export default function DescriptionInitialBox({onclick}) {
  return (
    <div className={style.wrapper}  onClick={onclick}>
      <p>Add a more detailed description...</p>
    </div>
  );
}
