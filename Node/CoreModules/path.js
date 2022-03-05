//import path from 'path';
const path = require("path");
console.log(__dirname); // Directory name
console.log(path.basename(__dirname)); // Just the name of the path
console.log(__filename); // File name (entire path)
console.log(path.basename(__filename)); // Just the name of the file
console.log(path.extname(__filename)); // Extension name
console.log(path.parse(__filename)); // It converts it to an object
console.log(path.join(__dirname, "test", "hello.html")); // To concatenate paths
