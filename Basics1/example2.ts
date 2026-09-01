let color: any = "crimsom";
color = 232;
// color();
// console.log(color);

function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);
