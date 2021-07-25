const { response } = require("express");
const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
//use express.static() to host static files
app.use(express.static("public"));

//and you can use routes to serve things back when the user requests
//the first parameter is the path localhost:3000/example, and the second is a callback function to handle the request and response
app.get("/example", (req, res) => {
  console.log(req);
  res.send("This is an example of a route at /example!");
});
