import React, { Component } from 'react'
import './Navbar.css';
export class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            mobileModeLimit : 800,
            isMobile : false
        };   
        this.state.isMobile = window.innerWidth < this.state.mobileModeLimit
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < this.state.mobileModeLimit
            });
        }, false);
    }

    render() {
        let navbar;
        navbar = <PCNav />
        if (this.state.isMobile)
            navbar = <MobileNav />

        return (
            <div>
                <nav className="navbar container">
                    { navbar }
                </nav>
            </div>
        )
    }
}

export default Navbar


class MobileNav extends Component {
    render(){
        return (
            <div>
                Mobile
            </div>
        )
    }
}

class PCNav extends Component {
    render(){
        return (
            <div className="pc-navbar">
                <div className="logo-holder">
                    Logo
                </div>
                <div className="button-holder">
                    <button>Játéktér</button>
                    <button>Bolt</button>
                    <button>Profil</button>
                    <button>Profil</button>
                </div>
            </div>
        )
    }
}