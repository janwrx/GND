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
import InputForm from '../InputForm'


const values = { firstName: "", middleName: "", lastName: "", address1: "" };

const validationSchema = Yup.object({
  
  firstName: Yup.string("Enter a name")
  .required("this is a test for first name"),
  middleName: Yup.string("Enter a name")
  .required("test for middle name"),
  lastName: Yup.string("Enter a name")
  .required("test for last name"),
  address1: Yup.string("Enter a name")
  .required("test for street address"),
  email: Yup.string("Enter your email")
  .email("Enter a valid email")
  .required("test for email"),
})
  
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <About />
    <InputForm/>
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
)

export default IndexPage
