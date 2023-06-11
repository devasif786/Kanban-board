import React,{useState} from 'react'
import style from './Card.module.css'
import { CheckSquare, Clock, MoreHorizontal, Trash2,} from 'react-feather'
import Chip from '../Chip/Chip'
import Dropdown from "../Dropdown/Dropdown";
import Cardinfo from './Cardinfo/Cardinfo';
import { Edit2 } from 'react-feather'
export default function Card(props) {
  const [showDropdown,setshowDropdown]=useState(false)
  const [showModal,setShowModal]=useState(false)
  function hanldeShow(){
    if(showDropdown==true){
      setshowDropdown(false)
    }else{
      setshowDropdown(true)
    }
  }
  return (
    <>

     {showModal && <Cardinfo card={props.card} onClose={()=>setShowModal(false)}
     updateCard={props.updateCard}
     boardId={props.boardId}
     />}
    <div className={style.card} 
   draggable
   onDragEnd={()=>props.handleDragEnd(props.card?.id,props.boardId)}
   
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
        <Trash2   onClick={()=>props.removeCard(props.card?.id,props.boardId)}/>
       
       
        </div>
        </div>
        <div className={style.card_title} onClick={()=>setShowModal(true)}>
          {props.card?.title}
          <div><Edit2/></div>
        </div>
        <div className={style.card_footer}>
          {props.card?.date &&(
            <p><Clock/>{props.card?.date}</p>
          )}
          
         
        </div>
        </div>
        </>
  )
}
