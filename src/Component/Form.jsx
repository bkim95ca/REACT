import React, {useState} from 'react'
import PeopleDisplay from './PeopleDisplay';

const Form = (props) => {

   

    //Form inputs
    const[name, setName] = useState("");
    const[age, setAge] = useState(0);

    const createUserForm = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            age: age
        }
        // console.log(newUser);
        props.addToState(newUser)
        setName("");
        // setAge(0);
    }

  return (
    <fieldset>
     
        <div>
            name:{JSON.stringify(name)}
            age:{JSON.stringify(age)}
            <form onSubmit={createUserForm}>
                name: <input onChange={(e) => {
                    setName(e.target.value)
                }} value={name}/> <br />
                age: <input onChange={(e) => {
                    setAge(e.target.value)
                }} type = "number" value={age}/> <br />
                <button>click</button>
            </form>
        </div>
        <div>
            loop over state <br />
            
        </div>
    </fieldset>
  )
}

export default Form