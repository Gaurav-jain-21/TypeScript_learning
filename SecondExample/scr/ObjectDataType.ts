var userData: { name: string; age: number; company: string } = {
  name: "Garuav",
  age: 22,
  company: "RK",
};
userData.name = "Ram";
console.log(userData);

var newUser: {
  [key: string]: string | number;
} = {
  name: "Ram",
  city: "kolkata",
  company: "ELC",
  num: 97845411,
};
newUser.email = "gjain7764";
console.log(newUser);
