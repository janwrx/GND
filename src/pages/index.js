import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contactform from '../components/contactform'
import About from '../components/about'
import Amount from '../components/amount'
import Stripe from '../components/stripe'
import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <About />
    <Contactform />
    <Amount />
    <Stripe />
    <Checkout />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
