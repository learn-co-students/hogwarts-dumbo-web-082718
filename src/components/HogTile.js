import React, {Component} from "react";

class HogTile extends Component {
  state={
    clicked: false
  }

  clickHandler = (event)=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  hidePig = (event)=>{
    event.stopPropagation();
    event.target.parentNode.style.display = "none"
  }

  render(){
    let frontTile =
    <div onClick={this.clickHandler} className = "ui eight wide column card" >
      <h1 className="header">{this.props.hog.name}</h1>
      <div className="image">
        <img src={this.props.img} />
      </div>
      <button className="hide-btn" onClick={this.hidePig}>Hide Me!</button>
    </div>

    let backTile =
    <div onClick={this.clickHandler} className = "ui eight wide column card">
      <p>Specialty: {this.props.hog.specialty}</p>
      <p>Greased: {this.props.hog.greased.toString()} </p>
      <p>Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
      <p>Highest medal: {this.props.hog["highest medal achieved"]}</p>
    </div>


    return(
      <div>
        {this.state.clicked ? backTile : frontTile}
      </div>
    )
  }
}

export default HogTile
