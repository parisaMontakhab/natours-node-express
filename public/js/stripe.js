/* global Stripe */

import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51U16dR9bPQnnCNVi7xQMUsuMmiEtkKx6jzTRUeTfFMJJkEa8mxZ3zEqjhIChUXiKsdjKIKDA5ge6Yt9kBD1acpEX00EBybLcVz',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/bookings/checkout-session/${tourId}`);

    // 2) Redirect to Stripe Checkout
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.error(err);
    showAlert('error', err.response.data.message);
  }
};
