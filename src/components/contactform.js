import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../assets/contactform.css'
import axios from 'axios'
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import * as Yup from "yup";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
    height: 50,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  
});



const states = [


  {
    value: 'USA_AL',
    label: 'AL',
  },
  {
    value: 'USA_AK',
    label: 'AK',
  },
  {
    value: 'USA_AZ',
    label: 'AZ',
  },
  {
    value: 'USA_AR',
    label: 'AR',
  },
  {
    value: 'USA_CA',
    label: 'CA',
  },
  {
    value: 'USA_CO',
    label: 'CO',
  },
  {
    value: 'USA_CT',
    label: 'CT',
  },
  {
    value: 'USA_DE',
    label: 'DE',
  },
  {
    value: 'USA_FL',
    label: 'FL',
  },
  {
    value: 'USA_GA',
    label: 'GA',
  },
  {
    value: 'USA_HI',
    label: 'HI',
  },
  {
    value: 'USA_ID',
    label: 'ID',
  },
  {
    value: 'USA_IL',
    label: 'IL',
  },
  {
    value: 'USA_IN',
    label: 'IN',
  },
  {
    value: 'USA_IA',
    label: 'IA',
  },
  {
    value: 'USA_KS',
    label: 'KS',
  },
  {
    value: 'USA_KY',
    label: 'KY',
  },
  {
    value: 'USA_LA',
    label: 'LA',
  },
  {
    value: 'USA_ME',
    label: 'ME',
  },
  {
    value: 'USA_MD',
    label: 'MD',
  },
  {
    value: 'USA_MA',
    label: 'MA',
  },
  {
    value: 'USA_MI',
    label: 'MI',
  },
  {
    value: 'USA_MS',
    label: 'MS',
  },
  {
    value: 'USA_MO',
    label: 'MO',
  },
  {
    value: 'USA_MT',
    label: 'MT',
  },
  {
    value: 'USA_NE',
    label: 'NE',
  },
  {
    value: 'USA_NV',
    label: 'NV',
  },
  {
    value: 'USA_NH',
    label: 'NH',
  },
  {
    value: 'USA_NJ',
    label: 'NJ',
  },
  {
    value: 'USA_NM',
    label: 'NM',
  },
  {
    value: 'USA_NY',
    label: 'NY',
  },
  {
    value: 'USA_NC',
    label: 'NC',
  },
  {
    value: 'USA_ND',
    label: 'ND',
  },
  {
    value: 'USA_OH',
    label: 'OH',
  },
  {
    value: 'USA_OK',
    label: 'OK',
  },
  {
    value: 'USA_OR',
    label: 'OR',
  },
  {
    value: 'USA_PA',
    label: 'PA',
  },
  {
    value: 'USA_RI',
    label: 'RI',
  },
  {
    value: 'USA_SC',
    label: 'SC',
  },
  {
    value: 'USA_SD',
    label: 'SD',
  },
  {
    value: 'USA_TN',
    label: 'TN',
  },
  {
    value: 'USA_TX',
    label: 'TX',
  },  
  {
    value: 'USA_UT',
    label: 'UT',
  },
  {
    value: 'USA_VT',
    label: 'VT',
  },
  {
    value: 'USA_VA',
    label: 'VA',
  },
  {
    value: 'USA_WA',
    label: 'WA',
  },
  {
    value: 'USA_WV',
    label: 'WV',
  },
  {
    value: 'USA_WI',
    label: 'WI',
  },
  {
    value: 'USA_WY',
    label: 'WY',
  },
];


class TextFields extends React.Component {
  state = {
    firstName: '',
    middleName: '',
    lastName:'',
    address1: '',
    address2: '',
    city: '',
    stateProviceGeoId: '',
    postalCode: '',
    email: '',
    
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value });
    
  };
  handleSubmit = event => {
    event.preventDefault();

    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    axios.post(`http://localhost:8080/apps/CreditCardApp/ApplicationForm/createApplicationForm`, person )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

  render() {
    const { classes } = this.props;
    console.log(this.state)

    return (
        <div className="contactinformation" style={{  padding: `15px 25px`, marginTop: 10}}>
        <h1>Contact Information</h1>

      <form onSubmit={this.handleSubmit} className={classes.container}>
      <Tooltip title="First Name" placement="bottom">
       <TextField
          required
          id="standard-required"
          name="firstName"
          label="First name"
          placeholder="ex. John"
          value={this.state.firstName}
          onChange={this.handleChange('firstName')} 
          className={classes.textField}
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
          value={this.state.middleName}
          onChange={this.handleChange('middleName')}
          className={classes.textField}
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
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          className={classes.textField}
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
          value={this.state.address1}
          onChange={this.handleChange('address1')}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="Unit/Apt. #" placement="bottom">
        <TextField
          id="standard"
          name="address2"
          label="Unit/Apt. #"
          value={this.state.address2}
          onChange={this.handleChange('address2')}
          className={classes.textField}
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
          value={this.state.city}
          onChange={this.handleChange('city')}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="State" placement="bottom">
        <TextField
          required
          id="standard-select-state"
          select
          name="stateProviceGeoId"
          label="State"
          className={classes.textField}
          value={this.state.stateProviceGeoId}
          onChange={this.handleChange('stateProviceGeoId')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
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
          value={this.state.postalCode}
          onChange={this.handleChange('postalCode')}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="Email" placement="bottom">
        <TextField
          required
          id="standard-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          autoComplete="email"
          placeholder="ex. hi@email.com"
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Button className="button" size="medium" type="submit" onSubmit={this.submit} style={{borderRadius: 5, backgroundColor: `#112E5C`, fontSize: 14, margin: 30, color: `white`, height: 50, width: 190, paddingTop:0}}><span>Add Customer Information</span></Button>
        </form>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TextFields);
