'use strict';

const stripe = require('stripe')('sk_test_pQFmqsp0S0KV01Fabz12U4uq00A1GCQkXC');

/**
 * A set of functions called "actions" for `Order`
 */

module.exports = {

  /**
   * Create a/an order record.
   *
   * @return {Object}
   */
  create: async ctx => {
    const { address, amount, dishes, token, city } = ctx.request.body;

    const charge = await stripe.charges.create({
      // Transform cents to dollars.
      amount: amount * 100,
      currency: 'eur',
      description: `Order ${new Date()} by ${ctx.state.user.id}`,
      source: token,
    });

    // Register the order in the database
    const order = await strapi.services.order.create({
      address,
      amount,
      dishes,
      city
    });

    return order;
  },

};
