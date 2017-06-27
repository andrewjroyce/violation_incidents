import React, { Component } from 'react';


class IncidentCount extends Component {
    render(){
        let info = this.props.lore;
        let name = this.props.name;
        let categoryCount = [];
        info.forEach(function(item, index, array) {
        categoryCount.push(item.violation_category)
        });

        function filterItems(query) {
        return categoryCount.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
          })
        }

        const filteredCount = filterItems(name);
        const filteredLength =filteredCount.length;

    //      Object.keys(info).forEach(function(key) {
    //      console.log(key);
    // });
        return(
          <div className="user-count">
          Incident count: {filteredLength}
          </div>
      )
    }
};

export default IncidentCount;