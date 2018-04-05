'use strict';

const basket_is_valid = (array_of_items) => {
  const valid_item_skus = Object.keys(items_and_values)
  return array_of_items.every((item) => valid_item_skus.includes(item))
}

const calculateValue = (skus) => {
  const basket_items = skus.split('');

  if( !basket_is_valid(basket_items) ) { return -1 }
  if (basket_items.length === 0) { return 0 }


  throw new Error("method not implemented");
}


const items_and_values = {
  A:50,
  B:30,
  C:20,
  D:15
}

module.exports = calculateValue