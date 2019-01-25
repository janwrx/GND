import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import Contactform from '../components/contactform';
import About from "../components/about";
import Amount from "../components/amount";
// import Stripe from '../components/stripe';
import InputForm from "../InputForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <InputForm />
    {/* <React.Fragment>
    <Formik
             render={props => <Contactform {...props} />}
             initialValues={values}
             validationSchema={validationSchema}
         />
    </React.Fragment> */}
    <Amount />
    {/* <Stripe /> */}
  </Layout>
);

export default IndexPage;
