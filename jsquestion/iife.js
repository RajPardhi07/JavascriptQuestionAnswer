
var ans= (function () {
var b = 7;
 return {
    getter:function(){
        console.log(b)
    },
    setter:function(val){
b = val
    }
 }
})()