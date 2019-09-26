import Strapi from 'strapi-sdk-javascript'

export const apiUrl = process.env.API_URL || `http://localhost:1337`

// Strapi
export const strapi = new Strapi(apiUrl)

// Stripe
export const stripeApiKey =
  process.env.STRIPE_API_Key || `pk_test_hObauySTKmbOU4bQox6tLlt300PXrzMFt0`

// Routes
export const restaurantsURL = `${apiUrl}/restaurants`
export const dishesURL = `${apiUrl}/dishes`
