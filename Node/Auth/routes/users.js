const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/userModel');
const crypto = require('crypto');
const async = require('async');
const nodemailer = require('nodemailer');
const { route } = require('express/lib/application');

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

router.get('/logout', isAuthenticated, (req, res) => {
	req.logOut();
	req.flash('success_msg', 'You have been logged out');
	res.redirect('/login');
});

router.get('/forgot', (req, res) => {
	res.render('forgot');
});

router.get('/reset/:token', (req, res) => {
	User.findOne({
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now() }
			.then(user => {
				if (!user) {
					req.flash('error_msg', 'Password reset token is invalid');
					res.redirect('/forgot');
				}
				res.render('newPassword', { token: req.params.token });
			})
			.catch(err => {
				req.flash('error_msg', 'ERROR: ' + err);
				res.redirect('/forgot');
			}),
	});
});

route.get('/password/change', isAuthenticated, (req, res) => {
	res.render('changePassword');
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

router.post('/password/change', (req, res) => {
	if (req.body.passsword !== req.body.confirmpassword) {
		req.flash('error_msg', 'Passwords must coincide. Try again.');
		res.redirect('/password/change');
	}
	User.findOne({ email: req.user.email })
		.then(user => {
			user.setPassword(req.body.password, err => {
				user
					.save()
					.then(user => {
						req.flash('error_msg', 'Password changed successfully');
						res.redirect('/dashboard');
					})
					.catch(err => {
						req.flash('error_msg', 'ERROR: ' + err);
						res.redirect('/password/change');
					});
			});
		})
		.catch(err => {
			req.flash('error_msg', 'ERROR: ' + err);
			res.redirect('/password/change');
		});
});

//Routes to handle forgot password

router.post('/forgot', (req, res, next) => {
	let recoveryPassword = '';
	async.waterfall(
		[
			done => {
				crypto.randomBytes(20, (err, buff) => {
					let token = buff.toString('hex');
					done(err, token);
				});
			},
			(token, done) => {
				User.findOne({ email: req.body.email })
					.then(user => {
						if (!user) {
							req.flash(
								'error_msg',
								'User does not exist with this email address'
							);
							res.redirect('/forgot');
						}
						user.resetPasswordToken = token;
						user.resetPasswordExpires = Date.now() + 1800000; // 1 / 2 hour
						user.save(err => {
							done(err, token, user);
						});
					})
					.catch(err => {
						req.flash('error_msg', 'ERROR: ' + err);
						res.redirect('/forgot');
					});
			},
			(token, user) => {
				let smptTransport = nodemailer.createTransport({
					service: 'Gmail',
					auth: {
						user: process.env.GMAIL_EMAIL,
						pass: process.env.GMAIL_PASSWORD,
					},
				});
				let mailOptions = {
					to: user.email,
					from: 'Fede fedeponto@gmail.com',
					subject: 'Recovery email from Auth project',
					text:
						'Please click the following link to create a new password: \n\n' +
						'http://' +
						req.headers.host +
						'/reset/' +
						token +
						'\n\n' +
						'If you did not request this, please ignore this email.',
				};
				smptTransport.sendMail(mailOptions, err => {
					req.flash(
						'success_msg',
						'Email send with further instructions. Please check your inbox'
					);
					res.redirect('/forgot');
				});
			},
		],
		err => {
			if (err) {
				res.redirect('/forgot');
			}
		}
	);
});

router.post('/reset/:token', (req, res) => {
	async.waterfall(
		[
			done => {
				User.findOne({
					resetPasswordToken: req.params.token,
					resetPasswordExpires: { $gt: Date.now() },
				})
					.then(user => {
						if (!user) {
							req.flash('error_msg', 'Password reset token is invalid');
							res.redirect('/forgot');
						}
						if (req.body.password !== req.body.confirmpassword) {
							req.flash('error_msg', 'Passwords must be the same');
							return res.redirect('/forgot');
						}

						user.setPassword(req.body.password, err => {
							user.resetPasswordToken = undefined;
							user.resetPasswordExpires = undefined;
							user.save(err => {
								req.logIn(user, err => {
									done(err, user);
								});
							});
						});
					})
					.catch(err => {
						req.flash('error_msg', 'ERROR: ' + err);
						res.redirect('/forgot');
					});
			},
			user => {
				let smptTransport = nodemailer.createTransport({
					service: 'Gmail',
					auth: {
						user: process.env.GMAIL_EMAIL,
						pass: process.env.GMAIL_PASSWORD,
					},
				});

				let mailOptions = {
					to: user.email,
					from: 'Fede fedeponto@gmail.com',
					subject: 'Your password is changed',
					text: `Hello, ${user.name}. \n\n This is a confirmation that the password for your account: ${user.email} has been changed.`,
				};
				smptTransport.sendMail(mailOptions, err => {
					req.flash(
						'success_msg',
						'Your password has been changed successfully'
					);
					res.redirect('/login');
				});
			},
		],
		err => {
			res.redirect('/login');
		}
	);
});

module.exports = router;
