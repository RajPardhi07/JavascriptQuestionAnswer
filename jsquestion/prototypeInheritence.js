

// var human ={
//     canTalk:true,
//     canWalk:true,
//     Haveemotion:true,
//     hasFourleg:false,
//     canRun:true
// }


// var sheryStudent ={
//     createAmazingWebsite:true,
//     createAwwardedwebsite:true,
//     createAmazingGsapanimation:true,
// }

// sheryStudent.__proto__ = human;



// var obj = {
//     name:"Raj",
//     batkaro : function(){
//    console.log(this)
//     }
// }

// obj.batkaro();



function abcd(val1, val2, val3 ) {
    console.log(this, val1, val2, val3)
}

var obj = {age:23}

abcd.apply(obj,[1,2,3])