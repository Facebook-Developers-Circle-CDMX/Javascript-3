const findDouble = function (number) {
    //aqui escribiras tu codigo
    const mySet=new Set();
    for(let i=0;i<=number.length;i++){
	    if(mySet.has(number[i])){
  	        return number[i]
        }else{
  	        mySet.add(number[i]);
        }
    }
}; 

module.exports = findDouble;