require("dotenv").config();
const server = require("./src/server.js");

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log("server in port: " + PORT);
});
