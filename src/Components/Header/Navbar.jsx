import React, { useState } from "react";
import style from "./Navbar.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { GoRocket } from "react-icons/go";
import { BiFilter } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import { SlArrowDown } from "react-icons/sl";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Menu from "./Menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.left_nav}>
        <span onClick={toggleMenu} className={style.menu}>
          <WidgetsIcon />
          {open && <Menu onClose={toggleMenu} />}
        </span>
        <nav className={style.heading}>Home Task Management</nav>
        <div className={style.star_icon}>
          <AiOutlineStar className={style.star} />
        </div>
        <div className={style.people_icon}>
          <PeopleAltIcon className={style.icon_person} />
          <span>Workspace visible</span>
        </div>
        <div className={style.btn_board}>
          <CiViewBoard className={style.board_icon} />
          <button>Board</button>
        </div>
        <SlArrowDown className={style.down_arrow} />
      </div>
      <div className={style.right_nav}>
        <div className={style.power_ups}>
          <GoRocket />
          <span>Power_Ups</span>
        </div>
        <div className={style.energy_icon}>
          <BoltIcon />
          <span>Automation</span>
        </div>
        <div className={style.filter_icon}>
          <BiFilter className={style.filterIcon} />
          <span>Filter</span>
        </div>
        <nav>
          <AccountCircleIcon
            sx={{
              marginRight: "-1.5rem",
              fontSize: "2rem",
              cursor:'pointer'
            }}
          />
        </nav>
        <div className={style.share_btn}>
          <BsPersonFillAdd className={style.person_icon} />
          <span style={{ color: "rgb(87, 101, 126)" }}>Share</span>
        </div>
        <MoreHorizIcon sx={{ fontSize: "1.7rem",cursor:'pointer' }} />
      </div>
      
    </div>
  );
}
