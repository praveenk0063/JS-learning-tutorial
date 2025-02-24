const name = "praveen"
const repoCount = 50

// console.log(name + " " + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("hitesh-hc-com")
// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("e"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringone = "  hitesh  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace("%20", "-"));
console.log(url.includes('hitesh'));

console.log(gameName.split("-"));
