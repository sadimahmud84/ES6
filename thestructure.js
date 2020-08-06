const person ={name:"jack william",age:18,job:"facebook",gfName:"Asma",friends:["tom","jom","bom"]}
// const gfName=person.gfName
const {age,job,gfName}=person
console.log(age,job,gfName)
const complexObject={
    name:"abc",
    info:{
address:"kola bagan",
leader:"tiger"
    }
}
const{leader}=complexObject.info
console.log(leader)