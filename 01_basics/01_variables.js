const accountId = 144553
let accountEmail = "praveen@gmail.com"
var accountPassword = "12345" 
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed too change because of const keyword.

accountEmail = "world@gmail.com"
accountPassword = "24523"
accountCity = "Bangalore"
console.log(accountId);

/*Prefer not to use var because of issue in block scope and functional scope*/ 

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);
