function displayTime() {
  let currentTime = new Date();
  //   console.log(currentTime);
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let timeString = `${hours}:${minutes}:${seconds}`;
  console.log(timeString);
}

// const timeInterval = setInterval(displayTime, 1000); // second param is in milliseconds. 1000 ms = 1 sec

// setTimeout(() => {
//   clearInterval(timeInterval);
// }, 10000);

function sendEmail(msg) {
  console.log(msg);
}

// sendEmail("Hello how are you? The boss is bugging me again!");

let recall = true;

const timer = setTimeout(() => {
  sendEmail("Hello how are you? The boss is bugging me again!");
}, 3000);

if (recall) {
  clearTimeout(timer);
}
