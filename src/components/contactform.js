import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "../assets/contactform.css";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form } from 'formik';

// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center"
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 250,
//     height: 50
//   },
//   dense: {
//     marginTop: 16
//   },
//   menu: {
//     width: 200
//   }
// });


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

const states = [
  {
    value: "USA_AL",
    label: "Alabama"
  },
  {
    value: "USA_AK",
    label: "Alaska"
  },
  {
    value: "USA_AZ",
    label: "Arizona"
  },
  {
    value: "USA_AR",
    label: "Arkansas"
  },
  {
    value: "USA_CA",
    label: "California"
  },
  {
    value: "USA_CO",
    label: "Colorado"
  },
  {
    value: "USA_CT",
    label: "Connecticut"
  },
  {
    value: "USA_DE",
    label: "Delaware"
  },
  {
    value: "USA_FL",
    label: "Florida"
  },
  {
    value: "USA_GA",
    label: "Georgia"
  },
  {
    value: "USA_HI",
    label: "Hawaii"
  },
  {
    value: "USA_ID",
    label: "Idaho"
  },
  {
    value: "USA_IL",
    label: "Illinois"
  },
  {
    value: "USA_IN",
    label: "Indiana"
  },
  {
    value: "USA_IA",
    label: "Iowa"
  },
  {
    value: "USA_KS",
    label: "Kansas"
  },
  {
    value: "USA_KY",
    label: "Kentucky"
  },
  {
    value: "USA_LA",
    label: "Louisiana"
  },
  {
    value: "USA_ME",
    label: "Maine"
  },
  {
    value: "USA_MD",
    label: "Maryland"
  },
  {
    value: "USA_MA",
    label: "Massachusetts"
  },
  {
    value: "USA_MI",
    label: "Michigan"
  },
  {
    value: "USA_MN",
    label: "Minnesota"
  },
  {
    value: "USA_MS",
    label: "Mississippi"
  },
  {
    value: "USA_MO",
    label: "Missouri"
  },
  {
    value: "USA_MT",
    label: "Montana"
  },
  {
    value: "USA_NE",
    label: "Nebraska"
  },
  {
    value: "USA_NV",
    label: "Nevada"
  },
  {
    value: "USA_NH",
    label: "New Hampshire"
  },
  {
    value: "USA_NJ",
    label: "New Jersey"
  },
  {
    value: "USA_NM",
    label: "New Mexico"
  },
  {
    value: "USA_NY",
    label: "New York"
  },
  {
    value: "USA_NC",
    label: "North Carolina"
  },
  {
    value: "USA_ND",
    label: "North Dakota"
  },
  {
    value: "USA_OH",
    label: "Ohio"
  },
  {
    value: "USA_OK",
    label: "Oklahoma"
  },
  {
    value: "USA_OR",
    label: "Oregon"
  },
  {
    value: "USA_PA",
    label: "Pennyslvania"
  },
  {
    value: "USA_RI",
    label: "Rhode Island"
  },
  {
    value: "USA_SC",
    label: "South Carolina"
  },
  {
    value: "USA_SD",
    label: "South Dakota"
  },
  {
    value: "USA_TN",
    label: "Tennessee"
  },
  {
    value: "USA_TX",
    label: "Texas"
  },
  {
    value: "USA_UT",
    label: "Utah"
  },
  {
    value: "USA_VT",
    label: "Vermont"
  },
  {
    value: "USA_VA",
    label: "Virginia"
  },
  {
    value: "USA_WA",
    label: "Washington"
  },
  {
    value: "USA_WV",
    label: "West Virginia"
  },
  {
    value: "USA_WI",
    label: "Wisconsin"
  },
  {
    value: "USA_WY",
    label: "Wyoming"
  }
];


