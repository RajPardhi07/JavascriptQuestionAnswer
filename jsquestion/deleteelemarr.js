

// var arr = [89, 56, 12,45,67,34,6785,34,56]

// arr = deleteElement(arr, 56)

// function deleteElement(arr, ele){
//     for(var i=0; i<arr.length; i++){
//         if(arr[i]==ele){
//             arr.splice(i,1);

//         }
//     }

//     return arr;

// }


// console.log(arr)





var arr = [12,34,56,78,65,78,54,34]
arr = deleteElement(arr, 34)

function deleteElement(arr, elem){
    for(var i=0; i<arr.length; i++){
        if(arr[i] == elem){
            arr.splice(i,1)
        }
    }
    return arr;
}

console.log(arr)