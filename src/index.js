const findDouble = function (number) {
    //aqui escribiras tu codigo
    var lid = []
    
    for(num of number){
        
        if(lid.indexOf(num) == -1){
            lid.push(num)
        }else{
            return num
        }
    }
    return null
}; 

module.exports = findDouble;
