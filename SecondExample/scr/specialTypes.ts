//any data type can take any data type
var name: any = "Garuav jain";
console.log(name);
name = 20;
console.log(name);
//unknown  first check and then run
let input: unknown = "Hello";
if (typeof input === "string") {
  console.log(input);
} else {
  console.log("hello world");
}
//void used for function that do not return a value;
function logMessage(): void{
    console.log("this is my fucntion return nothing");
}
logMessage();
//Never used for function that never return (e.g. throwing errors of infinte loops).
// function throwError(): never{
//     throw new Error("something went wrong");
// }

// throwError();