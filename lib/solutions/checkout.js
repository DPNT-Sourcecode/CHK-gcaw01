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

  total -= discount_savings(sorted_items, items_and_prices, special_offers)

  return total
}

const discount_savings = (sorted_items, items_and_prices, special_offers) => {
  const savings = 0

  Object.keys(special_offers).forEach((offer) => {
    const item_on_offer = offer.item
    if(!sorted_items.includes(item_on_offer)) { return }
    const number_of_items = sorted_items.lastIndexOf(item_on_offer) - sorted_items.indexOf(item_on_offer)
  })

  return 0
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
    price: 130
  },
  offer_2: {
    item: 'B',
    quantity: 2,
    price: 45
  }
}

module.exports = calculateValue
