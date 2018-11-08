import React, { Component } from "react";

class HogTile extends Component {
  state = {
    showPic: true
  };

  clickHandler = (e) => {
    console.log(this.state.showPic);
    this.setState({
      showPic: !this.state.showPic
    });
  };

  showPic = () => {
    return (
      <img src={"./hog-imgs/piggy_smalls.jpg"} alt={this.props.hogObj.name} />
    );
  };

  showInfo = () => {
    console.log(this.props.hogObj);
    return (
      <ul>
        <li>Specialty: {this.props.hogObj.specialty}</li>
        <li>Greased: {this.props.hogObj.greased}</li>
        <li>
          Weight Ratio:{" "}
          {
            this.props.hogObj[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          }
        </li>
        <li>Highest Medal: {this.props.hogObj["highest medal achieved"]}</li>
      </ul>
    );
  };

  render() {
    return (
      <div className="ui eight wide column" onClick={this.clickHandler}>
        <h1>{this.props.hogObj.name}</h1>
        {this.state.showPic ? this.showPic() : this.showInfo()}
      </div>
    );
  }
}

export default HogTile;
