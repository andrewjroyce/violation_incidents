import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';


class categoryButton extends React.Component {  
constructor(props){
  super(props);
}

componentWillMount() {
  this.state ={name: ''}
}

   handleGarbage = (e) => {
    this.props.sendData('Garbage and Refuse');
    e.preventDefault();
    this.setState({name: 'Garbage and Refuse'}); 
  };

   handleAnimals =(e) => {
    this.props.sendData('Animals and Pests');
    e.preventDefault();
        this.setState({name: 'Animals and Pests'}); 

  };

     handleBuilding =(e) => {
        this.props.sendData('Building Conditions');
    e.preventDefault();
        this.setState({name: 'Building Conditions'}); 

  };

     handleUnsanitary  =(e) => {
        this.props.sendData('Unsanitary Conditions');
    e.preventDefault();
    this.setState({name: 'Unsanitary Conditions'}); 

  };

     handleHazards  =(e) => {
        this.props.sendData('Chemical Hazards');
    e.preventDefault();
    this.setState({name: 'Chemical Hazards'});


  };

     handleVegetation =(e) => {
    this.props.sendData('Vegetation');
    e.preventDefault();
    this.setState({name: 'Vegetation'}); 

  };


    render(){
        return(
    <div className="category">
    <ButtonToolbar className="center">
        <Button bsStyle="primary" onMouseDown={this.handleGarbage}>Garbage and Refuse</Button>

        <Button bsStyle="success" onMouseDown={this.handleUnsanitary}>Unsanitary Conditions</Button>

        <Button bsStyle="info" onMouseDown={this.handleAnimals}>Animals and Pests</Button>

        <Button bsStyle="warning" onMouseDown={this.handleBuilding}>Building Conditions</Button>

        <Button bsStyle="danger" onMouseDown={this.handleVegetation}>Vegetation</Button>
       
       <Button bsStyle="primary" onClick={this.handleHazards} >Chemical Hazards</Button>

    </ButtonToolbar>
    <h1>Category: {this.state.name}</h1>
     </div>
      )
    }
};

categoryButton.propTypes = {
    name: React.PropTypes.string,
    sendData: React.PropTypes.func
}

export default categoryButton;