

// function printPatter(range) {
//     for(var i=1; i<range; i++){
//         var str = "";
//      for(var j=1; j<i; j++){
//         str = str + j + " ";
//      }
//      console.log(str)
//     }
// }

// printPatter(8)





// function stringCovert(str){
// var strarr = str.split("").map(function (c){
//     if(c.charCodeAt()> 90) {
//         return c.toUpperCase();
//     }
//     else{
//         return c.toLowerCase();
//     }
// })

// return strarr.join("");
// }

// var inverted = stringCovert("the Quick bRoWn fOx")





var arr = [[1,2,3,4,],[5,6,7,8,],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24,25]]

for(var i=0; i<arr.length; i++){
    console.log(`printing row ${i+1}`)
    for(var j=0; j<arr[i].length; j++){
        console.log(arr[i][j])
    }
}










