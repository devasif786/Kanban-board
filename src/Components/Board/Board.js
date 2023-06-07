import React,{useState} from "react";
import style from "./Board.module.css";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

export default function Board() {
  const [showDropdown,setshowDropdown]=useState(true)
  function hanldeShow(){
    if(showDropdown==true){
      setshowDropdown(false)
    }else{
      setshowDropdown(true)
    }
  }
  return (
    <div className={style.board}>
      <div className={style.board_top}>
        <p className={style.board_top_title}>
          todo <span>2</span>{" "}
        </p> 
        <div className={style.board_top_more}  onClick={hanldeShow}  >
        <MoreHorizontal />
        {showDropdown&&(
           <Dropdown
          
          >
           <div className={style.board_dropdown}>
           <p>Delete Board</p>
           </div>  
         </Dropdown>
        )}
       
        </div>
        </div>
      <div className={style.board_cards}>
        <Card />

        <Editable
          className={style.board_cards_add}
          text="Add Card"
          placeholder="Enter Card Title"
        />
      </div>
    </div>
  );
}
