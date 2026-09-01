function greet(person: string): string {
  return `Hello world ${person}`;
}

console.log(greet("hitller"));

const double1 = (num1: number, num2: number): number => {
  return num1 + num2;
};
const result = double1(3, 6);
console.log(result);
