import React, { Component } from 'react'
import './components/component.css'
import Navbar from './components/navbar';
import Form from './components/form'
import Sideform from './components/Sideform'

class App extends Component{
  

  render(){
    return(
      <React.Fragment>
        <Navbar />
        <div>
          <Sideform />
          <Form />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
