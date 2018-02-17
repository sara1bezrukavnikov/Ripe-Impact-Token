import React, { Component } from 'react'

import '../../css/Contract.css'

class Complete extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <div id="Contract">
        <h1 className="go">Congratulations!</h1>
        <form action="/dashboard">
          <div className="text-center card">
            <div className="card-header">
              <div className="coin">
                15lbs
              </div>

              <div className="form-group">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">120 lbs</li>
                    <li className="breadcrumb-item active">Lodo Safeway #3</li>
                    <li className="breadcrumb-item active">Jason Vigil</li>
                  </ol>
                </nav>
              </div>
            </div>

          </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" value="Confirm handoff">Dashboard</button>
        </div>
        </form>


      </div>
  )
  }
}

export default Complete
