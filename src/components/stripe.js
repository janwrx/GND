import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';
import '../assets/stripe.css'

class Stripe extends Component {
  render() {
    return (
        <div className="payment" style={{ padding: `15px 25px`, marginTop: 10}}>
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

