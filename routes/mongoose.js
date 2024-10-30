const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const donorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    contact: String
});

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role : String
});


const User = mongoose.model('User ', userSchema);
const Donor = mongoose.model('Donor', donorSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = { User, Donor, Admin};
