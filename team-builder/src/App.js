import React, {useState} from 'react';
import './App.css';

const initialValue={
  name: '',
  role: '',
  email: '',
}
const defaultteam=[
  {name:'harry', role: 'seeker', email:'harrypotter@hogwarts.edu'}
]


function AddBar() {
  const [team, setTeam] = useState(defaultteam);
  const [formValues, setFormValues] = useState(initialValue);

  const change = evt => {
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }
  const add = evt => {
    evt.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      role: formValues.role.trim(),
      email: formValues.email.trim(),
    }
    setTeam([...team, newMember]);
    setFormValues(initialValue);
  }
  return(
    <div className ='container'>
    <form onSubmit={add}>
    <input name='name' type="text" value={formValues.name} onChange={change} />
    <input name='role' type="text" value={formValues.role} onChange={change} />
    <input name='email' type="text" value={formValues.email} onChange={change} />
    <button>Add</button>
  </form>
  {
        team.map((member, idx) => {
          return <div className = 'member' key={idx}>{member.name} is our {member.role} their email is {member.email}</div>
        })
      }
</div>
  )
}
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <AddBar/>
      </header>
    </div>
  );
}

