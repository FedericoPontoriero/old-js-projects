const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/userModel');

//Get routes
router.get('/', (req, res) => {
	res.render('login');
});

router.get('/signup', (req, res) => {
	res.render('signUp');
});

router.get('/dashboard', (req, res) => {
	res.render('dashboard');
});

//Post routes

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
