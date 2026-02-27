// // let hof = (a) => {
// //   return () => {
// //     return () => {
// //       return 800
// //     };
// //   };
// // };

// // console.log(hof()()());

// // let a = hof();
// // let b = a();
// // b();

// // closure--

// // {
// //   let a = 50;
// //   {
// //     {
// //       {
// //         {
// //           console.log(a);
// //         }
// //       }
// //     }
// //   }
// // }

// // let closure = () => {
// //   let a = 40;
// //   return () => {
// //     console.log(a);
// //   };
// // };

// // closure()();

// // -----------------------day 3--------------------

// // function

// // let a = () => {
// //   return () => {
// //     return "inner fn";
// //   };
// // };

// // Spread  and rest operators

// // rest operator---
// // let abcd = (a, ...chacha) => {
// //   console.log(a, chacha);
// // };

// // abcd(40, 50, 60, 70, 90);

// // spread----

// // primitives----
// // rest

// // reference---
// // Objects, arrays, function

// // let a = { name: "rahul", age: 80, email: "rahul@gmail.com" };
// // let b = { ...a };
// // b.name = "anshu";
// // b.address = "saket nagar";
// // b.movie = "dhurandar";

// // console.log(b);

// // let arr = [4, 6, 7, 8, 9];
// // let arr2 = ["hello", "hey", "bhgjaa", "bye"];

// // let sum = [...arr, ...arr2];
// // console.log(sum);

// // pure and impure function
// // Destructuring..

// // let danesh = {
// //   name: "Danesh",
// //   age: 21,
// //   suranme: "Verma",
// //   company: "Sheryians",
// //   splID: "spl40",
// //   mobile: 7654343221,
// //   email: "danesh@gmail.com",
// // };

// // // destructuring...

// // let { mobile, suranme, email } = danesh;
// // console.log(mobile, suranme, email);

// // let arr = [10, 40];

// // let [score, count] = arr;

// // console.log(score, count);

// // --------------------------------------------

// // pure and impure function----

// // let fn = () => {
// //   let a = 7;
// //   a++;
// //   return a;
// // };

// // let b = 7;

// // let fn2 = () => {
// //   b++;
// //   return b;
// // };

// // console.log(fn2());

// // console.log(fn());

// // event loop--------

// // -----------

// // console.log("hello");

// // setTimeout(() => {
// //   console.log("i m in timeout");
// // }, 0);

// // console.log("bye");

// // setTimeout(() => {
// //   console.log("i m in timeout 2");
// // }, 0);

// // console.log("herorooooo...");

// // promises;

// // methods---

// // foreach
// // map
// // filter
// // reduce
// // some
// // every

// // for of
// // for in

// // ----------------------Promises----------------------

// // let promVal = new Promise((res, rej) => {
// //   let partyOnMonday = true;
// //   if (partyOnMonday) {
// //     return res({ hotel: "Taj hotel" });
// //   }
// //   return rej("Bhaiya ka man nahi hai");
// // });

// // // promise handlers-----

// // // before es6---

// // console.log("hello");

// // setTimeout(() => {
// //   console.log("timeout 1");
// // }, 0);
// // setTimeout(() => {
// //   console.log("timeout 2");
// // }, 0);
// // setTimeout(() => {
// //   console.log("timeout 3");
// // }, 0);

// // promVal
// //   .then((val) => {
// //     console.log("me value hu->", val);
// //   })
// //   .catch((err) => console.log("me error hu->", err));

// // console.log("byee");

// // .then()
// // .catch()

// // from es6---

// // async await

// // ----------------------------------

// // let prom = new Promise((res, rej) => {
// //   return res("ok");
// // });

// // console.log(prom);

// // fetch---

// // fetch -> jo tumhe server se connect krta hai

// // jab bhi ham fetch use krte hai to hame 2 then use krne padte hai
// // or pehle then me hame .json() use krna padta hai...

// // let response = fetch("https://fakestoreapi.com/products");

// // response
// //   .then((val) => val.json())
// //   .then((val) => console.log(val))
// //   .catch((err) => console.log(err));

// // -----------------------------------------------

// // array methods --

// // foreach

