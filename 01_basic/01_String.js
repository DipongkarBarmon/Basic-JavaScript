//at(index)=>return the character of String respective index
// if index is nagative ,the character returned will be found by countin backed form the end

// const str="Dipongkar"
// console.log(str.at(3));
// console.log(str.at());
// console.log(str.at(10))


//charAt(index) -> undefine index and out of range index(positive) is return empty string and out of nagtive range is returned first character
//otherwise return charater
// const str="Dipongkar"
// console.log(str.charAt(3));
// console.log(str.charAt(-1));
// console.log(str.charAt())
// console.log(str.charAt(10))


//charCodeAt(index)->return intger value from 0 to 65535
//Exception : out of range index return NaN,undefine index return first index

// const str="Dipongkar"
// console.log(str.charCodeAt(3));
// console.log(str.charCodeAt(-1));
// console.log(str.charCodeAt())
// console.log(str.charCodeAt(10))


//concat()->concatenates the string value
// const str="Dipongkar"
// const str1='Barmon'
// const str2='Dip'
// console.log(str.concat(" ",str1," ",str2))

// determines wheater a string ends with the charaters of the string return true or false
// const str="Dipongkar"
// console.log(str.endsWith('ar'));//true
// console.log(str.endsWith('on'));//false
// console.log(str.endsWith('on',-1));//false also out of index


// const str = "To be, or not to be, that is the question.";
// console.log(str.includes('to'))//true
// console.log(str.includes(' that'))//true
// console.log(str.includes('To Be'))//false

// console.log(str.includes('To Be',1))//false
// console.log(str.includes('To Be',-1))//false
// console.log(str.includes('',45))//true


//const str="Brave new world";
// console.log(str.indexOf('n'));
// console.log(str.indexOf('Bre'));
// console.log(str.indexOf('world'));
// console.log(str.indexOf());
 
//console.log(str.lastIndexOf(''));

//back-ticks(``) it hold single and double quates 
// const str=`hello "Dip".I am 'enginner'`
// console.log(str)
//multi string
// const str=`
//   hello
//   hellow
//   kkdjf
//   kdfja
// `
// console.log(str)

// "abc".repeat(-1); // RangeError
// "abc".repeat(0); // ''
// "abc".repeat(1); // 'abc'
// "abc".repeat(2); // 'abcabc'
// "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1 / 0); // RangeError

// ({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// // 'abcabc' (repeat() is a generic method)


// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const str=paragraph.replace(`hello`,`my`);
// console.log(str)

// const report = "A hacker called acke breached the system.";

// const s=report.replaceAll('hello','A')
// console.log(s)


const str1 = "The morning is upon us."

const s=str1.slice(4)
console.log(s)