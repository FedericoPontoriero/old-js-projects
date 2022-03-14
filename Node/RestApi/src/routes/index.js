const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
	const data = {
		name: "Federico",
		age: 27,
	};
	res.json(data);
});

module.exports = router;
