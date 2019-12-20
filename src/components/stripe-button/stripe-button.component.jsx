import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton=({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 	'pk_test_KlgamgvsXNAxijMcLg3DN4yF006Db3XAgT'

   const onToken=token=>{
    console.log(token);
    alert('Payment Successful');
   }

   return(
       <StripeCheckout
       label='Pay Now'
       name='SUNCITY EYECARE'
       billingAddress
       shippingAddress
       image=''
       description={`Your Total is Nrs: ${price}`}
       amount={`Nrs:${priceForStripe}`}
       panelLabel='Pay Now '
       token={onToken}
       stripeKey={publishableKey}
       />
   )

};

export default StripeCheckoutButton
