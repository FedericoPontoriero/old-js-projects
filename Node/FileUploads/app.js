const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const methodOverride = require("method-override");

mongoose.connect("mongodb://localhost:27017/images", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

let imageSchema = new mongoose.Schema({
	imgUrl: String,
});

let Picture = mongoose.model("Picture", imageSchema);

app.set("views", path.join(__dirname, "views"));
app.use("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get("/upload", (req, res) => {
	res.render("upload");
});

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(3000, () => {
	console.log("Server started at port 3000");
});
