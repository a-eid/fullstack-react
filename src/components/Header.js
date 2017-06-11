import React from 'react' 
import PropTypes from 'prop-types' 

const Header = ({message}) =>( 
  <div className="Header">
    <h2>{message}</h2>
  </div>
)

Header.propTypes = {
  message: PropTypes.string.isRequired
}

Header.defaultProps = {
  message: "You is awesome"
}

export default Header