//Truthy and falsy values
console.log(Boolean(10))//true
console.log(Boolean(1))//true
console.log(Boolean(0))//false
console.log(Boolean(-0))//false
console.log(Boolean(0.000004))//true
console.log(Boolean(-1))//true
console.log(Boolean(Infinity))//true
console.log(Boolean(-Infinity))//true
console.log(Boolean(NaN))//false
console.log(Boolean(null))//false
console.log(Boolean(""))//false as it is an empty string
console.log(Boolean(" "))//true as it is not an empty string
console.log(Boolean(undefined))//false

console.log("Now concluding all the falsy values -> 0, -0, NaN, '', undefined, null")
