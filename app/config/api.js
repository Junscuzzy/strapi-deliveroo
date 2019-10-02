import Strapi from 'strapi-sdk-javascript'

export const apiUrl = process.env.API_URL || `http://localhost:1337`

// Strapi
export const strapi = new Strapi(apiUrl)

// Stripe
export const stripeApiKey =
  process.env.STRIPE_API_Key || `pk_test_hObauySTKmbOU4bQox6tLlt300PXrzMFt0`

export const stripeUrl = `https://js.stripe.com/v3/`

// Routes
export const restaurantsURL = `${apiUrl}/restaurants`
export const dishesURL = `${apiUrl}/dishes`
export const authURL = `${apiUrl}/auth`
