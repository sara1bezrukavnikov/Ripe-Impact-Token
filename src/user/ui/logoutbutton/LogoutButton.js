import React from 'react'

const LogoutButton = ({ onLogoutUserClick }) => {
  return(
    <li className="pure-menu-item">
      <a href="#" className="btn btn-danger" onClick={(event) => onLogoutUserClick(event)}>Logout</a>
    </li>
  )
}

export default LogoutButton
