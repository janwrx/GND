import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../assets/contactform.css'

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
    value: '',
    label: '',
      },
  {
    value: 'Alabama',
    label: 'AL',
  },
  {
    value: 'California',
    label: 'CA',
  },
  {
    value: 'New York',
    label: 'NY',
  },
  {
    value: 'Hawaii',
    label: 'HI',
  },
];

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    state: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div className="contactinformation" style={{  padding: `15px 25px`, marginTop: 10}}>
        <h1>Contact Information</h1>
      <form className={classes.container} noValidate autoComplete="off">
       <TextField
          required
          id="standard-required"
          label="First name"
          placeholder="ex. John"
          className={classes.textField}
          margin="normal"
        />
       <TextField
          required
          id="standard-required"
          label="Middle initial"
          placeholder="ex. M"
          className={classes.textField}
          margin="normal"
        />
       <TextField
          required
          id="standard-required"
          label="Last name"
          placeholder="ex. Doe"
          className={classes.textField}
          margin="normal"
        />
       <TextField
          required
          id="standard-required"
          label="Street Address"
          placeholder="ex. 123 Ikea Avenue"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard"
          label="Unit/Apt. #"
          className={classes.textField}
          margin="normal"
        />
       <TextField
          required
          id="standard-required"
          label="City"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-select-state"
          select required
          label="State"
          className={classes.textField}
          value={this.state.state}
          onChange={this.handleChange('state')}
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
          label="Postal Code"
          placeholder="55555"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
        />
      </form>
    
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TextFields);
