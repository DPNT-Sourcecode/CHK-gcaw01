'use strict';

const calculateValue = (skus) => {
  const basket_items = skus.split('');

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
