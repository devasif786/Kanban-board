import React,{useState} from 'react'
import style from './Card.module.css'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import Dropdown from "../Dropdown/Dropdown";
export default function Card() {
  const [showDropdown,setshowDropdown]=useState(false)
  function hanldeShow(){
    if(showDropdown==true){
      setshowDropdown(false)
    }else{
      setshowDropdown(true)
    }
  }
  return (
    <div className={style.card}>Card
    <div className={style.card_top}>
        <div className={style.card_top_labels}>
      <Chip text="Frontend" color="green"/>
      {/* <Chip close text="Frontend" color="green"/> */}
      
        </div>
        <div className={style.card_top_more}  onClick={hanldeShow}  >
        <MoreHorizontal />
        {showDropdown&&(
           <Dropdown
          
          >
           <div className={style.card_dropdown}>
           <p>Delete Board</p>
           </div>  
         </Dropdown> 
        )}
       
        </div>
        </div>
        <div className={style.card_title}>
          hello sir 
        </div>
        <div className={style.card_footer}>
          <p><Clock/>29 sep</p>
          <p> <CheckSquare/>1/4</p>
        </div>
        </div>
  )
}
