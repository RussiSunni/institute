/*------------------------------------------
--------------------------------------------
Middleware.
--------------------------------------------
--------------------------------------------*/
const express = require('express');
// Router.
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
// DB
const conn = require('../config/db');

/*------------------------------------------
--------------------------------------------
Routes
--------------------------------------------
--------------------------------------------*/
/*
 * When user clicks "forgot password" link.
 */
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    // Check if the email exists in your user database
    if (users[email]) {
        // Generate a reset token
        const token = crypto.randomBytes(20).toString('hex');
        // Store the token with the user's email in a database or in-memory store
        users[email].resetToken = token;
        // Send the reset token to the user's email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password'
            }
        });
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `Click the following link to reset your password: http://localhost:3000/reset-password/${token}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error sending email');
            } else {
                console.log(`Email sent: ${info.response}`);
                res.status(200).send(
                    'Check your email for instructions on resetting your password'
                );
            }
        });
    } else {
        res.status(404).send('Email not found');
    }
});

/*
 * When user clicks "reset password" link in email.
 * A form to create a new password.
 */
router.get('/reset-password/:token', (req, res) => {
    const { token } = req.params;
    // Check if the token exists and is still valid
    if (users.some((user) => user.resetToken === token)) {
        // Render a form for the user to enter a new password
        res.send(
            '<form method="post" action="/reset-password"><input type="password" name="password" required><input type="submit" value="Reset Password"></form>'
        );
    } else {
        res.status(404).send('Invalid or expired token');
    }
});

/*
 * When user submits the new password form.
 */
router.post('/reset-password', (req, res) => {
    const { token, password } = req.body;
    // Find the user with the given token and update their password
    const user = users.find((user) => user.resetToken === token);
    if (user) {
        user.password = password;
        delete user.resetToken; // Remove the reset token after the password is updated
        res.status(200).send('Password updated successfully');
    } else {
        res.status(404).send('Invalid or expired token');
    }
});

// Export the router for app to use.
module.exports = router;
