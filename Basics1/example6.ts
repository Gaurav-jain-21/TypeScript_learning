const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Garuav",
  lastName: "jain",
  age: 22,
};
console.log(`Name: ${person.firstName}`);

function printUser(): {
  name: string;
  age: number;
  location: string;
} {
  return {
    name: "Gauraav",
    age: 20,
    location: "china",
  };
}
