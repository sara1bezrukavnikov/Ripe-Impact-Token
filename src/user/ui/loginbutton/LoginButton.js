import React from 'react'

// Images
import uPortLogo from '../../../img/uport-logo.svg'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <a href="#" className="btn btn-primary btn-auth" onClick={(event) => onLoginUserClick(event)}><img className="uport-logo" src={uPortLogo} alt="UPort Logo" />Role</a>
  )
}

export default LoginButton
