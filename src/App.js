import React, {useState, useEffect} from 'react';
import Room from "./Room"
import './App.css';

function App(props) {

  const [user, setUser] = useState(null),
    [allRooms, setAllRooms] = useState([]),
    [currentRoom, setCurrentRoom] = useState({room:{}, users: [], messages: []})


  return (
    <div className="App">
      
      <Room cableApp={props.cableApp}/>
    </div>
  );
}

export default App;
