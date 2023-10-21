function helloWorld() {
  console.log("Hello World!!");
}

// setTimeout(helloWorld, 60000);

let i = 10;

console.log(i);

const timer = setInterval(() => {
  i--;
  console.log(i);
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  helloWorld();
}, 10000);
