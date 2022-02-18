const fs = require("fs");
const path = require("path");
// Create folder 'test'
fs.mkdir(path.join(__dirname, "/test")),
	{}, // for options
	(err) => {
		if (err) throw err;
		console.log("Folder created...");
	};
