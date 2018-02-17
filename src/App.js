import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'
import Web3 from 'web3';

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
// import './css/oswald.css'

// import './css/open-sans.css'
import './css/bootstrap/bootstrap.min.css'
import './css/navbar.css'
import './css/Login.css'
// Run the app
class App extends Component {
  componentDidMount() {
    // init ganashe
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');

    // init contract
    $.getJSON('Adoption.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var AdoptionArtifact = data;
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);

      // Set the provider for our contract
      App.contracts.Adoption.setProvider(App.web3Provider);

      // Use our contract to retrieve and mark the adopted pets
      return App.markAdopted();
    });
  }
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <LoginButtonContainer />
      </span>
    )

    return (
      <div className="root">
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Ripe</a>
          <div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App
