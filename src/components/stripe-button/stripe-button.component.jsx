import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JfPEhEGClUfOtVnSzIX7M6i4oBckdO71STimKjGN2oiL556mWSOLZ9jNLEpALNiEXXkXM2wWbC1F4fYXGyuJ5qH00ZThnfHdt';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <div>
            <StripeCheckout 
                label='Pay Now' 
                name=' CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton;
