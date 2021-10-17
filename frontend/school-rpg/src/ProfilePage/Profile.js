import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.css";
import Wear from "./Wear";
import Inventory from "./Inventory";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        wear : {
            head: {
              name: "Fazék",
              img: "https://tomnoble.eu/assets/fazek.png",
            },
            cloth: {
              name: "Bőrdzseki",
              img: "https://tomnoble.eu/assets/bordzseki.png",
            },
            shoe: {
              name: "Konzerv tornacipő",
              img: "https://tomnoble.eu/assets/konzerv.png",
            },
            weapon: {
              name: "Bézbózütő",
              img: "https://tomnoble.eu/assets/bezboz.png",
            },
            shield: {
              name: "Kukafedél",
              img: "https://tomnoble.eu/assets/kukateto.png",
            },
            jew1: {
              name: "Orrkarika",
              img: "https://tomnoble.eu/assets/orrkarika.png",
            },
            jew2: {
              name: "Fux",
              img: "https://tomnoble.eu/assets/dollar_nyaklanc.png",
            },
            rune: {
                name: "Csepereg az eső...",
                img: "https://tomnoble.eu/assets/csepereg.png",
            }
          },
          inventory : [
              {name: "Fazék", img: "https://tomnoble.eu/assets/fazek.png"},
              {name: "Fazék", img: "https://tomnoble.eu/assets/fazek.png"},
              {name: "Fazék", img: "https://tomnoble.eu/assets/fazek.png"},
              {name: "Fazék", img: "https://tomnoble.eu/assets/fazek.png"},
              {name: "Fazék", img: "https://tomnoble.eu/assets/fazek.png"},
          ]
    }
  }
  render() {

    return (
      <Container>
        <Row>
          <Col md="5" lg="3">
            <ProfilePics />
          </Col>
          <Col md="7" lg="9">
            <CharacterData />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Wear data = {this.state.wear} />
          </Col>
          <Col lg="6">
              <Inventory data = {this.state.inventory} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class ProfilePics extends Component {
  render() {
    return <div className="profile-pics"></div>;
  }
}

class CharacterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character_name: "John Wick",
      lvl: 5,
      experience_now: 500,
      experience_next_lvl: 1200,
    };
  }
  render() {
    return (
      <div className="character-data">
        <h2 className="profile-name">
          {this.state.character_name} (lvl {this.state.lvl})
        </h2>
        <ExperienceBar
          exp_now={this.state.experience_now}
          exp_next={this.state.experience_next_lvl}
        />
      </div>
    );
  }
}

class ExperienceBar extends Component {
  render() {
    let percent = this.props.exp_now / (this.props.exp_next / 100);
    console.log(percent);
    return (
      <div className="experience-bar">
        <div
          className="experience-actual"
          style={{ width: percent + "%" }}
        ></div>
        <span>
          {this.props.exp_now} / {this.props.exp_next}
        </span>
      </div>
    );
  }
}

export default Profile;
