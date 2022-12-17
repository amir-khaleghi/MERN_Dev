// async await
// consume/use promises

// Pending, Rejected, Fulfilled

// const value = 2;

// const promise = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 3);
//   if (random === value) {
//     resolve("Hello world");
//   } else {
//     reject("there was an error");
//   }
// });
// console.log(promise);

/* ------------------------ .then ----------------------- */

// promise.then((data) => console.log(data));
// pass another callback function in then and
// we can access the data.

/* ----------------------- .catch ----------------------- */

// promise.catch((data) => console.log(data));

/* ------------------- .then().catch() ------------------ */
// promise.then((data) => console.log(data)).catch((err) => console.log(err));

/* ------------------------------------------------------ */
/*                    Promises Example                    */
/* ------------------------------------------------------ */
// .first - after 1s first red
// .second - after 3s second blue ; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE!!!

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
    .then(() => addColor(3000, ".second", "blue"))
    .then(() => addColor(2000, ".third", "green"))
    .catch((err) => {
      console.log(err);
    });
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(); // still pending // we should always resolve the promise or reject it
      }, time);
    } else {
      reject(`there is no such element: "${selector}" `);
    }
  });
}

// btn.addEventListener("click", () => {
//   addColor(1000, ".first", "red", "hello world")
//     .then((data) => addColor(3000, ".second", "blue", data))
//     .then((data) => {
//       console.log(data);
//       addColor(2000, ".third", "green");
//     })
//     .catch((err) => console.log(err));
// });

// function addColor(time, selector, color, data) {
//   const element = document.querySelector(selector);
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve(data); // still pending // we should always resolve the promise or reject it
//       }, time);
//     } else {
//       reject(`there is no such element: "${selector}" `);
//     }
//   });
//   console.log("add color");
// }
