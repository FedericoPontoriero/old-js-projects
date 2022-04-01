const express = require("express");
const app = express();

const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const employeeRoutes = require("./routes/employee");

dotenv.config({ path: "./config.env" });

// Connecting to db
mongoose.connect(process.env.DATABASE_LOCAL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(employeeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {});
