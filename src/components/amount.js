import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {

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
    value: '21',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{ border: '3px solid black', borderRadius: 4, padding: `15px 15px`, marginTop: 10}}>
      <h1>Donation Amount</h1>
        <FormControl component="fieldset" className={classes.formControl} style={{display: `float`}}>
          <RadioGroup
            aria-label="Amount"
            name="amount1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="11" control={<Radio />} label="$11" />
            <FormControlLabel value="21" control={<Radio />} label="$21" />
            <FormControlLabel value="41" control={<Radio />} label="$41" />
            <FormControlLabel value="51" control={<Radio />} label="$51" />
            <FormControlLabel value="101" control={<Radio />} label="$101" />
            
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