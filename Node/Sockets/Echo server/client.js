const { Socket } = require("net");

const socket = new Socket();

socket.connect({ host: "localhost", port: 8000 });
socket.setEncoding("utf-8");
socket.write("Hello World");
socket.on("data", (data) => {
	console.log(data);
});
