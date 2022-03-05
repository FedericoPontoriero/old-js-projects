const { taskOne, taskTwo } = require("./sequential.js");
async function main() {
	try {
		console.time("Measuring Time");
		const results = await Promise.all([taskOne(), taskTwo()]);
		console.timeEnd("Measuring Time");
		console.log(`taskOne returns ${results[0]}`);
		console.log(`taskTwo returns ${results[1]}`);
	} catch (e) {
		console.log(e);
	}
}
main();
