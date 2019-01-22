import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Helmet from 'react-helmet'
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
      <Helmet >
      <script type="text/javascript" src="https://js.stripe.com/v3/"></script>
      </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 100,
          }}
        >
          {children}
          </div>

          <footer style={{background: `#888C8F`, color: `white`, alignText: `center`, paddingTop: 10, paddingBottom: 10, height: 70}}>
            <center><h6>Guru Nanak Dwara is a tax-exempt 501c(3) non-profit charitable organization. Every generous donation is tax deductible in the USA. </h6></center>
          </footer>
      </>
    )}
  />


)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
