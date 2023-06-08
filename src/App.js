import logo from './logo.svg';
import './App.css';
import Board from './Components/Board/Board';
import Editable from './Components/Editable/Editable';
import { useState } from 'react';
import { getActiveElement } from '@testing-library/user-event/dist/utils';
import Navbar from './Components/Header/Navbar';

function App() {

  const [boards,setBoards]=useState([{
    id:Date.now()+Math.random()*2,
    title:"To do",
    cards:[{
      id:Date.now()+Math.random()*2,
      title:"Card 1",
      task:[],
      labels:[{
        text:"frintend",
        color:"lightgreen",
      }],
      desc:"hello function up",
      date:"",
    },
    {
      id:Date.now()+Math.random()*2,
      title:"Card 2",
      task:[],
      labels:[{
        text:"backend",
        color:"green",
      }],
      desc:"hello function up",
      date:"",
    }]
  }])
  const [target,setTarget]=useState({
    cid:"",
    bid:"",
  })
const addCard=(title,bid)=>{
  const card={
    id:Date.now()+Math.random(),
    title,
    labels:[],
    task:[],
    date: new Date().toDateString(),
    desc:"",
  }
  const index=boards.findIndex(item=>item.id===bid)
  if(index<0)return;
  const tempBoards=[...boards]
  tempBoards[index].cards.push(card)
  setBoards(tempBoards);
}
const removeCard=(cid,bid)=>{
  const bIndex=boards.findIndex(item=>item.id===bid)
  if(bIndex<0)return;

  const cIndex=boards[bIndex].cards.findIndex(item=>item.id===cid)
  if(cIndex<0)return;
  const tempBoards=[...boards]
  tempBoards[bIndex].cards.splice(cIndex,1)
  setBoards(tempBoards)
}
const addBoard=(title)=>{
  
  
  setBoards([...boards,
  {
    id:Date.now()+ Math.random(),
    title,
    cards:[],
  }
])
}
const removeBoard=(bid)=>{
  const tempBoards=boards.filter((item)=> item.id !==bid)
   setBoards(tempBoards)
}
const handleDragEnd=(cid,bid)=>{
  let s_bIndex,s_cIndex,t_bIndex,t_cIndex
  s_bIndex=boards.findIndex((item)=>item.id===bid)
 

  s_cIndex=boards[s_bIndex].cards?.findIndex((item)=>item.id===cid)
 
  
  t_bIndex=boards.findIndex((item)=>item.id===target.bid)


  t_cIndex=boards[t_bIndex].cards?.findIndex((item)=>item.id==target.cid)
 
  const tempBoards=[...boards]
  const tempCard=tempBoards[s_bIndex].cards[s_cIndex]
tempBoards[s_bIndex].cards.splice(s_cIndex,1)
tempBoards[t_bIndex].cards.splice(t_cIndex,0,tempCard)
setBoards(tempBoards)
}
const handleDragEnter=(cid,bid)=>{
  setTarget({
    cid,
    bid,
  })
}

  return (
    <div className="App">
     <div className="app_navbar">
      <Navbar/>
     </div>
     <div className="app_outer">
      <div className="app_boards">
        {
          boards.map((item)=>(<Board
          key={item.id} board={item}
          removeBoard={removeBoard}
          addCard={addCard}
          removeCard={removeCard}
          handleDragEnd={handleDragEnd}
          handleDragEnter={handleDragEnter}
          />
          
          ))}
        
        
        <div className="app_boards_board">
        <Editable
        text="Add Board"
        placeholder="Enter Board title"
        onSubmit={value=>addBoard(value)}
        />
        </div>
        

      </div>
     </div> 
    </div>
  );
}

export default App;

