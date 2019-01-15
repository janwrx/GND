import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 150,
          }}
        >
          {children}
          </div>

          <footer style={{background: `rebeccapurple`, color: `white`, alignText: `center`, padding: 15}}>
            <p>Guru Nanak Dwara is a tax-exempt 501c(3) non-profit charitable organization. Every generous donation is tax deductible in the USA. </p>
          </footer>
      </>
    )}
  />


)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
