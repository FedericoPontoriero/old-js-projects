//Module importation
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

//Requiring user route
const userRoute = require('./routes/users');

//Requiring User model
const User = require('./models/userModel');

//Config
dotenv.config({ path: './config.env' });

//Database connection
mongoose.connect(process.env.DATABASE_LOCAL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

//Middleware for session
app.use(
	session({
		secret: 'Just a simple login/signup app',
		resave: true,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(
	new localStrategy({ usernameField: 'email' }, User.authenticate())
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Middleware for flash
app.use(flash());

//setting middleware globally
app.use((req, res) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(userRoute);

app.listen(process.env.PORT, () => {
	console.log('Server started');
});
