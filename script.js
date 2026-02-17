// let hof = (a) => {
//   return () => {
//     return () => {
//       return 800
//     };
//   };
// };

// console.log(hof()()());

// let a = hof();
// let b = a();
// b();

// closure--

// {
//   let a = 50;
//   {
//     {
//       {
//         {
//           console.log(a);
//         }
//       }
//     }
//   }
// }

// let closure = () => {
//   let a = 40;
//   return () => {
//     console.log(a);
//   };
// };

// closure()();

// -----------------------day 3--------------------

// function

// let a = () => {
//   return () => {
//     return "inner fn";
//   };
// };

// Spread  and rest operators

// rest operator---
// let abcd = (a, ...chacha) => {
//   console.log(a, chacha);
// };

// abcd(40, 50, 60, 70, 90);

// spread----

// primitives----
// rest

// reference---
// Objects, arrays, function

// let a = { name: "rahul", age: 80, email: "rahul@gmail.com" };
// let b = { ...a };
// b.name = "anshu";
// b.address = "saket nagar";
// b.movie = "dhurandar";

// console.log(b);

// let arr = [4, 6, 7, 8, 9];
// let arr2 = ["hello", "hey", "bhgjaa", "bye"];

// let sum = [...arr, ...arr2];
// console.log(sum);

// pure and impure function
// Destructuring..

// let danesh = {
//   name: "Danesh",
//   age: 21,
//   suranme: "Verma",
//   company: "Sheryians",
//   splID: "spl40",
//   mobile: 7654343221,
//   email: "danesh@gmail.com",
// };

// // destructuring...

// let { mobile, suranme, email } = danesh;
// console.log(mobile, suranme, email);

// let arr = [10, 40];

// let [score, count] = arr;

// console.log(score, count);

// --------------------------------------------

// pure and impure function----

// let fn = () => {
//   let a = 7;
//   a++;
//   return a;
// };

// let b = 7;

// let fn2 = () => {
//   b++;
//   return b;
// };

// console.log(fn2());

// console.log(fn());

// event loop--------

// -----------

// console.log("hello");

// setTimeout(() => {
//   console.log("i m in timeout");
// }, 0);

// console.log("bye");

// setTimeout(() => {
//   console.log("i m in timeout 2");
// }, 0);

// console.log("herorooooo...");

// promises;

// methods---

// foreach
// map
// filter
// reduce
// some
// every

// for of
// for in

// ----------------------Promises----------------------

let promVal = new Promise((res, rej) => {
  let partyOnMonday = true;
  if (partyOnMonday) {
    return res({ hotel: "Taj hotel" });
  }
  return rej("Bhaiya ka man nahi hai");
});

// promise handlers-----

// before es6---

console.log("hello");

setTimeout(() => {
  console.log("timeout 1");
}, 0);
setTimeout(() => {
  console.log("timeout 2");
}, 0);
setTimeout(() => {
  console.log("timeout 3");
}, 0);

promVal
  .then((val) => {
    console.log("me value hu->", val);
  })
  .catch((err) => console.log("me error hu->", err));

console.log("byee");

// .then()
// .catch()

// from es6---

// async await
