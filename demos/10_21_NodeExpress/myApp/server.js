const express = require("express");
const app = express();

//listen on a port
const server = app.listen(3000, listening);

function listening() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("The server is starting and listening at:" + host + ":" + port);
}

app.use(express.static("public"));
