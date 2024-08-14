var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];


var Avgmarks =0;

for(var i=0; i<=students.length; i++){
    Avgmarks = Avgmarks + students[i][1]

   var avg = (Avgmarks/students.length);
}

console.log("Average grade "+ (Avgmarks/students.length));

if(avg< 60){
    console.log("grade f")
}

else if(avg< 70){
    console.log("grade E")
}

else if(avg< 80){
    console.log("grade C")
}

else if(avg< 90){
    console.log("grade B")
}

else if (avg=100){
    console.log("toppper")
}