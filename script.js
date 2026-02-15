// let hof = (a) => {
//   return () => {
//     return () => {
//       return 800
//     };
//   };
// };

// console.log(hof()()());

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

// let { company, email, mobile } = danesh;

let arr = [10, 40];

let [score, count] = arr;

console.log(score, count);
