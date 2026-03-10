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
2