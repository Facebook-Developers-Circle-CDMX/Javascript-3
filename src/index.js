const findDuplicates = function (nums) {
  obj = {};
  for (let num of nums) {
    if (obj[num]) return num;
    obj[num] = true;
  }
};

module.exports = findDuplicates;
