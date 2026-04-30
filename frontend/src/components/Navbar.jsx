import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav style={{padding:10, background:'#282c34', color:'#fff'}}>
      <Link to='/' style={{color:'#fff', textDecoration:'none', fontWeight:'bold'}}>Team Task Manager</Link>
      <span style={{float:'right'}}>
        <Link to='/dashboard' style={{color:'#fff', marginRight:10}}>Dashboard</Link>
      </span>
    </nav>
  )
}
