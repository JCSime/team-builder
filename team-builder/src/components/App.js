import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import TeamMember from './TeamMember'
import TeamForm from './TeamForm'
// import axios from '../axios'
import logo from '../logo.svg';
import '../App.css';

const teamList = [
  { name: 'Hipolito', location: 'PA', team: 'A' },
  { name: 'Rosa', location: 'PA', team: 'B' },
  { name: 'Harley', location: 'CA', team: 'C' },
  { name: 'Jeff', location: 'NY', team: 'D' },
]

const initialFormValues = {
  name: '',
  location: '',
  team: ''
}

export default function SimpleForm() {
  const [team, setTeam] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  // const updateForm = (inputName, inputValue) => {
  //   setFormValues({ ...formValues, [inputName]: inputValue });
  // }

  // const submitForm = () => {
  //   const newMember = {
  //     name: formValues.name.trim(),
  //     location: formValues.location.trim(),
  //     team: formValues.team
  //   }

  //   if (!newMember.name || !newMember.location || !newMember.team) {
  //     setError("All fields are required");
  //   } else {
  //     axios.post("http://fakeapi.com", newMember)
  //       .then(res => {
  //         const memberFromServer = res.data;
  //         setTeam([ memberFromServer, ...team ]);
  //         setFormValues(initialFormValues);
  //       }).catch(err => console.error(err))
  //       .finally(() => setError(""))
  //   }
  // }
  // useEffect(() => {
  //   axios.get('http://fakeapi.com').then(res => setTeam(res.data))
  // }, [])

  const change = (evt) => {
    const { value, name } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
    }
    setTeam(team.concat(newMember));
    setFormValues(initialFormValues);
  }



  return (
    <div className='container'>
      <h1>Form App</h1>
      <h2>{error}</h2>
      {team.map((member, idx) => (
        <div key={idx} details={member}>
          <div className='team member container'>
            <h2>{member.name}</h2>
            <p>Location: {member.location}</p>
            <p>Team: {member.team}</p>
          </div>
        </div>
      ))}
      <form onSubmit={submit}>
        <input 
          value={formValues.name}
          onChange={change}
          name="name"
          type="text"
        />
        <input 
          value={formValues.location}
          onChange={change}
          name="location"
          type="text"
        />
        <input 
          value={formValues.team}
          onChange={change}
          name="team"
          type="text"
        />
        <button>submit</button>
      </form>
        


      {/* <h1>Form App</h1>
      <h2>{error}</h2>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        team.map((member, idx) => {
          return (
            <TeamMember key={idx} details={member} />
          )
        })
      } */}
    </div>
  )
}
