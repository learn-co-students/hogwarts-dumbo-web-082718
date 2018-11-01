import React, { Component } from "react";
import hogs from "../porkers_data";
import HogTile from "./HogTile.js";
import FilterButtons from "./FilterButtons.js";

class Hogcontainer extends Component {
  state = {
    hogInfo: hogs
  };

  clickHandler = e => {
    console.log(e.target.id);
    if (e.target.id === "name") {
      let sortedHogs = [
        ...this.state.hogInfo.sort(function(obj1, obj2) {
          if (obj1.name < obj2.name) {
            return -1;
          }
          if (obj2.name < obj1.name) {
            return 1;
          }
          return 0;
        })
      ];
      console.log(sortedHogs);
      this.setState({
        hogInfo: sortedHogs
      });
    } else if (e.target.id === "weight") {
      let sortedHogs = [
        ...this.state.hogInfo.sort(function(obj1, obj2) {
          return (
            obj1[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ] -
            obj2[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          );
        })
      ];
      console.log(sortedHogs);
      this.setState({
        hogInfo: sortedHogs
      });
    } else if (e.target.id === "greased") {
      let sortedHogs = this.state.hogInfo.filter(hog => hog.greased);

      this.setState({
        hogInfo: sortedHogs
      });
    }
  };
  render() {
    let hogTiles = this.state.hogInfo.map(hog => (
      <HogTile hogObj={hog} key={hog.name} clickHandler={this.clickHandler} />
    ));

    return (
      <div id="hog-container">
        <FilterButtons clickHandler={this.clickHandler} />
        <div id="hog-tiles" className="ui grid container">
          {hogTiles}
        </div>
      </div>
    );
  }
}
export default Hogcontainer;
