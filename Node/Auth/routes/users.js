const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/userModel');

//Checks if user is authenticated
function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next;
	}
	req.flash('error_msg', 'Please Login first to access this page');
	res.redirect('/login');
}

//Get routes
router.get('/', (req, res) => {
	res.render('login');
});

router.get('/signup', (req, res) => {
	res.render('signUp');
});

router.get('/dashboard', isAuthenticated, (req, res) => {
	res.render('dashboard');
});

router.get('/logout', (req, res) => {
	req.logOut();
	req.flash('success_msg', 'You have been logged out');
	res.redirect('/login');
});

//Post routes

router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/login',
		failureFlash: 'Invalid email or password. Try again!',
	})
);

router.post('/signUp', (req, res) => {
	let { name, email, password } = req.body;

	let userData = {
		name: name,
		email: email,
	};

	User.register(userData, password, (error, user) => {
		if (error) {
			req.flash('error_msg', 'ERROR: ' + error);
			res.redirect('/signUp');
		}
		passport.authenticate('local')(req, res, () => {
			req.flash('success_msg', 'Account created successfully');
			res.redirect('/login');
		});
	});
});

module.exports = router;
