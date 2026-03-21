// Any:- it allows a variable to hold values of any type.
var value = "Anil";
console.log(typeof value);

var values: any = "Ram";
console.log(typeof values);
values = 435;
console.log(typeof values);
values = true;
console.log(typeof values);
values = ["anil", "ram", "kmy", "any"];
console.log(typeof values);
// Unknown Data type: the unknown type in TypeScript is similar to any, but it's safer because it forces type checking before performing operation on the value.
var value1: string | number = "anil";
value1 = 100;
console.log(value1);
