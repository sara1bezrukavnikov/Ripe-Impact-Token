import React, { Component } from 'react'

import '../../css/Dashboard.css'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <div id="Dashboard">
        <div className="id">
          <p className="role">Rescuer</p>
          <h1>Jason Vigil</h1>
          <p>15ACRN</p>
          <a href="/new" className="btn btn-primary">New donation</a>
        </div>
        <div className="notifications">
          <ul className="list-group">
            <li className="list-group-item group-header">Notifications</li>
            <li className="list-group-item">Grocery store waiting on your pickup</li>
            <li className="list-group-item">You're waiting on a grocery store's confirmation</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item group-header">Your impact ledger</li>
            <li className="list-group-item">1/2/18 - 80lbs</li>
            <li className="list-group-item">2/20/18 - 20lbs</li>
          </ul>
        </div>
      </div>
  )
  }
}

export default Dashboard
