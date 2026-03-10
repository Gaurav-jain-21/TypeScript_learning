let subs: number | string = "1M";
let apiRequestStatus: "pending" | "sucess" | "error" = "pending";
let airlineSeat: "aisle" | "window" | "middle" = "aisle";
const orders = [12, 20, 18, 42];
let currentorder: number | undefined;
for (let order of orders) {
  if (order === 18) {
    currentorder = order;
    break;
  }
}
console.log(currentorder);
