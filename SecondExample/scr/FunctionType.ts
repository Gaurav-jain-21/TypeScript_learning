function fruits(): string {
  return "Apple";
}
console.log(fruits());
function simple(name: string): boolean | number {
  if (name === "Gaurav") {
    console.log(name);
    return true;
  } else {
    return false;
  }
  // return true;
}
console.log(simple("abhisake"));
