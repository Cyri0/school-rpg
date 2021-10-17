import React, { Component } from "react";
import "./Wear.css";

class Wear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wear: {
        head: this.props.data.head || { name: "", img: "" },
        cloth: this.props.data.cloth || { name: "", img: "" },
        shoe: this.props.data.shoe || { name: "", img: "" },
        weapon: this.props.data.weapon || { name: "", img: "" },
        shield: this.props.data.shield || { name: "", img: "" },
        jew1: this.props.data.jew1 || { name: "", img: "" },
        jew2: this.props.data.jew2 || { name: "", img: "" },
        rune: this.props.data.rune || { name: "", img: "" },
      },
    };
  }
  render() {
    return (
      <div>
      <h1>Felszerelés</h1>
      <div className="layout wrap">
        <Slot data={this.state.wear.head} />

        <Slot extraclass="left-hand" data={this.state.wear.weapon} />

        <Slot extraclass="right-hand" data={this.state.wear.shield} />
        <Slot data={this.state.wear.cloth} />
        <Slot data={this.state.wear.shoe} />
        <Slot data={this.state.wear.jew1} />
        <Slot data={this.state.wear.jew2} />
        <Slot data={this.state.wear.rune} />
      </div>
      </div>
    );
  }
}

class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: props.extraclass || "",
    };
    console.log(this.state.className);
  }
  render() {
    return (
      <div className={"slot " + this.state.className}>
        <span>{this.props.data.name}</span>
        <img src={this.props.data.img} alt={this.props.data.name}/>
      </div>
    );
  }
}

export default Wear;
