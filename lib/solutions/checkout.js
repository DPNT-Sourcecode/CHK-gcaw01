'use strict';

const basket_is_valid = (array_of_items, items_and_prices) => {
  const valid_item_skus = Object.keys(items_and_prices)
  return array_of_items.every((item) => valid_item_skus.includes(item))
}

const calculateBasketValue = (array_of_items, items_and_prices, special_offers) => {
  // return array_of_items.reduce((acc, item) => acc + items_and_prices[item])
  let sorted_items = array_of_items.slice().sort()
  let total = 0

  for (const item of sorted_items){
    total += items_and_prices[item]
  }

  const savings = discount_savings(sorted_items, items_and_prices, special_offers)

  return total - savings
}

const discount_savings = (sorted_items, items_and_prices, special_offers) => {
  let savings = 0

  for(const offer in special_offers){
    console.log(`in loop`)
    if (!special_offers.hasOwnProperty(offer)) { continue }
    const offer_object = sorted_items[offer]
    console.log(offer_object)

    console.log(`past the first return`)
    const number_of_items = sorted_items.lastIndexOf(offer_object['item']) - sorted_items.indexOf(offer_object['item'])
    const number_of_times_offer_applies = number_of_items / offer_object['quantity']
    if (number_of_times_offer_applies <= 0) { continue }
    savings += calculateSavings(special_offers[offer], number_of_times_offer_applies, items_and_prices)
    console.log(`savings = ${savings}`)
  }

  return savings
}

const calculateSavings = (offer, number_of_times_offer_applies, items_and_prices) => {
  console.log(`calculating savings`)
  const regular_price = items_and_prices[offer.item] * offer.quantity
  const offer_price = offer.total_price
  return Math.max(0, regular_price - offer_price)
}

const calculateValue = (skus) => {
  const basket_items = skus.split('');

  if (!basket_is_valid(basket_items, items_and_prices)) { return -1 }

  if (basket_items.length === 0) { return 0 }

  return calculateBasketValue(basket_items, items_and_prices, special_offers_same_item_multibuy_discount)
}


const items_and_prices = {
  A:50,
  B:30,
  C:20,
  D:15
}

const special_offers_same_item_multibuy_discount = {
  offer_1: {
    item: 'A',
    quantity: 3,
    total_price: 130
  },
  offer_2: {
    item: 'B',
    quantity: 2,
    total_price: 45
  }
}

module.exports = calculateValue
