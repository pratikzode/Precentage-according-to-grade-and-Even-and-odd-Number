/* console.log("Welcome to the world of Typescript!!");  

let num1:number=10,num2:number=20;
let result=num1+num2;
console.log("Sum="+result);
 */

//Nested if-else
let num:number=10;
if(num>0){
    console.log("positive");
    if(num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
else{
    console.log("negative");
}

//else-if ladder
let percentage:number=98;
if(percentage>=75){
    console.log("A+ grade");
}
else if(percentage>=70 && percentage<75){
    console.log("A grade");
}
else if(percentage>=65 && percentage<70){
    console.log("B+ grade");
}
else if(percentage>=60 && percentage<65){
    console.log("B grade");
}
else if(percentage>=50 && percentage<60){
    console.log("C grade");
}
else{   
        console.log("fail");   
}