import React, { useState, Component } from 'react'
import './components/component.css'
import Navbar from './components/navbar';
import Form from './components/form'
import Sideform from './components/Sideform'

export default function App(){
  const [stuff ,setStuff] = useState('')

  return(
    <React.Fragment>
      <Navbar />
      <div>
        <Sideform stuff={stuff} />
        <Form stuff={(abc)=>setStuff(abc)} />
      </div>
    </React.Fragment>
  )
}
