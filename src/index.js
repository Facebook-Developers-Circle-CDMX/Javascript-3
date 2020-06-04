const findDouble = function (number) {
    let numExists = []
    for(num of number){
        if(numExists[num]){
            return num
        }
        else
            numExists[num] = true
    }
}; 

module.exports = findDouble;