class TextFields extends React.Component {

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
      <div
        className="contactinformation"
        style={{ padding: `15px 25px`, marginTop: 10 }}
      >
        <h1>Contact Information</h1>
      <Formik
       initialValues={values}
       validationSchema={validationSchema}
       onSubmit={this.submitValues}
       >  
        {({
      values: {
      firstName,
      middleName,
      lastName,
      address1,
      address2,
      city,
      stateProviceGeoId,
      postalCode,
      emailAddress
    },
    errors,
    touched,
    handleChange,
    handleSubmit,
  }) => (
           <Form style={{ textAlign: `center` }} onSubmit={handleSubmit}>
           <Tooltip title="First Name" placement="bottom">
          <TextField
            required
            id="standard-required"
            name="firstName"
            label="First name"
            placeholder="ex. John"
            value={firstName}
            onChange={handleChange}
            helperText={touched.firstName ? errors.firstName : ""}
            error={touched.firstName && Boolean(errors.firstName)}
            margin="normal"
            variant="outlined"
            
          />
        </Tooltip>
        <Tooltip title="Middle Initial" placement="bottom">
          <TextField
            id="standard"
            name="middleName"
            label="MI"
            placeholder="ex. M"
            value={middleName}
            onChange={handleChange}
            helperText={touched.middleName ? errors.middleName : ""}
            error={touched.middleName && Boolean(errors.middleName)}
            margin="normal"
            padding="0"
            variant="outlined"
        
          />
        </Tooltip>
        <Tooltip title="Last Name" placement="bottom">
          <TextField
            required
            id="standard-required"
            name="lastName"
            label="Last name"
            placeholder="ex. Doe"
            value={lastName}
            onChange={handleChange}
            helperText={touched.lastName ? errors.lastName : ""}
            error={touched.lastName && Boolean(errors.lastName)}
            margin="normal"
            variant="outlined"
        
          />
        </Tooltip>
        <Tooltip title="Street Address" placement="bottom">
          <TextField
            required
            id="standard-required"
            name="address1"
            label="Street Address"
            placeholder="ex. 123 Ikea Avenue"
            value={address1}
            onChange={handleChange}
            helperText={touched.address1 ? errors.address1 : ""}
            error={touched.address1 && Boolean(errors.address1)}
            margin="normal"
            variant="outlined"
     
          />
        </Tooltip>

        <Tooltip title="Unit/Apt. #" placement="bottom">
          <TextField
            id="standard"
            name="address2"
            label="Unit/Apt. #"
            value={address2}
            onChange={handleChange}
            helperText={touched.address2 ? errors.address2 : ""}
            error={touched.address2 && Boolean(errors.address2)}
            margin="normal"
            variant="outlined"
    
          />
        </Tooltip>
        <Tooltip title="City" placement="bottom">
          <TextField
            required
            id="standard-required"
            name="city"
            label="City"
            value={city}
            onChange={handleChange}
            helperText={touched.city ? errors.city : ""}
            error={touched.city && Boolean(errors.city)}
            margin="normal"
            variant="outlined"
         
          />
        </Tooltip>
        <Tooltip title="State" placement="bottom">
          <TextField
            style={{ width: 216 }}
            required
            id="standard-select-state"
            select
            name="stateProviceGeoId"
            label="State"
            value={stateProviceGeoId}
            onChange={handleChange}
            helperText={
              touched.stateProviceGeoId ? errors.stateProviceGeoId : ""
            }
            error={
              touched.stateProviceGeoId && Boolean(errors.stateProviceGeoId)
            }
            SelectProps={{
              MenuProps: {
                // className: classes.menu,
              }
            }}
            margin="normal"
            variant="outlined"
           
          >
            {states.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Tooltip>
        <Tooltip title="Postal Code" placement="bottom">
          <TextField
            required
            id="standard-required"
            name="postalCode"
            label="Postal Code"
            placeholder="ex. 55555"
            value={postalCode}
            onChange={handleChange}
            helperText={touched.postalCode ? errors.postalCode : ""}
            error={touched.postalCode && Boolean(errors.postalCode)}
            margin="normal"
            variant="outlined"
       
          />
        </Tooltip>
        <Tooltip title="Email" placement="bottom">
          <TextField
            required
            id="standard-email-input"
            label="Email"
            type="email"
            name="emailAddress"
            value={emailAddress}
            onChange={handleChange}
            helperText={touched.emailAddress ? errors.emailAddress : ""}
            error={touched.emailAddress && Boolean(errors.emailAddress)}
            placeholder="ex. hi@email.com"
            margin="normal"
            variant="outlined"
            
          />
        </Tooltip>

        <Button
          className="button"
          size="medium"
          type="submit"
          style={{
            borderRadius: 5,
            backgroundColor: `#112E5C`,
            fontSize: 14,
            margin: 30,
            color: `white`,
            height: 50,
            width: 200,
            paddingTop: 0
          }}
        >
          <span>Add Customer Information</span>
        </Button>
        </Form>
  )}
        </Formik>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TextFields