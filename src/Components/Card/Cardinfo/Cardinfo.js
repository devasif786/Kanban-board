import React, { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import "./Cardinfo.css";
import { Calendar, CheckSquare, List, Tag, Trash, Type } from "react-feather";
import Editable from "../../Editable/Editable";
import CardDescription from "./CardDescription/CardDescription";
import Chip from '../../Chip/Chip'
import { RxActivityLog } from "react-icons/rx";
import Activity from "./Activity/Activity";
import {RxCross2} from 'react-icons/rx'
export default function Cardinfo(props) {
  const colors=[
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ]
  const [activeColor,setactivecolor]=useState("")
  
  const [values,setValues]=useState({...props.card})
  const calculatePercent = () => {
    if (values.tasks?.length==0) return 0;
    const completed =values.tasks?.filter((item) => item.completed)?.length;
    return (completed /values.tasks?.length) * 100 +"";
  };

  const addLabel=(value,color)=>{
    const index=values.labels?.findIndex(item=>item.text===value)
   if(index > -1)return ;
    const label={
      text:value,
      color
    }
    setValues({...values,labels:[...values.labels,label]})
     setactivecolor("")
  }

  const removeLabel=(text)=>{
      const tempLabels=values.labels?.filter((item)=>item.text!==text)
     

     setValues({...values,labels:tempLabels})
  }

 
  useEffect(()=>{
    props.updateCard(props.card.id,props.boardId,values)
  },[values])
    return (
    <Modal onClose={() => props.onClose()}>
       <RxCross2 className='remove' onClick={props.onClose}/>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
          
          </div>
          <div className="cardinfo_box_body">
          <Editable
          text ={values.title}
          default={values.title}
          placeholder="enter title"
          buttonText="Set Tittle"
          onSubmit={(value)=>setValues({...values,title:value})}
          />
         
        </div>
        </div>
          
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List/>
           Description
          </div>
          <div className="cardinfo_box_body">
          {/* <Editable
          text ={"Your Description Here"}
          placeholder="Enter Description"
          buttonText="Set Description"
          /> */}
        <CardDescription 
        

        />
          
        </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar/>
           Date
          </div>
          <div className="cardinfo_box_body">
       <input type="date" defaultValue={values.date ? new Date(values.date).toISOString().substr(0,10):""}
       onChange={(event)=>setValues({...values,date:event.target.value})}
       />
        </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag/>
           Labels
          </div>
          <div className="cardinfo_box_labels">
            {
                values.labels.map((item,index)=>(<Chip close onClose={()=>removeLabel(item.text)}
                key={item.text+index}
                color={item.color}
                text={item.text}
                />))
            }
          
          </div>
          <div className="cardinfo_box_colors">
            {colors.map((item,index)=>(<li key={index} style={{backgroundColor:item}}
            className={item===activeColor ? "active":"" }
            onClick={()=>setactivecolor(item)}
       
            />))}
          </div>
          <div className="cardinfo_box_body">
          <Editable
          text ="Add Label"
          placeholder="Enter Labels"
         buttonText="Add"
         onSubmit={(value)=>addLabel(value,activeColor)}
         />

<div className="cardinfo_box">
          <div className="cardinfo_box_title">
         <RxActivityLog/>
           Activity
          </div>
          <div className="cardinfo_box_body">
          {/* <Editable
          text ={"Your Description Here"}
          placeholder="Enter Description"
          buttonText="Set Description"
          /> */}
      
          <Activity/>
        </div>
        </div>
         </div>
         
        </div>

       
            
          
     
      
      </div>
      
    </Modal>
  );
}
