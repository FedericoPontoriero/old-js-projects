const fs = require("fs");
const path = require("path");
// Create folder 'test'
fs.mkdir(path.join(__dirname, "/test")),
	{}, // for options
	(err) => {
		if (err) throw err;
		console.log("Folder created...");
	};

// Create and write to file
fs.writeFile(
	// It overwrites if the file already exists fs.appendFile to add
	path.join(__dirname, "/test", "hello.txt"),
	"Hello World!",
	(err) => {
		if (err) throw err;
		console.log("File written to...");
	}
);
// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
});
// Rename file from hello.txt to helloworld.txt

fs.rename(
	path.join(__dirname, "/test", "hello.txt"),
	path.join(__dirname, "/test", "helloworld.txt"),
	(err, data) => {
		if (err) throw err;
		console.log("File renamed...");
	}
);
