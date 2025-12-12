//at() return index

// const myArray=[1,3,4,5,7,6]

// console.log(myArray.at(2))//2
// console.log(myArray.at(-2))//4
// console.log(myArray.at())//1
// console.log(myArray.at(60)) //undefined


//concat(array,array1,....,arrayN) return a new array


// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const newarray=array1.concat(array2)

// console.log(newarray)


//evary(callbackfn)

//const istrue=(element)=>element>0
// const istrue=(array1,array2)=> array2.every((element)=>array1.includes(element))

// const myArray= [1, 30, 39, 29, 10, 13];

// const myArray1= [1, 3, 39, 29, 10, 13];

// // console.log(myArray.every(istrue))
//console.log(istrue(myArray,myArray1))


//fill(target,start,end)
// const myArray= [1, 30, 39, 29, 10, 13];
// console.log(myArray.length)
// console.log(myArray.fill(3,9))

// const istrue=(element)=> element>=20

// const myArray= [1, 30, 39, 29, 10, 13];

// const result=myArray.filter(istrue)
// console.log(result)


// const isPrime=(element)=>{
//     if(element<2) return false
//     if(element%2===0) return element===2;

//     for(let i=3;i*i<element;i+=2){
//        if(element%2===0){
//         return false;
//        }
//     }
//     return true;
// }

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const result=array.filter(isPrime);

// console.log(result)


//find(callbackfn) //return the first element

// const array = [-3, -2, -1, 0, 1, 2,20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const isFind=(n)=> n>10;

// console.log(array.find(isFind))

// const Fruit=[
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ]

// const isMatch=(n)=> n.name==='bananas';

// console.log(Fruit.find(isMatch))

// array.find((element,index,array)=>{
//     if(element>10) console.log(element)
// })

//flat(depth) 

// const arr1 = [1, 2, [3, 4]];

// const result=arr1.flat();
// console.log(result)

// const arr=[1,2,4,[3,5,[6,7,4,8]]]
// console.log(arr.flat())
// console.log(arr.flat(Infinity))


//forEach() loop



// items.forEach((element)=>{
//    result.push(element)
// })
// console.log(result)
// const items = ["item1", "item2", "item3"];

// const result=[2,3]
// const arr=result.push(items)
// console.log(arr)
// console.log(result)



// class Counter{
//    constructor(){
//      this.sum=0;
//      this.count=0;
//    }

//    add(arr){
//      arr.forEach(element => {
//          this.sum+=element;
//          this.count++;
//      },this);
//    }

// }

// const array = [-3, -2, -1, 0, 1, 2,20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const obj=new Counter()

// obj.add(array)
// console.log(obj.sum)
// console.log(obj.count)

//includes(searchValue) 
//includes(searchValue,startIndex)
//return true/false

// console.log([1,2,4].includes(2))//true
// console.log([1,2,4].includes(3))//false
// console.log([1,2,4].includes(2,2))//false
// console.log([1,2,4].includes(2,0))//true
// console.log([1,2,4].includes(2,-1))//false
// console.log([1,2,4].includes(2,-4))//true
// console.log([1,2,4].includes())//false

// const array = [2, 9, 9];
// console.log(array.indexOf())

//join() or join(separator) return a new string

// const elements = ["Fire", "Air",undefined,,"Water"];
// console.log(elements.join() )
// console.log( elements.join("") )
// console.log(elements.join(';'))
// console.log(elements.join(':'))

//  const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix.join(";"))

//map(callbackFn) //return a new array without changing length, if the condition is not satisfy,this element will undefined

// const numbers = [1, 2, 3, 4];

// const newarray=numbers.map((x)=>x*x)
// console.log(newarray) 

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// const newA=kvArray.map((element)=> ( {[element.key]:element.value}))
// console.log(newA)

// // const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// // console.log(reformattedArray)
// const str =["1", "2", "3"];

// console.log(str.map(Number))

// const num = [1, 2, 3, 4];

// const arr=num.map((n)=>{
//   if(n<3) return num;
// });
// console.log(arr)

// let total=0

// const withTex=num.map((n)=>{
//    total+=n;
//    return n*1.2;
// })
// console.log(total)
// console.log(withTex)

//push(e,e1,......eN)

// const animals = ["pigs", "goats", "sheep"];
// const a=["dog","cow"]
// // animals.push(a)
// // console.log(animals)
// // const b=animals.flat(Infinity)
// // console.log(b)
// //opposite of flat()
// animals.push(...a)
// console.log(animals)


const array = [15, 16, 17, 18, 19];

const sum=array.reduce((a,b)=>{
   return Math.max(a,b);
})
console.log(sum)