// // map
// // filter
// // reduce
// // some
// // every

// // for in
// // for off

// // foreach kuch bhi return nahi krta
// // map hamesha array return krega

// // let save = arr.map((elem) => {
// //   return elem
// // });

// // reduce---

// // -------------

// // let save = arr.reduce((sum, c) => (sum += c), 0);

// // console.log(save);

// // --------------------------

// // filter---

// // let arr = [
// //   "apple",
// //   "mango",
// //   "banana",
// //   "blue berry",
// //   "chiku",
// //   "cherry",
// //   "strawberry",
// //   "avocado",
// // ];

// // let filterFruits = (search) => {
// //   return arr.filter((val) => val.startsWith(search));
// // };

// // console.log(filterFruits("b"));

// // foreach -> return nahi krta hu
// // map -> return bhi karta hu or traverse bhi or agr condition tabbi me
// // pura array dunga bs boolean me

// // reduce -> calculations and all k liye retun  krega single value
// // filter-> filter krunga according to need or new array dunga changes krke

// // ------data getting-----

// // let arr = [
// //   {
// //     employeeId: "EMP001",
// //     personalInfo: {
// //       name: {
// //         firstName: "Rahul",
// //         lastName: "Sharma",
// //       },
// //       contact: {
// //         email: "rahul.sharma@company.com",
// //         phone: {
// //           countryCode: "+91",
// //           number: "9876543210",
// //         },
// //       },
// //     },
// //     company: {
// //       name: "TechNova Pvt Ltd",
// //       location: {
// //         country: "India",
// //         state: "Madhya Pradesh",
// //         city: "Bhopal",
// //       },
// //       department: {
// //         name: "Engineering",
// //         team: {
// //           teamName: "Frontend Team",
// //           teamLead: {
// //             id: "EMP010",
// //             name: "Ankit Verma",
// //           },
// //           projects: [
// //             {
// //               projectId: "PROJ101",
// //               projectName: "E-Commerce App",
// //               tasks: [
// //                 {
// //                   taskId: "TASK001",
// //                   title: "Product Listing UI",
// //                   status: "In Progress",
// //                   logs: {
// //                     daily: {
// //                       day: "Monday",
// //                       hours: {
// //                         frontend: {
// //                           html: 2,
// //                           css: 3,
// //                           js: {
// //                             logic: 2,
// //                             debugging: {
// //                               timeSpent: "1 hour",
// //                               issuesFixed: 3,
// //                             },
// //                           },
// //                         },
// //                       },
// //                     },
// //                   },
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       },
// //     },
// //   },

// //   {
// //     employeeId: "EMP002",
// //     personalInfo: {
// //       name: {
// //         firstName: "Priya",
// //         lastName: "Mehta",
// //       },
// //       contact: {
// //         email: "priya.mehta@company.com",
// //         phone: {
// //           countryCode: "+91",
// //           number: "9123456780",
// //         },
// //       },
// //     },
// //     company: {
// //       name: "TechNova Pvt Ltd",
// //       location: {
// //         country: "India",
// //         state: "Maharashtra",
// //         city: "Pune",
// //       },
// //       department: {
// //         name: "Engineering",
// //         team: {
// //           teamName: "Backend Team",
// //           teamLead: {
// //             id: "EMP011",
// //             name: "Rohit Kulkarni",
// //           },
// //           projects: [
// //             {
// //               projectId: "PROJ102",
// //               projectName: "Payment Gateway",
// //               tasks: [
// //                 {
// //                   taskId: "TASK002",
// //                   title: "Stripe Integration",
// //                   status: "Completed",
// //                   logs: {
// //                     weekly: {
// //                       week: "Week 2",
// //                       performance: {
// //                         api: {
// //                           successRate: "99%",
// //                           errors: {
// //                             timeout: 1,
// //                             auth: {
// //                               invalidToken: 2,
// //                               expiredToken: {
// //                                 count: 1,
// //                                 resolved: true,
// //                               },
// //                             },
// //                           },
// //                         },
// //                       },
// //                     },
// //                   },
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       },
// //     },
// //   },

