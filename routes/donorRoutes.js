const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const donorInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    contact: String,
    age: Number,
    dateOfBirth: Date,
    idProof: Buffer,
    address: String,
    city: String,
    district: String,
    state: String,
    pincode: String,
    bloodGroup: String,
    donationHistory: String,
    medicalHistory: String,
    surgeryHistory: String,
    disease: String,
    image : String, 
})

const donorInfo  = mongoose.model('donorInfo', donorInfoSchema); 
module.exports = {donorInfo}; 