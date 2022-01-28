// const car = {type:"Fiat", model:"500", color:"white",arr:[1,2,3],add(x,y){
//   return x + y;
// }};
// console.log(car.add(3,4))
// console.log(Object.keys(car.type))

// const object1 = {
//   a: 'somestring',
//   b: 42
// };
//
// for (const [_,value] of Object.entries(object1)) {
//   console.log(`${value}`);
// }

//
const bills = [125, 555, 44];
const tips = [];
const totalBill = [];

bills.forEach(function (bill) {
  const result = bill >= 100 ? bill * 0.1 : bill * 0.2;
  tips.push(result);
  totalBill.push(result + bill);
});
console.log(tips);
//console
console.log(totalBill);


// var arr = [1, 2, 3, 4, 5];
//
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


const sum = bills.reduce(function (acc, arr) {
  return acc + arr;
}, 0);

console.log(sum);


const st = 'nawaz';
console.log(st.slice(-1))
console.log(st.split(""))


const rahul = [1, 2, 3, 4];
const value = [12, 15, 16, ...rahul];
console.log(value);

// padstart()
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(64637836));
