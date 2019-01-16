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
  <img src="/images/gatsby-icon.png" style={{width: 30, height: 30, margin: 0, paddingTop: 5}} />
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
          }}
        >
          {siteTitle}
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
