import React, { useState, useEffect } from 'react'
import TeamMember from './TeamMember'
import TeamForm from './TeamForm'
import axios from '../axios'
import logo from './logo.svg';
import './App.css';

const initialFormValues = {
  name: '',
  ID: '',
  team: ''
}

export default function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      ID: formValues.id.trim(),
      team: formValues.team
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      setError("All fields are required, ya chump!!!");
    } else {
      axios.post("fakeapi.com", newMember)
        .then(res => {
          const memberFromServer = res.data;
          setTeam([ memberFromServer, ...team ]);
          setFormValues(initialFormValues);
        }).catch(err => console.error(err))
        .finally(() => setError(""))
    }
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>
      <h2>{error}</h2>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        team.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}
