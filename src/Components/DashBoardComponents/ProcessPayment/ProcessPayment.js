import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51Ie11ZIo3XVCKagbJJnefC4ruHwRuiiS8mPOiugOUPZ3F9isu6mCQJjhdMQ9SHugvc8Y6pjEGk2xYIMhOW2CpJQN00ArldL7I3');

const ProcessPayment = ({handleOrder}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handleOrder={handleOrder} />
        </Elements>
    );
};

export default ProcessPayment;