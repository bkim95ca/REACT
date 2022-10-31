import './App.css';
import Form from './Component/Form';
import {useState} from 'react';
import PeopleDisplay from './Component/PeopleDisplay';

function App() {

  const [people, setPeople] = useState([
    {
        name: "Toad",
        age: 30
    },
    {
        name: "Mario",
        age: 40
    },
    {
        name: "Luigi",
        age: 40
    },
    {
        name: "Princess Peach",
        age: 30
    }
])

const addToState = (newUserObj) => {
  console.log(newUserObj)
  setPeople([...people, newUserObj])
}

  return (
    <div className="App">
      <h1>review Forms and State</h1>
      {JSON.stringify(people)}
        <hr />
      <Form addToState = {addToState}/>
      <PeopleDisplay people={people}/>
    </div>
  );
}

export default App;
