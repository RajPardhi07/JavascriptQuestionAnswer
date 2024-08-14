// Specify the API endpoint for user data
const apiUrl = 'https://api.example.com/users/123';

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(Data => {
    // Process the retrieved user data
    console.log('user Data:', Data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//---------------------------------------------------------------

  // function fetchdata(){
//     fetch("some url")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("Error", error))
    
// }
// fetchdata();

//-----------------------------------------------------------------------


// const fetchdata = async () => {
//     try {
//         const res = await fetch("url")

//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error data", error)
//     }
// }

// fetchdata();


// fetch("url").then(res => {
//   if (!res.ok) {
//     throw new error("Network response was not ok")
//   }
//   return res.json()
// })
// .then(data => {
//   console.log("User Data", data)
// }).catch(error => {
//   console.log("Error", error)
// })




// const fetchdata = async () => {
//   try {
//     const res = await fetch("url")
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log("Error data", error)
//   }
// }



// fetch("some url")
// .then(res => res.json())
// .then(data=> console.log(data))
// .catch(error => console.log(error))




// const fetchdata = async () => {
//   try {
//     const res = await fetch("url")
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log("Error data", error)
//   }
// }

// fetchdata()





