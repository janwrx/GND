import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) console.log("Purchase Complete!")
      }


  render() {
    return (
      <div className="checkout">
      <CardElement />
        <center><Button variant= "outlined" size="medium" onClick={this.submit} style={{backgroundColor: `#112E5C`, height: 40, width: 150}}><span>Donate</span></Button></center>
        </div>
    );
  }
}
export default injectStripe(CheckoutForm);