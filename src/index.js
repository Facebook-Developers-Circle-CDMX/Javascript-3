const findDouble = function (number) {
    //aqui escribiras tu codigo
    var temp = []
    for (let index = 0; index < number.length; index++) {
        if (temp.includes(number[index])) {
            return number[index];
        } else {
            temp.push(number[index]);
        }
    }
};

module.exports = findDouble;