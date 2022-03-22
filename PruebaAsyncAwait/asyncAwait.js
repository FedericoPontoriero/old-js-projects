// Mismo código que los otros archivos pero con async await y de un modo mucho más legible
async function requestHandler(req, res) {
	// Ver Rest Api
	try {
		const user = await User.findById(req.userId);
		const tasks = await Tasks.findById(user.tasksId);
		tasks.completed = true;
		await tasks.save();
		res.send("Task Completed");
	} catch (e) {
		res.send(e);
	}
}
// utilizar async await en la medida de lo posible
