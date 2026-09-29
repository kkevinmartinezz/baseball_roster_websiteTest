// import logo from './logo.svg';

import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react';  
import { Dropdown, Button } from 'semantic-ui-react'
import './App.css';
import axios from 'axios'


const teams = [
  {text: 'Boston Red Sox', value: 'redsox'},
  {text: 'New York Yankees', value: 'yankees'}
]

function App() {
  //defining states (look at react api for more info)
  const [team, setTeam] = useState(0) 
  const [roster, setRoster] = useState(0)

  const handleChange = (event, data) => { //use to handle state
    // console.log(data.value)
    setTeam(data.value) //this is a function and returns an array
  }
  const fetchRoster = async() => {
    const url = `http://127.0.0.1:8080/roster/${team}`
    const response = await axios.get(url)
    setRoster(response.data) //This is where the name of players is stored in response packet
    // console.log(response)

  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Dropdown
        placeholder='Select Team'
        fluid
        selection
        options={teams}
        onChange={handleChange}
      />
      <Button onClick={fetchRoster}>Get Roster</Button>
      <h1>{roster}</h1>
    </div>
  );
}

export default App;
