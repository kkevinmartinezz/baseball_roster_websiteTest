// import logo from './logo.svg';

import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react';
import { Dropdown, Button, Item } from 'semantic-ui-react'
import './App.css';
import axios from 'axios'

//Import table stuff
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from 'semantic-ui-react'


const teams = [
  { text: 'Boston Red Sox', value: 'redsox' },
  { text: 'New York Yankees', value: 'yankees' },
  { text: 'Los Angeles Dodgers', value: "dodgers"},
  { text: 'Not a team', value: "invalid"}
]

function App() {
  //defining states (look at react api for more info)
  const [team, setTeam] = useState(0)
  const [roster, setRoster] = useState(0)
  const [error, setError] = useState(0)

  const handleChange = (event, data) => { //use to handle state
    // console.log(data.value)
    setTeam(data.value) //this is a function and returns an array
  }
  const fetchRoster = async () => {
    if (team !== 0) {
      try {
        const url = `http://127.0.0.1:8080/roster/${team}`
        const response = await axios.get(url)
        setRoster(response) //This is where the name of players is stored in response packet
        // console.log(response)
      } catch (error) {
        setError(error);
      }
    }
  }
  return (
    <div className="App">
      <h1>Choose a team to see their current roster!</h1>
      <Dropdown
        placeholder='Select Team'
        fluid
        selection
        options={teams}
        onChange={handleChange}
      />
      <Button onClick={fetchRoster}>Get Roster</Button>
      {/* <h1>{roster}</h1> */}

      <div>
        {roster ? (
          <div>
            <Table celled selectable inverted>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {roster["data"].map((item, index) => (
                  <TableRow>
                    <TableCell key={index}>{item}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : error ? (
          <div>
            <h1>ERROR:</h1>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        ) : (
          <h1>Pick a Team</h1>
        )}
      </div>

    </div>

  )
}

export default App;
