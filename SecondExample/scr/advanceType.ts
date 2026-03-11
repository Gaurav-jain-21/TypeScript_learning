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