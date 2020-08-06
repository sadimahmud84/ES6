// function doubleIt(num){
//     return num*2;
// }
// const doubleIt=function myFun(){
//     return num*2
// }
const doubleIt=num=>num*2;
const add=(x,y)=>x+y;
const result=doubleIt(50)
const result2=add(15,15)
const multi=(a,b)=>a*b
const result3=multi(10,2)
const bishal=(x,y)=>{
    const add=x+y;
    const sub=x-y;
    const multi=x*y;
    const result=add*sub*multi
    return result
}
const result4=bishal(5,2)
console.log(result2)
console.log(result)
console.log(result3)
console.log(result4)