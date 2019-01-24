import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contactform from '../components/contactform';
import About from '../components/about';
import Amount from '../components/amount';
// import Stripe from '../components/stripe';
import { Formik } from "formik";
import * as Yup from "yup"

const values = { firstName: "", middleName: "", lastName: "", address1: "" };

const validationSchema = Yup.object({
  
  name: Yup.string("Enter a name")
  .required("Name is required"),
  email: Yup.string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required"),
  password: Yup.string("")
  .min(8, "Password must contain at least 8 characters")
  .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
  .required("Confirm your password")
  .oneOf([Yup.ref("password")], "Password does not match")
})
  
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <About />
    <React.Fragment>
    <Formik
             render={props => <Contactform {...props} />}
             initialValues={values}
             validationSchema={validationSchema}
         />
    </React.Fragment>
    <Amount />
    {/* <Stripe /> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
