const findDouble = function (number) {
    //aqui escribiras tu codigo
    let tmp = [];

    for (let i = 0; i < number.length; i++) {
        if (tmp.includes(number[i])) return number[i];

        tmp.push(number[i]);
    }
}; 

module.exports = findDouble;