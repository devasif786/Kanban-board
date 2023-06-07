import logo from './logo.svg';
import './App.css';
import Board from './Components/Board/Board';
import Editable from './Components/Editable/Editable';

function App() {
  return (
    <div className="App">
     <div className="app_navbar">
      <h2>Kanban</h2>
     </div>
     <div className="app_outer">
      <div className="app_boards">
        <Board/>
        <Board/>
        
        <div className="app_boards_board">
        <Editable
        text="Add Board"
        placeholder="Enter Board title"/>
        </div>
        

      </div>
     </div> 
    </div>
  );
}

export default App;
