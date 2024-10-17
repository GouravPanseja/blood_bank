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

// const donorInfoSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     gender: String,
//     contact: String,
//     age: Number,
//     dateOfBirth: Date,
//     idProof: String,
//     address: String,
//     city: String,
//     district: String,
//     state: String,
//     pincode: String,
//     bloodGroup: String,
//     donationHistory: String,
//     medicalHistory: String,
//     surgeryHistory: String,
//     diseases: String,
// })
const User = mongoose.model('User ', userSchema);
const Donor = mongoose.model('Donor', donorSchema);
const Admin = mongoose.model('Admin', adminSchema);
// const donorInfo  = mongoose.model('donorInfo', donorInfoSchema); 

module.exports = { User, Donor, Admin};
