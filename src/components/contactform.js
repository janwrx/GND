import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../assets/contactform.css'
import axios from 'axios'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  
});

const states = [

  {
    value: 'Alabama',
    label: 'AL',
  },
  {
    value: 'Alaska',
    label: 'AK',
  },
  {
    value: 'Arizona',
    label: 'AZ',
  },
  {
    value: 'Arkansas',
    label: 'AR',
  },
  {
    value: 'California',
    label: 'CA',
  },
  {
    value: 'Colorado',
    label: 'CO',
  },
  {
    value: 'Connecticut',
    label: 'CT',
  },
  {
    value: 'Delaware',
    label: 'DE',
  },
  {
    value: 'Florida',
    label: 'FL',
  },
  {
    value: 'Georgia',
    label: 'GA',
  },
  {
    value: 'Hawaii',
    label: 'HI',
  },
  {
    value: 'Idaho',
    label: 'ID',
  },
  {
    value: 'Illinois',
    label: 'IL',
  },
  {
    value: 'Indiana',
    label: 'IN',
  },
  {
    value: 'Iowa',
    label: 'IA',
  },
  {
    value: 'Kansas',
    label: 'KS',
  },
  {
    value: 'Kentucky',
    label: 'KY',
  },
  {
    value: 'Louisiana',
    label: 'LA',
  },
  {
    value: 'Maine',
    label: 'ME',
  },
  {
    value: 'Maryland',
    label: 'MD',
  },
  {
    value: 'Massachusetts',
    label: 'MA',
  },
  {
    value: 'Michigan',
    label: 'MI',
  },
  {
    value: 'Mississippi',
    label: 'MS',
  },
  {
    value: 'Missouri',
    label: 'MO',
  },
  {
    value: 'Montana',
    label: 'MT',
  },
  {
    value: 'Nebraska',
    label: 'NE',
  },
  {
    value: 'Nevada',
    label: 'NV',
  },
  {
    value: 'New Hampshire',
    label: 'NH',
  },
  {
    value: 'New Jersey',
    label: 'NJ',
  },
  {
    value: 'New Mexico',
    label: 'NM',
  },
  {
    value: 'New York',
    label: 'NY',
  },
  {
    value: 'North Carolina',
    label: 'NC',
  },
  {
    value: 'North Dakota',
    label: 'ND',
  },
  {
    value: 'Ohio',
    label: 'OH',
  },
  {
    value: 'Oklahoma',
    label: 'OK',
  },
  {
    value: 'Oregon',
    label: 'OR',
  },
  {
    value: 'Pennsylvania',
    label: 'PA',
  },
  {
    value: 'Rhode Island',
    label: 'RI',
  },
  {
    value: 'South Carolina',
    label: 'SC',
  },
  {
    value: 'South Dakota',
    label: 'SD',
  },
  {
    value: 'Tennessee',
    label: 'TN',
  },
  {
    value: 'Texas',
    label: 'TX',
  },  
  {
    value: 'Utah',
    label: 'UT',
  },
  {
    value: 'Vermont',
    label: 'VT',
  },
  {
    value: 'Virginia',
    label: 'VA',
  },
  {
    value: 'Washington',
    label: 'WA',
  },
  {
    value: 'West Virginia',
    label: 'WV',
  },
  {
    value: 'Wisconsin',
    label: 'WI',
  },
  {
    value: 'Wyoming',
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
      <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
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
        />
       <TextField
          id="standard"
          name="middleName"
          label="MI"
          placeholder="ex. M"
          value={this.state.middleName}
          onChange={this.handleChange('middleName')}
          className={classes.textField}
          margin="normal"
        />
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
        />
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
        />
        <TextField
          id="standard"
          name="address2"
          label="Unit/Apt. #"
          value={this.state.address2}
          onChange={this.handleChange('address2')}
          className={classes.textField}
          margin="normal"
        />
       <TextField
          required
          id="standard-required"
          name="city"
          label="City"
          value={this.state.city}
          onChange={this.handleChange('city')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-select-state"
          select required
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
          helperText="Please select your state"
          margin="normal"
        >
          {states.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       <TextField
          required
          id="standard-required"
          name="postalCode"
          label="Postal Code"
          placeholder="55555"
          value={this.state.postalCode}
          onChange={this.handleChange('postalCode')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-email-input"
          name="e-mail"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          autoComplete="email"
          margin="normal"
        />
         <button type="submit">Add</button>
      </form>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TextFields);
