import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contactform from '../components/contactform'
import About from '../components/about'
import Amount from '../components/amount'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  
    <About />
    <div style={{ marginBottom: `1.45rem` }}>
    <Contactform />
    <Amount />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    
  </Layout>
)

export default IndexPage
