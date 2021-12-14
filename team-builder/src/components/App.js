import React, { useState } from 'react'
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
  const [formValues, setFormValues] = useState(initialFormValues);
  const [team, setTeam] = useState(teamList);

  const change = (evt) => {
    const { value, name } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      location: formValues.location.trim(),
      team: formValues.team
    }
    setTeam(team.concat(newMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className='container'>
      <h1>Form App</h1>
      <form onSubmit={submit}>
        <input
          name="name"
          type="text"
          placeholder="Name here" 
          value={formValues.name}
          onChange={change}
        />
        <select value={formValues.location} name="location" onChange={change}>
          <option value="">-- Select a Location--</option>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="DC">DC</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="PR">PR</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </select>
        <select value={formValues.team} name="team" onChange={change}>
          <option value="">-- Select a Team --</option>
          <option value="A">Team A</option>
          <option value="B">Team B</option>
          <option value="C">Team C</option>
          <option value="D">Team D</option>
        </select>
        <button>submit</button>
      </form>
      {team.map((member, idx) => (
        <div key={idx} details={member}>
          <div className='team member container'>
            <h2>{member.name}</h2>
            <p>Location: {member.location}</p>
            <p>Team: {member.team}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
