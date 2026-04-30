import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try{
      const res = await API.post('/auth/login', { email, password })
      const data = res.data
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    }catch(err){ setError(err.response?.data?.message || err.message) }
  }

  return (
    <div style={{maxWidth:400}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type='submit'>Login</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}
