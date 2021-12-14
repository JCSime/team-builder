import React from 'react'

export default function Friend(props) {
    const { details } = props
    if (!details) {
        return <h3>Working fetching member&apos;s details...</h3>
      }
    
      return (
        <div className='team member container'>
          <h2>{details.name}</h2>
          <p>Location: {details.location}</p>
          <p>Team: {details.team}</p>
        </div>
      )
}