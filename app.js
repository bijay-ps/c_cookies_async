import axios from "axios";

let users = fetch("https://jsonplaceholder.typicode.com/users");

users.then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});
