import React, { useEffect, useState } from 'react'
import API from '../api'

export default function Dashboard(){
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=>{
    API.get('/projects').then(r=>setProjects(r.data)).catch(e=>setError(e.message))
  },[])

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p style={{color:'red'}}>{error}</p>}
      <div>
        {projects.length === 0 && <p>No projects yet.</p>}
        <ul>
          {projects.map(p=> (
            <li key={p._id}>
              <strong>{p.name}</strong> - {p.description}
              <div>Members: {p.members && p.members.map(m=>m.name).join(', ')}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
