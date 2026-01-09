//Mathematical operators
//1. Addition(+)
const c = 4
const b = 3
console.log(c+b)

//2.Subtraction(-)
console.log(c-b)

//3.Multipiication(*)
console.log(c*b)

//4.Division(/)
console.log(c/b)

//5.Remainder operator also known as modulus in other languages(%)
console.log(c%b)

//6. Exponentiation (**)
console.log(c**b)

//Math object in javascript
// properties on math object

//1.Math.PI
console.log(Math.PI)
//2.Math.SQRT2
console.log(Math.SQRT2)
//3.Math.E
console.log(Math.E)

//Methods on Math object
//1.Math.sqrt(x)
//Math.sqrt(number)
console.log(Math.sqrt(4))
console.log(Math.sqrt(56))
console.log(Math.sqrt(625))

//2.Math.pow(x,y)
//Math.pow(Base,exponent)
console.log(Math.pow(3,2))
console.log(Math.pow(8,3))
console.log(Math.pow(10,0))// output is 1(any numberf to the power of 0 is 1)
console.log(Math.pow(5,-3))

//3.Math.floor(x)
//rounds a number down to the nearest integer - always towards negative infinity
console.log(Math.floor(3.8999))//remove the decimal part i.e. .8999
console.log(Math.floor(4.3))
console.log(Math.floor(7))
console.log(Math.floor(-4.54))

//4. Math.ceil(x)
// round up to the nearest whole number ( integer), even if the decimal part is very small
console.log(Math.ceil(4.6))
console.log(Math.ceil(2.34))
console.log(Math.ceil(-8.33))

//5. Math.round(x)
//just round off the value
console.log(Math.round(3.42))
console.log(Math.round(7.5))
console.log(Math.round(-4.53))
console.log(Math.round(-4.4))

//6. Math.random()
console.log(Math.random())//gives random number btw 0 and 1 not including the 1 in it
console.log(Math.random()*10)//gives a decimal number btw 0 and 10 but not including 10 in it
console.log(Math.random()*11)//gives a decimal number btw 0 and 11 
//but what if we want to remove the decimal part of the number?? then to do so we have to use floor()
const ran= Math.floor(Math.random() *10)+1
console.log(ran)//gives a whole number between o to 10 including the 10

function getRandomNumber(min,max){
const mini = 5
const maxi = 10
return Math.floor(Math.random()*(max-min+1)) + min
}
//the range here is 5, 15 so after - it gives 10, after adding +1 the range is 11 so we have to add the min which is 5 to strech the length and make it to 15 so now total max made is 16 now we can generate from 5 to 16, not including 16
const number = getRandomNumber(5,100)
console.log(number)
//Infinity
console.log(8/0)//infinity
console.log(-8/0)//-infinity
console.log(typeof Infinity)//number
console.log(0/0)//NaN
console.log(typeof NaN)//number