// //   {
// //     employeeId: "EMP003",
// //     personalInfo: {
// //       name: {
// //         firstName: "Aman",
// //         lastName: "Khan",
// //       },
// //     },
// //     company: {
// //       department: {
// //         team: {
// //           projects: [
// //             {
// //               tasks: [
// //                 {
// //                   logs: {
// //                     system: {
// //                       access: {
// //                         permissions: {
// //                           read: true,
// //                           write: false,
// //                           advanced: {
// //                             admin: {
// //                               allowed: false,
// //                               reason: "Role Restriction",
// //                             },
// //                           },
// //                         },
// //                       },
// //                     },
// //                   },
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       },
// //     },
// //   },

// //   {
// //     employeeId: "EMP004",
// //     company: {
// //       department: {
// //         team: {
// //           projects: [
// //             {
// //               tasks: [
// //                 {
// //                   logs: {
// //                     meta: {
// //                       createdBy: {
// //                         system: {
// //                           environment: {
// //                             prod: {
// //                               server: {
// //                                 region: "Asia",
// //                                 zone: "ap-south-1a",
// //                               },
// //                             },
// //                           },
// //                         },
// //                       },
// //                     },
// //                   },
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       },
// //     },
// //   },

// //   {
// //     employeeId: "EMP005",
// //     company: {
// //       department: {
// //         team: {
// //           projects: [
// //             {
// //               tasks: [
// //                 {
// //                   logs: {
// //                     tracking: {
// //                       time: {
// //                         day: {
// //                           hours: {
// //                             coding: {
// //                               feature: {
// //                                 name: "Dashboard",
// //                                 complexity: {
// //                                   level: "High",
// //                                   reason: {
// //                                     ui: "Dynamic Charts",
// //                                     data: {
// //                                       source: "API",
// //                                       format: "JSON",
// //                                     },
// //                                   },
// //                                 },
// //                               },
// //                             },
// //                           },
// //                         },
// //                       },
// //                     },
// //                   },
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       },
// //     },
// //   },
// // ];

// // let api = fetch("https://fakestoreapi.com/product");

// // promise hanlder

// // api
// //   .then((val) => val.json())
// //   .then((elem) => console.log(elem))
// //   .catch((err) => console.log(err));

// // async await

// // let resolver = async () => {
// //   try {
// //     let res = (await api).json();
// //     let fin = await res;
// //     console.log(fin);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // resolver();

// // filter
// // // promises - async await
// // reduce
// // map

// let arr = [
//   {
//     name: "Rahul",
//     age: 80,
//   },
//   {
//     name: "Naman",
//     age: 82,
//   },
//   {
//     name: "Manish",
//     age: 83,
//   },
//   {
//     name: "Rishi",
//     age: 81,
//   },
// ];

// // destructuring

// let obj = { name: "piyush", age: 90 };

// // 1. return karega
// // 2. return array hoga same length ka
// // 3. age return me condition di to hamesha boolean with array

// // let res = arr.map(({ name, age }) => {
// //   return name == "Rahul";
// // });

// // console.log(res);

// let main = document.querySelector("main");
// console.log(arr);

// arr.forEach((elem, index) => {
//   main.innerHTML += `<p id="${index}">${elem.name}</p>`;
// });

// main.addEventListener("click", (dets) => {
//   deleteName(dets.target.id);
// });

// let deleteName = (id) => {
//   let newArr = arr.filter((elem, index) => {
//     return index != id;
//   });
//   console.log(newArr);
// };

let prom = new Promise((res, rej) => {
  let flag = true;

  if (flag) {
    return res("ok");
  }
  return rej("not ook");
});

let prom2 = new Promise((res, rej) => {
  let flag = true;

  setTimeout(() => {
    if (flag) {
      return res("ok 2");
    }
    return rej("not ook 2");
  }, 3000);
});

// prom
//   .then((val) => {
//     console.log("hello");
//     prom2.then((elem) => console.log(elem));
//     console.log("byee");

//     console.log(val);
//   })
//   .catch((err) => console.log(err));

// let resolve = async () => {
//   try {
//     console.log("hello");
//     let result = await prom;
//     console.log(result);
//     console.log("bye");
//   } catch (error) {
//     console.log(error);
//   }
// };
// resolve();


