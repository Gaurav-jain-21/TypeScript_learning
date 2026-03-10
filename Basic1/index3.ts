//Regular func
function addone(num: number) {
  return num + 1;
}
console.log(addone(3));

//Arrow Function Annotations
const double = (x: number, y: number) => x * y;
const res1 = double(2, 10);
console.log(res1);
//Default Params Values
const greet = (person: string = "Anonymous") => {
  return `Hello ${person}`;
};
const res = greet();
console.log(res);
//Regular Function
function double1(x: number): number {
  return x * x;
}
const res2 = double1(2);
console.log(res2);
//Using Arrow Functions
const result = (x: number): number => {
  return x * x;
};
console.log(result(3));
