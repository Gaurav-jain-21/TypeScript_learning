//Union types (T|U) a variable can hold multiple types
let value: string|number;
value="hello";
value=100;
// value="Garuav";
console.log(value)

//Intersection Types (T&U)  combines multiple types.

type Employee={name:string};
type Manager={department: string};
type TeamLead= Employee & Manager;
let lead: TeamLead={name:"Gaurav",department:"Computer"}
console.log(lead);

//type Alias Define custom Types
type Id=string|number;
let UerId:Id="userId123";
console.log(UerId)

//Function Type the type of a function
let add:(x:number, y:number)=>number;
add=(x,y)=>x+y;
console.log(add(2,5));
// const add =(x:number , y:number):number =>{
//     return x+y;
// }
