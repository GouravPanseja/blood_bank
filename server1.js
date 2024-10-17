const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (CSS, JS, HTML)

// Import models from mongoose.js
const { User, Donor, Admin } = require('./routes/mongoose');

app.post('/register', async (req, res) => {
    const { name, email, password, role, gender, contact } = req.body;

    try {
        // Check if the email is already registered in the corresponding collection based on role
        let existingUser;
        if (role === 'user') {
            existingUser = await User.findOne({ email });
        } else if (role === 'donor') {
            existingUser = await Donor.findOne({ email });
        } else if (role === 'admin') {
            existingUser = await Admin.findOne({ email });
        }

        if (existingUser) {
            return res.send('<h1>Email is already registered!</h1>');
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Handle saving based on the role
        if (role === 'user') {
            // Save general User data to the User collection
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });
            await newUser.save();
            res.send('<h1>User registration successful!</h1>');
        } else if (role === 'donor') {
            // Save Donor data to the Donor collection
            const newDonor = new Donor({
                name,
                email,
                password: hashedPassword,
                gender,
                contact
            });
            await newDonor.save();
            res.send('<h1>Donor registration successful!</h1>');
        } else if (role === 'admin') {
            // Save Admin data to the Admin collection
            const newAdmin = new Admin({
                name,
                email,
                password: hashedPassword
            });
            await newAdmin.save();
            res.send('<h1>Admin registration successful!</h1>');
        }
    } catch (error) {
        res.send(`<h1>Error: ${error.message}</h1>`);
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user;

        if (role === 'user') {
            // Find general User by email
            user = await User.findOne({ email });
        } else if (role === 'donor') {
            // Find Donor by email
            user = await Donor.findOne({ email });
        } else if (role === 'admin') {
            // Find Admin by email
            user = await Admin.findOne({ email });
        }

        if (!user) {
            return res.send('<h1>User not found or incorrect role!</h1>');
        }

        // Compare hashed passwords
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.send(`<h1>Welcome, ${user.name}!</h1>`);
        } else {
            res.send('<h1>Incorrect password!</h1>');
        }
    } catch (error) {
        res.send(`<h1>Error: ${error.message}</h1>`);
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
