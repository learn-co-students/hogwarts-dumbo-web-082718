import React from "react";

const FilterButtons = props => {
  return (
    <div id="filter-buttons">
      <button id="name" onClick={props.clickHandler}>
        Filter Name
      </button>
      <button id="weight" onClick={props.clickHandler}>
        Filter Weight
      </button>
      <button id="greased" onClick={props.clickHandler}>
        Filter Greased
      </button>
    </div>
  );
};

export default FilterButtons;
