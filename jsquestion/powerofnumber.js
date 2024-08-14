

function numPower(num, pow){
var res =1;
for(var i=0; i<pow; i++){
    res = res*num
}
return res;
}

console.log(numPower(3, 4));
console.log(numPower(16,2));