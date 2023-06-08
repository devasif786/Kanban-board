import React, { useState } from "react";
import style from "./Menu.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {TbLayoutBoardSplit} from 'react-icons/tb'
import { BsPersonFill } from "react-icons/bs";
import SettingsIcon from '@mui/icons-material/Settings';
export default function Menu() {
  

  return (
    <div className={style.wrapper}>
      <div className={style.dark_mode}>
        Dark Mode <DarkModeIcon sx={{ fontSize: "2rem", color: "black" }} />
      </div>
      <div className={style.boards}>Boards<TbLayoutBoardSplit/></div>
      <div className={style.members}>Members<BsPersonFill/></div>
      <div className={style.setting}>Workspace setting<SettingsIcon/></div>
      
      
    </div>
  );
}
