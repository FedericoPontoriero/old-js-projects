//Module importation
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const methodOverride = require("method-override");
const fs = require("fs");

//DB connection
mongoose.connect("mongodb://localhost:27017/images", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

//Mongo schema
let imageSchema = new mongoose.Schema({
	imgUrl: String,
});

let Picture = mongoose.model("Picture", imageSchema);

//Middlewares
app.set("views", path.join(__dirname, "views"));
app.use("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Get routes
app.get("/upload", (req, res) => {
	res.render("upload");
});

app.get("/", (req, res) => {
	Picture.find({}).then((images) => {
		res.render("index", { images: images });
	});
});
ˆ;
//Multer storage
let storage = multer.diskStorage({
	destination: "./public/uploads/images",
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

let upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		checkFileType(file, cb);
	},
});

//Validation for file type
function checkFileType(file, cb) {
	const fileTypes = /jpeg|jpg|png|gif/;
	const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

	if (extName) {
		return cb(null, true);
	} else {
		cb("Error: images only");
	}
}

//Post routes
app.post("/uploadsingle", upload.single("singleImage"), (req, res, next) => {
	const file = req.file;
	if (!file) {
		return console.log("Please select an image");
	}
	let url = file.path.replace("public", "");

	Picture.findOne({ imgUrl: url })
		.then((img) => {
			if (img) {
				console.log("Duplicate image");
				return res.redirect("/upload");
			}
			Picture.create({ imgUrl: url }).then((img) => {
				console.log("Image saved to DB");
				res.redirect("/");
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

app.post(
	"/uploadmultiple",
	upload.array("multipleImages"),
	(req, res, next) => {
		const files = req.files;
		if (!files) {
			return console.log("Please select images");
		}
		files.forEach((file) => {
			let url = file.path.replace("public", "");
			Picture.find({ imgUrl: url })
				.then(async (img) => {
					if (img) {
						return console.log("Duplicate image");
					}
					await Picture.create({ imgUrl: url });
				})
				.catch((err) => {
					return console.log(error);
				});
		});
		res.redirect("/");
	}
);

//Delete route
app.delete("/delete/:id", (req, res) => {
	let searchQuery = { _id: req.params.id };

	Picture.findOne(searchQuery)
		.then((img) => {
			fs.unlink(__dirname + "/public/" + img.imgUrl, (err) => {
				if (err) return console.log(error);
				Picture.deleteOne(searchQuery).then((img) => {
					res.redirect("/");
				});
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

//Server
app.listen(3000, () => {
	console.log("Server started at port 3000");
});
