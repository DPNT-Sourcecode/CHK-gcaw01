'use strict';

const basket_is_valid = (array_of_items, items_and_prices) => {
  const valid_item_skus = Object.keys(items_and_prices)
  return array_of_items.every((item) => valid_item_skus.includes(item))
}

const calculateBasketValue = (array_of_items, items_and_prices) => {
  // return array_of_items.reduce((acc, item) => acc + items_and_prices[item])
  let total = 0
  for (const item of array_of_items){
    total += items_and_prices[item]
  }
  return total
}

const calculateValue = (skus) => {
  const basket_items = skus.split('');

  if (!basket_is_valid(basket_items, items_and_prices)) { return -1 }

  if (basket_items.length === 0) { return 0 }

  return calculateBasketValue(basket_items, items_and_prices)
}


const items_and_prices = {
  A:50,
  B:30,
  C:20,
  D:15
}

module.exports = calculateValue
