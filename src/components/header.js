import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../assets/header.css'

const Header = ({ siteTitle }) => (
  <div className="header"
    style={{
      margin: 0,
      padding: 0,
      position: `fixed`
    }}
  >
  <img src="/images/privatelock.png" alt="Secure Response Logo" style={{ margin: 0, paddingTop: 5}} /> <span className="imgtext">Secure Response</span>
    <div
      style={{
        width: `100vw`,
        paddingTop: `1px`
      }}
    >
      </div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            top: `15`
          }}
        >
        <div className="gndtitle">
          {siteTitle}
          </div>
        </Link>
      </h1>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
