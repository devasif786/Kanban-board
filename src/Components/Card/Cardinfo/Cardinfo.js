import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import "./Cardinfo.css";
import { Calendar, CheckSquare, List, Tag, Trash, Type } from "react-feather";
import Editable from "../../Editable/Editable";
import CardDescription from "./CardDescription/CardDescription";


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
    return (
    <Modal onClose={() => props.onClose()}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type/>
            Title no 1
          </div>
          <div className="cardinfo_box_body">
          <Editable
          text ={"Hello There"}
          placeholder="enter title"
          buttonText="Set Tittle"
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
        <CardDescription/>
          
        </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar/>
           Date
          </div>
          <div className="cardinfo_box_body">
       <input type="date"/>
        </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag/>
           Labels
          </div>
          <div className="cardinfo_box_colors">
            {colors.map((item,index)=>(<li key={index} style={{backgroundColor:item}}
            className={item===activeColor ? "active":"" }
            onClick={()=>setactivecolor(item)}
       
            />))}
          </div>
          <div className="cardinfo_box_body">
          <Editable
          text ={"Your Description Here"}
          placeholder="Enter Labels"
         buttonText="Add Labels"
         />
         </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare/>
           Tasks
          </div>
          <div className="cardinfo_box_progress_bar">
            <div className="cardinfo_box_progress" style={{width:"30%"}}></div>
          </div>
          <div className="cardinfo_box_list">
            <div className="cardinfo_task">
                <input type="checkbox"/>
                <p>Task 1</p>
                <Trash/>
            </div>
            <div className="cardinfo_task">
                <input type="checkbox"/>
                <p>Task 1</p>
                <Trash/>
            </div>
          </div>
          <div className="cardinfo_box_body">
          <Editable
          text ={"hello shubham"}
          placeholder="Enter Task"
         buttonText="Add Task"
         />
        
        </div>
      </div>
      </div>
      
    </Modal>
  );
}
