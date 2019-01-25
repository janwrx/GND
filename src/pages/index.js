import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import Amount from "../components/amount";
// import Stripe from '../components/stripe';
import Contactform from "../components/contactform";
import InputForm from "../InputForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <InputForm />
    <Amount />
    {/* <Stripe /> */}
  </Layout>
);

export default IndexPage;
