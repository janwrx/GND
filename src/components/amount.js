import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../assets/amount.css'
import StripeCheckout from 'react-stripe-checkout';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = e => {
    // let parsedValue = parseInt(e.target.value)
    // console.log(`this is the target value: ${e.target.value}`)
    // console.log(`this is the parsed value: ${parsedValue}`)
    this.setState({ value: e.target.value });
  };

  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };


  render() {
    const { classes } = this.props;
   
    
    console.log(this.state)
    return (
      <div className="amountform" style={{ padding: `15px 25px`, marginTop: 10}}>
      <h1>Donation Amount</h1>
        <div className="radios">
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="11.00" control={<Radio onClick={e => this.handleClick(e)} />} label="$11.00" />
            <FormControlLabel value="21.00" control={<Radio />} label="$21.00" />
            <FormControlLabel value="41.00" control={<Radio />} label="$41.00" />
            <FormControlLabel value="51.00" control={<Radio />} label="$51.00" />
            <FormControlLabel value="101.00" control={<Radio />} label="$101.00" />
            <TextField
          id="outlined-adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Other"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          control={<Radio />}
        />
          </RadioGroup>
        </FormControl>
        </div>
        <div className="stripebutton"> 
      <StripeCheckout
      amount={parseInt(this.state.value) * 100}
      panelLabel="Donate {{amount}}"
      image="/images/logognd.png"
      label="Donate Now"
      locale="auto"
      name="GND Donation"
        stripeKey="pk_test_94XpbRPINz9LfTaFE0KPSolg"
        token={this.onToken}
      />
        </div>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);