import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import * as Yup from "yup";
import axios from "axios";
import "../assets/inputform.css";
import "../assets/form.css";

const validationSchema = Yup.object({
  firstName: Yup.string("Enter a name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[- A-Za-z']+$/, "Enter a valid first name.")
    .required("First Name is required"),
  lastName: Yup.string("Enter a name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[- A-Za-z']+$/, "Enter a valid last name.")
    .required("Last Name is required"),
  address1: Yup.string("Enter an addres")
    .min(2, "Enter a valid address")
    .required("Address is required"),
  city: Yup.string("Enter a city")
    .min(2, "Enter a valid city")
    .required("City is required"),
  stateProviceGeoId: Yup.string("Select a State").required("State is required"),
  postalCode: Yup.string("Enter Postal Code").required(
    "Postal Code is required"
  ),
  emailAddress: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
});

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitValues = ({
    firstName,
    middleName,
    lastName,
    address1,
    address2,
    city,
    stateProviceGeoId,
    postalCode,
    emailAddress
  }) => {
    const person = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      stateProviceGeoId: stateProviceGeoId,
      postalCode: postalCode,
      emailAddress: emailAddress
    };

    axios
      .post(
        `http://localhost:8080/apps/CreditCardApp/ApplicationForm/createApplicationForm`,
        person
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    console.log({
      firstName,
      middleName,
      lastName,
      address1,
      address2,
      city,
      stateProviceGeoId,
      postalCode,
      emailAddress
    });
  };

  render() {
    const classes = this.props;
    const values = {
      firstName: "",
      middleName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      stateProviceGeoId: "",
      postalCode: "",
      emailAddress: ""
    };
    return (
      <React.Fragment>
        <div
          className={classes.container}
          style={{
            marginTop: 10,
            padding: `15px 25px`,
            backgroundColor: `white`,
            borderRadius: 15
          }}
        >
          <h1>Contact Information</h1>
          <Formik
            render={props => <Form {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={this.submitValues}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
