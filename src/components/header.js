import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`, 
      position: `fixed`
    }}
  >
    <div
      style={{
        margin: `0`,
        width: `100vw`,
        paddingTop: `1px`
      }}
    >
    <div className="headerlogos">
      <img src="https://img.icons8.com/metro/1600/settings.png" style={{ width: 30, height: `auto`}} />
      <img src="https://www.securemessagingapps.com/wp-content/uploads/2016/09/cropped-security-shield-lock-512.png" style={{ width: 30, height: `auto`, float: `right`,  }}/>
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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
