import React, { Component } from 'react'

import '../../css/Contract.css'

class New extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <div id="Contract">
        <h1 className="go">Record a new food donation.</h1>
        <form action="/edit">
          <div className="form-group">
            <label for="pounds">Pounds of food being donated</label>
            <input type="text" className="form-control" id="pounds" placeholder="lbs" />
          </div>
          <div className="form-group">
            <label for="rescuer">Recieving organization</label>
            <select className="form-control" id="rescuer">
              <option>Denver Food Rescue</option>
              <option>Foco Growing Project</option>
              <option>Food Not Bombs</option>
              <option>Food for Soul</option>
            </select>
          </div>
          <div className="text-center">
            <div className="form-group">
              <button type="submit" className="btn btn-primary" value="Confirm handoff">Confirm handoff</button>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" value="Save for later">Save for later</button>
            </div>
          </div>
        </form>

      </div>
  )
  }
}

export default New
