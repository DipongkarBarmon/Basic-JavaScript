
// let str1="Hello" 
// let str2=" Word"
// let str3=str1+str2;
// console.log(str3)


// let str1="Hello" 
// let str2=3
// let str3=str1+str2;
// console.log(str3)

//  let str1="Hello";
//  let a=4,b=0,c=3;

// let str3=str1+a+b+c;
// console.log(str3)

// let str1="Hello";
//  let a=4,b=0,c=3;

// let str3=a+b+str1+c;
// console.log(str3)

// let str1="Hello"
// let bool=false
// let result=bool+str1
// console.log(result)

// let str1=4
// let bool=true
// let result=bool+str1
// console.log(result)


// const id= Symbol('123');
// const anthoderId=Symbol('123');
// console.log(id);
// console.log(anthoderId)
// console.log(id===anthoderId)

const areEqualInUpperCase = (str1, str2) =>str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss")); // true; should be false
console.log(areEqualInLowerCase("ı", "I")); // false; should be true