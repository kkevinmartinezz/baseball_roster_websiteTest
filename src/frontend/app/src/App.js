import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Dropdown
        placeholder='Select Team'
        fluid
        selection
        // options={friendOptions}
      />
    </div>
  );
}

export default App;
