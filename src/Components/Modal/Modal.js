import React from 'react'
import style from './Modal.module.css'
export default function Modal(props) {
  return (
    <div className={style.modal}
    onClick={()=>props.onClose? props.onClose():""}>

<div className={style.modal_content} onClick={(event)=>event.stopPropagation()}>{props.children}</div>
    </div>
  )
}
