import React, { Component } from 'react';
import data from './violation.json'; 

class violationDates extends Component {
    render(){
        let name = this.props.name;
        const dates = []
        function filterItems(query) {
        data.filter(function (el) {
         if( el.violation_category == name)
            {dates.push(el.violation_date)}
        });
    }
        
        const filteredCount = filterItems(name);
        console.log(dates)
        let final = dates.length
        let secondFinal = dates.length -1

        return(
          <div className="Waste">
          <h1>Violation Start: {dates.slice(0,1)}</h1>
          <h1>Last known violation: {dates.slice(secondFinal,final)}</h1>
          </div>
      )
    }
};

export default violationDates;