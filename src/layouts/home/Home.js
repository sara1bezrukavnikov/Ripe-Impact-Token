import React, { Component } from 'react'
// UI Components
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'

import uPortLogo from '../../img/uport-logo.svg'

class Home extends Component {

  render() {
    return(
      <main className="container">
        <div className="text-center">
          <h1>Ripe</h1>
          <p>The food rescue impact token.</p>

          <h2 className="go">Please identify yourself</h2>
          <a href="/dashboard" className="btn btn-primary btn-auth" ><img className="uport-logo" src={uPortLogo} alt="UPort Logo" onClick={e=>this.login(e)}/>Donator</a>
          <p> or</p>
          <a href="/dashboard" className="btn btn-primary btn-auth" ><img className="uport-logo" src={uPortLogo} alt="UPort Logo" onClick={e=>this.login(e)}/>Rescuer</a>
        </div>
      </main>
    )
  }
}

export default Home
