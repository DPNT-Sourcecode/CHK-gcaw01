'use strict';

const basket_is_valid = (array_of_items) => {
  return array_of_items.every((item) => items_and_values.ke)
}

const calculateValue = (skus) => {
  const basket_items = skus.split('');

  if (basket_items.length === 0) { return 0 }
  if( !basket_is_valid(basket_items) ) { return -1 }


  throw new Error("method not implemented");
}


const items_and_values = {
  A:50,
  B:30,
  C:20,
  D:15
}

module.exports = calculateValue