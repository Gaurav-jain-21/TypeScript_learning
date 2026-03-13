// Collection of same data type
// pre-Defined data type

let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Gaurav", "Vikash", "Rahul", "Ashif"];
console.log(numbers);
console.log(names);
var students: Array<string> =["Ram", "Sita"];
console.log(students);

students.push("Gaurav");// adding new name 
console.log(students);

var collegeName: ReadonlyArray<string>=["iit delhi", "rk university"];//it only give the access to read the data;
// collegeName.push("kiit");
let userName: Array<string>=["Garuav","ram"];
console.log(userName);
