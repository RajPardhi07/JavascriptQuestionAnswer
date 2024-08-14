// let arr = [1,2,3,4,6,7,8]

// arr.push(2,3,4)

// arr.splice(1,3,"a", "b", "c")
// console.log(arr)

// var status = "Smile"

// setTimeout(() => {
//   const status = "Love";

//   const data = {
//     status: "Fruit",
//      getStatus(){
//       return this.status
//      },
// }
//   console.log(data.getStatus())
//   console.log(data.getStatus.call())
// },0)

// because of call acts as default global object.


function createcounter(){
  var count =2

  function inner(){
    count++;
    console.log(count)

  }

  return inner;
}

const output = createcounter()
output()

// output()
// output()