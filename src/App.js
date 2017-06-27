import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './violation.json'; 
import IncidentCount from './count';
import CategoryButton from './CategoryButton';
import violationDates from './violationDates';
import ViolationTypes from './violationTypes';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

    getData = (val) => {
    console.log(val);
    this.setState({name: val});
}
//
//
//
  render() {
      const name = this.state.name;

    return (
      <div className="App">
            <CategoryButton sendData={this.getData}/>
            <IncidentCount name={name} lore={data}/>
            <ViolationTypes name={name}/>
        <div className="App-header"> Andrew J Royce Demo
          <img src={logo} className="App-logo" alt="logo" />
          Made With React
        </div>
      </div>
    );
  }
}

export default App;
