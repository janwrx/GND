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
    amount:'',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="amountform" style={{ padding: `15px 25px`, marginTop: 10}}>
      <h1>Donation Amount</h1>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="11" control={<Radio />} label="$11" />
            <FormControlLabel value="21" control={<Radio />} label="$21" />
            <FormControlLabel value="41" control={<Radio />} label="$41" />
            <FormControlLabel value="51" control={<Radio />} label="$51" />
            <FormControlLabel value="101" control={<Radio />} label="$101" />
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
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);