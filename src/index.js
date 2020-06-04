const findDouble = function (number) {
    const mySet = new Set();
    for(var i = 0; i < number.length; i++){
        if(mySet.has(number[i])){
            return number[i];
        }
        mySet.add(number[i]);
    }
}; 

module.exports = findDouble;