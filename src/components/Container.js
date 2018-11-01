import React, {Component} from "react";
import hogs from '../porkers_data';
import HogTile from "./HogTile"
import HogForm from "./HogForm"

class HogContainer extends Component {
  state = {
    hogs : hogs
  }

  displayHogs = () => {
      return this.state.hogs.map((hog) => {
      return <HogTile img={this.getImage(hog.name)} hog={hog} />
    })
  }

  getImage = (name) => {
    let newName = name.toLowerCase().replace(/ /g,'_');
    return `./hog-imgs/${newName}.jpg`
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let userInput = event.target.firstChild.value
    if (userInput === "name") {
      this.sortByName()
    }
    else if (userInput === "weight") {
      this.sortByWeight()
    }
    else {
      this.filterGreased()
    }
  }

  filterGreased = () => {
    let greasedHogs = this.state.hogs.filter((hog) => {
      return hog.greased === true
    })
    this.setState({
      hogs: greasedHogs
    })
  }
  sortByWeight = () => {
    let sortedWeight = this.state.hogs.sort(function(a, b){
    return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
    this.setState({
      hogs: sortedWeight
    })
  }
  sortByName = () => {
    let sortedNames = this.state.hogs.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
    })
    this.setState({
      hogs : sortedNames
    })
  }



  render() {
    return(

      <div className= "ui grid container">
      <div className="sortBtn"> Sort by: <HogForm handleSubmit = {this.handleSubmit}/> </div>

      {this.displayHogs()}
      </div>
    )
  }

}

export default HogContainer
