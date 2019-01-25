
import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import * as Yup from "yup"
import axios from 'axios'
import '../assets/inputform.css'

const validationSchema = Yup.object({
  firstName: Yup.string("Enter a name")
  .required("Name is required"),
  lastName: Yup.string("Enter a name")
  .required("Name is required"),
  address1: Yup.string("Enter a name")
  .required("Name is required"),
  city: Yup.string("Enter a name")
  .required("Name is required"),
  stateProviceGeoId: Yup.string("Enter a name")
  .required("Name is required"),
  postalCode: Yup.string("Enter a name")
  .required("Name is required"),
  email: Yup.string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required"),

})  


const styles = theme => ({
//  paper: {
//    marginTop: theme.spacing.unit * 8,
//    display: "flex",
//    flexDirection: "column",
//    alignItems: "center",
//    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
//      .spacing.unit * 5}px`,
//   border: `4px red solid`,
//  }
 
});

class InputForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 submitValues = ({ firstName, middleName, lastName, address1, address2, city, stateProviceGeoId, postalCode, email  }) => {


  const person = {
    firstName: firstName,
    lastName: lastName
  };

  axios.post(`http://localhost:8080/apps/CreditCardApp/ApplicationForm/createApplicationForm`, person )
  .then(res => {
    console.log(res);
    console.log(res.data);
  })

  console.log({ firstName, middleName, lastName, address1, address2, city, stateProviceGeoId, postalCode, email });
};

 render() {
  const classes = this.props;
  const values = { firstName: "", middleName: "", lastName: "", address1: "", address2: "", city: "", stateProviceGeoId: "", postalCode: "", email: "" };
  return (
<React.Fragment>
        <div className="inputform" style={{ marginTop: 10, padding: `15px 25px`, backgroundColor: `white`, border: `2px red solid`, borderRadius: 15}}>
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