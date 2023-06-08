import React,{useState} from 'react'
import style from './Editable.module.css'
import { X } from 'react-feather'

export default function Editable(props) {
    const [showEdit, setshowEdit]=useState(false)
    const [inputValue,setInputValue]=useState(props.default || "")
   
    return (
    <div className={style.editable}>
    {
        showEdit ? (
    
    <form 
    className={style.editable_edit}
     onSubmit={(event)=>{
        event.preventDefault()

      if(props.onSubmit)props.onSubmit(inputValue)
      setshowEdit(false)
      setInputValue("")
      }}>
        <input autoFocus type="text" 
        
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
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
