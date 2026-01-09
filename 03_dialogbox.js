// JavaScript Dialog Boxes

// 1. alert()
// 2. confirm()
// 3. prompt()

//================================================
//1. alert()
// - Displays a message to the user with an "OK" button.
// - Does NOT return any value (returns undefined)

//const isAlert = alert("Are you sure?")
//console.log(isAlert)

//=================================================
//2. confirm()
//- Displays a message with "OK and "Cancel" buttons.
//- Returns true if OK is clicked, false if Cancel is clicked.

//const isConfirmed = confirm("Would you like to proceed?")
//console.log(isConfirmed)
//if(isConfirmed){
  //  console.log("User chose to continue")
//}
//else{
  //  console.log("User cancelled the action")
//}
//=================================================
//3. prompt()
//- Displays a message and input box to the user.
//- Returns the input string if OK is clicked, or null if Cancel is clicked.

const isPrompt = prompt("What's your name?")
console.log(isPrompt)
if(isPrompt!=null){
    console.log("Hello "+ isPrompt)
}
else{
    console.log("You didn't enter the correct name.")
}