// function task(message) {
//   let n = 10000000000;
//   while (n > 0) {
//     n--;
//   }
//   console.log(message);
// }

// console.log("Start script..."); // 1
// task("Called the TASK Function"); // 2
// console.log("task completed!!"); // 3

function task(message) {
  setTimeout(() => {
    let n = 10000000000;
    while (n > 0) {
      n--;
    }
    console.log(message);
  }, 3000); // 3 seconds
}

console.log("Start script..."); // 1
task("Called the TASK Function"); // 3
console.log("task completed!!"); // 2
