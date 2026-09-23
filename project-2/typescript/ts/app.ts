// Q1 Create a program to reverse a given number using a loop.

document.write("<h2>Q1 Create a program to reverse a given number using a loop.</h2>");

let num:number = 256;
let rn:number = 0;

document.write("the number is = "+  num);
document.write("<h3>OUTPUT</h3>")

while(num>0){
    let digit:number = num % 10 ;
    rn = (rn*10) +digit;
    num = Math.floor(num/10);
    
}

document.write("the reverse number is = "+rn+"<hr>");



// Q2 Develop a program to check whether a number is a palindrome.

document.write("<h2>Q2 Develop a program to check whether a number is a palindrome.</h2>")

let num2:number = 121;
let temp2:number = num2;
let rem2:number = 0;
let rn2:number = 0;

document.write("the number is = "+num2+"<br><br>");
document.write("<h3>OUTPUT</h3>")

while(num2 > 0){
    rem2 = num2 % 10;
    rn2 = (rn2 * 10)+rem2;
    num2 = Math.floor(num2 / 10);
}

if(temp2 == rn2){
    document.write("the number is palidrome<hr>")
}else{
    document.write("the number is not palidrome<hr>")
}



// Q3 Write a program to print the Fibonacci series up to n terms using a loop.

document.write("<h2>Q3 Write a program to print the Fibonacci series up to n terms using a loop.</h2>")

let n3:number = 10;

document.write("the n number is = "+n3+"<br><br>");
document.write("<h3>OUTPUT</h3>")
document.write("the fibonacci series<br>")

let a3:number = 0;
let b3:number = 1;

for(let i3:number = 1; i3<=n3; i3++){
    document.write(a3 + "  ");

    let c3 = a3 + b3;
    a3 = b3;
    b3 = c3;
}

document.write("<hr>");



// Q4 Create a program to find the factorial of a number using a loop.

document.write("<h2> Q4 Create a program to find the factorial of a number using a loop.</h2>");

let num4:number = 4;
let sum4:number = 1;

document.write("the num is = "+num4+"<br>");
document.write("<h3>OUTPUT</h3>")


for(let i4:number=1; i4<=num4; i4++){
    sum4 = sum4 * i4
}

document.write("the factorial of "+num4+" is = "+sum4+ "<hr>");



// Q5 Develop a program to check whether a number is a prime number.

document.write("<h2>Q5 Develop a program to check whether a number is a prime number.</h2>");

let num5:number = 7;
let count:number = 0;

document.write("the num is = "+num5+"<br>");
document.write("<h3>OUTPUT</h3>");

for(let i:number=1; i<=num5; i++){

     if(num5 % i == 0){
        count++;
     }
}

if(count == 2){
    document.write("prime number<hr>");
}else{
    document.write("not prime number<hr>");
}



// Q6 Write a program to count the total number of digits in a given number.

document.write("<h2>Q6 Write a program to count the total number of digits in a given number.</h2>");

let num6:number = 5656558;
let temp6:number = num6;
let count6:number = 0;

document.write("the number is = "+num6);
document.write("<h3>OUTPUT</h3>");

while(temp6!=0){
    temp6 = Math.floor(temp6 / 10);
    count6++;
}

document.write("the total digit is = "+count6+"<hr>");



// Q7 Create a program to calculate the sum of digits of a number.

document.write("<h2>Q7 Create a program to calculate the sum of digits of a number.</h2>");

let num7:number = 58695
let sum7:number = 0;
let digit7:number = 0;

document.write("the number is = "+num7);
document.write("<h3>OUTPUT</h3>");

while(num7>0){
    digit7 = num7 % 10;
    sum7 += digit7;
    num7 = Math.floor(num7 / 10);
}

document.write("the sum of total digit = "+sum7+"<hr>");


// Q8 Develop a program to check whether a number is an Armstrong number.

document.write("<h2>Q8 Develop a program to check whether a number is an Armstrong number.</h2>");

let num8:number = 370;
let temp8:number= num8;
let rem8:number = 0;
let sum8:number = 0;

document.write("the number is = "+num8);
document.write("<h3>OUTPUT</h3>");

while(temp8 > 0){
    rem8 = temp8 % 10
    sum8 = sum8 +(rem8*rem8*rem8)
    temp8 = Math.floor(temp8/10);
}

if(num8==sum8){
    document.write("its armstrong number<hr>");
}else{
    document.write("its not armstrong number<hr>");
}



// Q9 Write a program to calculate the power of a number using a loop.

document.write("<h2> Q9 Write a program to calculate the power of a number using a loop.</h2>");

let num9:number = 2;
let power9:number = 4;
let sum9:number = 1;

document.write("the number is = "+num9+"<br>")
document.write("the power is = "+power9)
document.write("<h3>OUTPUT</h3>");

for(let i:number=1; i<=power9; i++){
    sum9 = sum9 * num9;
}

document.write("the "+num9+" ^ "+power9+" is = "+sum9+"<hr>");



//Q10 Create a program to print the following number pattern:
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

document.write("<h2>Q10 Create a program to print the following number pattern:</h2>");

let str10='';

document.write("<h4>1<br>1 2<br>1 2 3<br>1 2 3 4<br>1 2 3 4 5</h4>")
document.write("<h3>OUTPUT</h3>");

for(let i10:number=1; i10<=5; i10++){
    for(let j10:number=1; j10<=i10; j10++){
        str10 += j10+" ";
    }
    str10 += "<br>"
}

document.write(str10+"<hr>")


// Q11 Create a program to print the following number pattern:

document.write("<h2>Q11 Create a program to print the following number pattern:</h2>");
document.write("<h4>1 2 3 4 5<br>1 2 3 4<br>1 2 3<br>1 2<br>1</h4>");
document.write("<h3>OUTPUT</h3>");

let str11='';

for(let i11:number=5; i11>=1; i11--){
    for(let j11:number=1; j11<=i11; j11++){
        str11 += j11+" ";
    }
    str11 += "<br>"
}

document.write(str11+"<hr>")


// Q12 Create a program to print the following number pattern:
//1 2 3 4 5
//  1 2 3 4
//    1 2 3
//      1 2
//        1

document.write("<h2>Q12 Create a program to print the following number pattern:</h2>");
document.write("<h4>1 2 3 4 5<br>&nbsp;&nbsp;&nbsp;1 2 3 4<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 2 3<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 2<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</h4>");
document.write("<h3>OUTPUT</h3>");

let str12='';
let n12= 6;

for(let i11:number=5; i11>=1; i11--){

     for (let j11 = 5; j11 > i11; j11--) {
        str12 += "_ ";
    }

    for(let j11:number=1; j11<=i11; j11++){
        str12 += j11+" ";
    }
    str12 += "<br>"
}

document.write(str12+"<hr>")

    

// Q13 Create a program to print the following number pattern:
//        1
//      1 2
//    1 2 3
//  1 2 3 4
//1 2 3 4 5

document.write("<h2>Q13 Create a program to print the following number pattern:</h2>");
document.write("<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 2<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 2 3<br>&nbsp;&nbsp;&nbsp;1 2 3 4<br>1 2 3 4 5</h4>")
document.write("<h3>OUTPUT</h3>");

let str13='';

for(let i13:number=1; i13<=5; i13++){
    for(let s=5;s>i13;s--){
        str13 += "_ ";
    }
    for(let j13:number=1; j13<=i13; j13++){
        str13 += j13+" ";
    }
    str13 += "<br>"
}

document.write(str13+"<hr>");






