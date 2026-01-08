const message = 'Hello World!'
//the only property used in sting is length
// to access the length of the string message, use length property
console.log("Length : " + message.length)

// by doing the below thing, we can access single element of a string
console.log(message[4])
console.log(message[2])

// we can get undefined in the console screen if try to print the element which exceeds the length of the string
console.log(message[14])

//Methods used in string (without argument)
//1. toUpperCase()
const upper= 'hello'
console.log(upper.toUpperCase())

//2. toLowerCase()
const lower = 'HELLO'
console.log(lower.toLowerCase())

//3. trim()
const trim = '        hello hi        '
//trim() is used to remove the extra space from the string
console.log(trim.trim())
// chaining of functions
console.log(trim.trim().toUpperCase())

//4.trimStart()
const trimStart = '          helloooo'
// it removes the extra space from the starting only
console.log(trimStart.trimStart())

//5. trimEnd()
const trimEnd = '    helloooooooooooo          '
// it removes the extra space from the ending only
console.log(trimEnd.trimEnd())


//Methods used in string ( with arguments)
//1. includes()
// it search the string which is written passes to its argument
// it gives true when string is found or false when not found 
const message2 = 'Hey myself Mehak Bhargava'
console.log(message2.includes('Mehak'))//true
console.log(message2.includes('hi'))//false
//pass more than one string in the argument
console.log(message2.includes('myself Mehak Bhargava'))//true, it checks each small string passes in the argument and match with the variable string

//2.indexOf()
// it is used to get the index value of the letter in a string
// we can pass letter as argument to get the index value
// it gives the index which is in the argument, if didn't find then it gives -1
console.log(message2.indexOf('m'))
console.log(message2.indexOf('B'))
console.log(message2.indexOf('c'))

//3. replace()
//we have to pass two strings in replace() method as it replaces the first string to the second string passes on the argument
console.log(message2.replace('Hey','Hellloooooooo'))
// if not find the first string then it will do nothing
console.log(message2.replace('byeee','hiiiiii'))
console.log(message2.replace('a','A'))
//here it replaces only the a which appears first and the rest of the a remains same. If we want to change all the a's to A's we use replaceAll() method

//4. replaceAll()
//it replaces the repeating element or we can say the founding element in the string
console.log(message2.replaceAll('a','A'))
console.log(message2.replaceAll('e','s'))

//5.concat()
// it is used to add two or more strings
console.log(message.concat(message2))
// if we want to add space between message and message2  (two strings), we just have to do following thing:
console.log(message.concat(' ',message2))
// we can add one more string in the existing two string i.e. the 3rd string(here we add 3 strings)
console.log(message.concat(trimEnd,message2))

//5. padStart()
//this method is used to pad the beginning of the string with another string until it reaches a desired length
// generally this method is used to hide the numbers or password and show the few last digits
const lastFourDigit = '4335'
// in padStart() method first argument is passed as the total number of digits present in a string and second argument is passed to add the characters to the string
console.log(lastFourDigit.padStart(12,'*'))
//here it adds 17 blank space before printing the lastFourDigit variable
console.log(lastFourDigit.padStart(17))
//padding with custom character
console.log(lastFourDigit.padStart(14,'0'))

//6. padEnd()
//Same as padStart(), but padEnd() prints starting digits and masked the ending
const firstDigits = '345642'
console.log(firstDigits.padEnd(12,'*')) 
console.log(firstDigits.padEnd(33))
console.log(firstDigits.padEnd(17,'0'))

//7. charAt()
//it is used to access the character in the string
//just pass the value and the element on that indx will print
console.log(message2.charAt(4))

//8. charCodeAt()
// it provides ascii value 
console.log(message2.charCodeAt(5))
//now it takes by default index 0 
console.log(message2.charCodeAt())

//9. split()
// it split the string in the array
console.log(message2.split(' '))
console.log(message2.split('a'))


//===================================================