//Regular func
function addone(num: number){
    return num+1;

}
console.log(addone(3));

//Arrow Function Annotations
const double = (x: number, y: number)=>x*y;
const res= double(2,10);
console.log(res);
