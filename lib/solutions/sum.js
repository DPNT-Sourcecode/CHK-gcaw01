'use strict';

const sum = (int_1, int_2) => {
  if(!check_numbers_are_integers_between_0_and_100(int_1, int_2))
  return int_1 + int_2
}

const check_numbers_are_integers_between_0_and_100 = (...numbers) => {
  return numbers.every((number) => {
    return number >= 0 && number <= 100 && Number.isInteger(number)
  })
}

module.exports = sum
