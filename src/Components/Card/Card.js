import React,{useState} from 'react'
import style from './Card.module.css'
import { CheckSquare, Clock, MoreHorizontal, Trash2 } from 'react-feather'
import Chip from '../Chip/Chip'
import Dropdown from "../Dropdown/Dropdown";
export default function Card(props) {
  const [showDropdown,setshowDropdown]=useState(false)
  function hanldeShow(){
    if(showDropdown==true){
      setshowDropdown(false)
    }else{
      setshowDropdown(true)
    }
  }
  return (
    <div className={style.card} 
   draggable
   onDragEnd={()=>props.handleDragEnd(props.card?.id,props.boardId)}
   handleDragEnter
   onDragEnter={()=>props.handleDragEnter(props.card?.id,props.boardId)}
   >

    
    <div className={style.card_top}>
        <div className={style.card_top_labels}>
          {props.card?.labels?.map((item,index)=>(
            <Chip key={index}text={item.text}
            color={item.color}/>
          ))}
      {/* <Chip text="Frontend" color="green"/> */}
      {/* <Chip close text="Frontend" color="green"/> */}
      
        </div>
        <div className={style.card_top_more}  onClick={hanldeShow}  >
        <MoreHorizontal />
        {showDropdown&&(
           <Dropdown
          
          >
           <div className={style.card_dropdown}>
           <p onClick={()=>props.removeCard(props.card?.id,props.boardId)}>Delete<Trash2/></p>
           </div>  
         </Dropdown> 
        )}
       
        </div>
        </div>
        <div className={style.card_title}>
          {props.card?.title}
        </div>
        <div className={style.card_footer}>
          {props.card?.date &&(
            <p><Clock/>{props.card?.date}</p>
          )}
          
          <p> <CheckSquare/>1/4</p>
        </div>
        </div>
  )
}
