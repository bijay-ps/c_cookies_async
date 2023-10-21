const app = require("express");
const axios = require("axios");

const server = app();

server.get("/users", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log(response.data);
    res.send(200);
  });
});

server.listen(3030, () => {
  console.log("Server running on PORT 3030");
});
