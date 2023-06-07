import React,{useState} from 'react'
import style from './Editable.module.css'
import { X } from 'react-feather'

export default function Editable(props) {
    const [showEdit, setshowEdit]=useState(false)
  return (
    <div className={style.editable}>
    {
        showEdit ? (
    
    <form 
    className={style.editable_edit}
     onSubmit={(event)=>{
        event.preventDefault()
      if(props.onSubmit)props.onSubmit()
      }}>
        <input type="text" 
        autoFocus
        defaultValue={props.text}
        placeholder={props.placeholder || "Enter Item"}/>
        <div className={style.editable_edit_footer}>
            <button type="submit">{props.buttonText || "ADD"}</button>
        <X style={{color:"red"}} onClick={()=> setshowEdit(false)}/>
        </div>
    </form>)
    : (<p className={style.editable_display} onClick={()=>setshowEdit(true)}>{props.text || "ADD ITEM"}</p>)
}
    </div>
  )
}
