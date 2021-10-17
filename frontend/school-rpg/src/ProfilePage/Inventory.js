import React, { Component } from "react";
import "./Inventory.css";

export class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    return (
      <div>
        <h1>Hátizsák</h1>
        <div className="wrap layout">
          {this.props.data.map((item, i) => (
            <InventorySlot key={i} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

class InventorySlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      selected: !this.state.selected,
    }));
  };

  render() {
    return (
      <div
        className={"inventory_slot " + (this.state.selected ? "selected" : "")}
        onClick={this.handleClick}
      >
        {this.props.data.name}
        <img src={this.props.data.img} alt={this.props.data.name} />
      </div>
    );
  }
}

export default Inventory;
