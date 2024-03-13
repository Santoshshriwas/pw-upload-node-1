const fs = require("fs");

const newData =
  "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks.";

fs.appendFileSync("nodejs_architecture.txt", newData);

const data = fs.readFileSync("nodejs_architecture.txt");

console.log(data.toString());
