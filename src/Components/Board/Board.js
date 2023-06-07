import React,{useState} from "react";
import style from "./Board.module.css";
import { Delete, MoreHorizontal, Trash2 } from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

export default function Board(props) {
  const [showDropdown,setshowDropdown]=useState(false)
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
          {props.board?.title}
        </p> 
        <div className={style.board_top_more}  onClick={hanldeShow}  >
        <MoreHorizontal />
        {showDropdown&&(
           <Dropdown
          
          >
           
           <p className={style.board_dropdown} onClick={()=>props.removeBoard(props.board?.id)}>Delete<Trash2/></p>
           
         </Dropdown>
        )}
       
        </div>
        </div>
      <div className={style.board_cards}>
        {props.board?.cards.map((item)=>(<Card key={item.id}
        card={item}
        removeCard={props.removeCard}
        boardId={props.board?.id}
        handleDragEnd={props.handleDragEnd}
          handleDragEnter={props.handleDragEnter}
        />
        ))}
        

        <Editable
          className={style.board_cards_add}
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value)=>props.addCard(value,props.board?.id)}
        />
      </div>
    </div>
  );
}
