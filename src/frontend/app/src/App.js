// import logo from './logo.svg';

import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

import { Button } from 'semantic-ui-react'
import './App.css';


const teams = [
  {text: 'Boston Red Sox', value: 'redsox'},
  {text: 'New York Yankees', value: 'yankees'}
]

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Dropdown
        placeholder='Select Friend'
        fluid
        selection
        options={teams}
      />
      <Button>Get Roster</Button>
    </div>
  );
}

export default App;
