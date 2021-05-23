// var base =prompt("enter base :");
// var height = prompt("enter height :");

//     base = parseFloat(base,10);
//     height = parseFloat(height,10);

// var rectangle = (base * height) ;

// document.write("Rectangle = " + rectangle + "<br/>");

// var triangle  = (base * height)/2 ;

// document.write("triangle = " + triangle);

// var farn = parseFloat(prompt("enter farenheit"));

// var cels = (farn -32) * (5/9);

// document.write("celcius =" + cels);


// var marks=parseFloat(prompt("enter your marks"));

// if(marks>=80 && marks <= 100)
// console.log("you got A+");

// else if(marks>=70 && marks <= 79)
// console.log("you got A");

// else if(marks>=60 && marks <= 69)
// console.log("you got A-");

// else if(marks>=50 && marks <= 59)
// console.log("you got B");

// else if(marks>=40 && marks <= 49)
// console.log("you got c");

// else if(marks>=33 && marks <= 39)
// console.log("you got D");

// else if(marks>=0 && marks <= 32)
// console.log("you got F");

// else
// console.log("enter valid number");

// 17


// var letter = prompt("enter any letter ");

// letter = letter.toLowerCase();

// switch (letter){
//     case "a": 
//     case "e":
//     case "i": 
//     case "o":
//     case "u":
//         console.log("vowel");
//         break;
//     default:
//         console.log("consonant");
// }

//18
// for (var x = 1 ; x <= 10 ; x++ ) {
//     document.write("   " + x);


// }


// //19
// var m= parseFloat(prompt("enter the first number : "));
// var n= parseFloat(prompt("enter the last number : "))
// var sum=0;
// for (var x = m ; x <= n ; x = x + 1){

//     sum= sum+x;

// }
//     document.write(sum);


// // for (var i=1; i<=3; i++){

// //     var num1 =  parseFloat(prompt("enter the first number :"));
// //     var num2 =  parseFloat(prompt("enter the second number :"));
// //     var sum= num1+ num2;
    
// //     console.log(sum);
// }


//20

// var x = 1 ;
// var sum =0;

// while (x <= 5) {
//     var sum = sum + x;
//      x++;  
// }
// document.write(" result = " +sum);

//20
//  var x = 1 ;
//  var sum =0;

//  while (x <= 100) {

//      var sum = sum + x;
//       x++;  
//  }
//  document.write(" result = " +sum);


//ternary opertor 


// var number= Number(prompt("enter a number :"));

// var result = number>0 ? "positive" : number<0 ? "negetive" : "zero";
// console.log(result);

// var number1= Number(prompt("enter first number :"));
// var number2= Number(prompt("enter second number :"));
// var number3= Number(prompt("enter third number :"));

// var result = number1>number2 && number1>number3 ? "Your 1st input number is large"
//              : number2>number1 && number2>number3 ? "Your 2nd input number is large" 
//              : "Your 3rd input number is large"
// console.log(result);




// function 
//create a function 


// function sqaure(num1,num2){
// var result =  num1 * num2 ;
// document.write(" The result is = " + result + "<br>" );

// }
// sqaure(5,6 );
// sqaure(7,7 );




//calculator using function

var num1 =parseInt(prompt("enter your first  number : "));
var num2 =parseInt(prompt("enter your second  number : "));

function addition(num1,num2){
    var addition =  num1 + num2 ;
    document.write(" The  addition result is = " + addition + "<br>" );
    
    }
    addition(num1,num2);

    function subtraction(num1,num2){
        var subtraction =  num1 - num2 ;
        document.write(" The subtraction result is = " + subtraction + "<br>" );
        
    }
    subtraction(num1,num2);


    function multiplication(num1,num2){
        var multiplication =  num1 * num2 ;
        document.write(" The multiplication result is = " + multiplication + "<br>" );
        
    }
    multiplication(num1,num2);


    function division(num1,num2){
        var division =  num1 / num2 ;
        document.write(" The division result is = " + division + "<br>" );
        
    }
    division(num1,num2);

    function modulas(num1,num2){
        var modulas =  num1 % num2 ;
        document.write(" The modulas result is = " + modulas + "<br>" );
        
    }
    modulas(num1,num2);