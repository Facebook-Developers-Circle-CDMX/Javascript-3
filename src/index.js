const findDouble = function (numbers) {
  var array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (array.includes(numbers[i])) return numbers[i];

    array.push(numbers[i]);
  }
};

module.exports = findDouble;
