// Sin express
// const http = require('http');
// const colors = require('colors');

// const handleServer = (req, res) => {
//   res.writeHead(200, { 'Content-type': 'text/html'});
//   res.write('<h1>Hola Mundo</h1>');
//   res.end();
// };

// const server = http.createServer(handleServer);

// server.listen(3000, () => {
//   console.log('server on port 3000'.yellow);
// });

// Con express
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const server = express();

// function logger(req, res, next) {
//   console.log(`Route: ${req.protocol}://${req.get('host')} ${req.originalUrl}`);
//   next();
// } Sin morgan

// Settings
server.set("appName", "Express tutorial");
server.set("port", 3000);
server.set("view engine", "ejs");

// Middlewares
server.use(express.json);
server.use(morgan("dev"));

// Routes
server.all("/user", (req, res, next) => {
	res.send("finished");
	next();
});

server.get("/", (req, res) => {
	const data = [
		{ name: "Alberto" },
		{ name: "Roberto" },
		{ name: "Adalberto" },
	];
	res.render("index.ejs", { personas: data });
});

server.get("/user", function (req, res) {
	res.json({
		name: "Miguel",
		lastName: "Hernandez",
	});
	res.end;
});

server.post("/user/:id", function (req, res) {
	console.log(req.body);
	console.log(req.params);
	res.send("received");
	res.end;
});

server.put("/user/:id", function (req, res) {
	console.log(req.body);
	res.send(`User ${req.params.id} updated`);
	res.end;
});

server.delete("/user/:id", function (req, res) {
	res.send(`User ${req.params.id} deleted`);
	res.end;
});

server.use(express.static("public"));
server.listen(3000, () => {
	console.log(app.get("appName"));
	console.log(`Server on port ${server.get("port")}`.red);
});
// Ver Rest Api
