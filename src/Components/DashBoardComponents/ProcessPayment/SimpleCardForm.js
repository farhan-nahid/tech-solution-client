import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handleOrder}) => {
  const stripe = useStripe();
  const elements = useElements();
  const[paymentError, setPaymentError] = useState()
  const[paymentSuccess, setPaymentSuccess] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null)
      handleOrder(paymentMethod.id)
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="mt-3">
      <CardElement />
      <button type="submit" className="btn btn-danger mt-3 btn-brand"  disabled={!stripe}>  Pay</button>
    </form>
    <div className="mt-5">
          {
            paymentError && <p  className="text-danger text-center "> {paymentError} </p>
          }
          {
            paymentSuccess && <p  className="text-success text-center "> We Received Your Payment  Successfully </p>
          }
    </div>
    </>
  );
};

export default SimpleCardForm