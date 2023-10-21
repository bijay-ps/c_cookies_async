let condition = true;

// const promiseVal = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Yeah!! condition fullfilled.");
//   } else {
//     reject("😔");
//   }
// });

// console.log(promiseVal);

const promiseVal = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Yeah!! condition fullfilled.");
  } else {
    reject("😔");
  }
});

promiseVal
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally Block");
  });
