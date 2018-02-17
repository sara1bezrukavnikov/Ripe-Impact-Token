import React, { Component } from 'react'

import '../../css/Contract.css'

class Edit extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <div id="Contract">
        <h1 className="go">Confirm that you have the correct amount of food</h1>
        <form action="/complete">
          <div className="text-center">
            <div className="form-group">
              <label for="pounds">Donator</label>
              <h4>Lodo Safeway #3</h4>
            </div>
            <div className="form-group">
              <label for="pounds">Pounts of food</label>
              <h4>120 lbs</h4>
            </div>
            <div className="form-group">
              <label for="pounds">Rescuer</label>
              <h4>Jackob Hess</h4>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary" value="Confirm handoff">Confirm handoff</button><br/>
              <button type="submit" className="btn btn-primary" value="Save for later">Something doesn't look right</button>
            </div>
          </div>
        </form>

      </div>
  )
  }
}

export default Edit
