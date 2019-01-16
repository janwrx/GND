import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';

class Stripe extends Component {
  render() {
    return (
        <div className="payment" style={{ border: '3px solid black', borderRadius: 4, padding: `15px 15px`, marginTop: 10}}>
          <h1>Payment</h1>
          <StripeProvider apiKey="pk_test_94XpbRPINz9LfTaFE0KPSolg">
          <Elements>
            <CheckoutForm />
          </Elements>
          </StripeProvider>
        </div>
    );
  }
}

export default Stripe;