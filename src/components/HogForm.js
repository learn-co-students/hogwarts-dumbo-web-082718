import React, {Component} from "react";

class HogForm extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <select name="filter">
          <option value="name">Name </option>
          <option value="weight">Weight </option>
          <option value="greased">Greased </option>
        </select>
        <input type="submit"></input>
      </form>
    )
  }
}

export default HogForm
