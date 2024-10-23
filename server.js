// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const path = require('path'); 
// const hbs = require("hbs"); 
// const app = express();

// app.use(express.json()); 

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public')); 
// const templatePath =  path.join(__dirname , "./templates/views");
// const PartialsPath =  path.join(__dirname , "./templates/partials");


// app.set("view engine", "hbs"); 
// app.set("views", templatePath); 
// hbs.registerPartials(PartialsPath);

// // Import models from mongoose.js
// const { User, Donor, Admin} = require('./routes/mongoose');
// const {donorInfo} = require("./routes/donorRoutes"); 

// app.post('/register', async (req, res) => {
//     const { name, email, password, role, gender, contact } = req.body;

//     try {
//         // Check if the email is already registered in the corresponding collection based on role
//         let existingUser ;
//         if (role === 'user') {
//             existingUser  = await User.findOne({ email });
//         } else if (role === 'donor') {
//             existingUser  = await Donor.findOne({ email });
//         } else if (role === 'admin') {
//             existingUser  = await Admin.findOne({ email });
//         }

//         if (existingUser ) {
//             return res.send('<h1>Email is already registered!</h1>');
//         }

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Handle saving based on the role
//         if (role === 'user') {
//             const newUser = new User({
//                 name,
//                 email,
//                 password: hashedPassword
//             });
//             await newUser.save();
//             res.render('userPage'); // Redirect to userPage

//         } else if (role === 'donor') {
//             const newDonor = new Donor({
//                 name,
//                 email,
//                 password: hashedPassword,
//                 gender,
//                 contact
//             });
//             await newDonor.save();
//             res.render('donorPage'); // Redirect to donorPage

//         } else if (role === 'admin') {
//             const newAdmin = new Admin({
//                 name,
//                 email,
//                 password: hashedPassword
//             });
//             await newAdmin.save();
//             res.render('adminPage'); // Redirect to adminPage
//         }
//     } catch (error) {
//         res.send(`<h1>Error: ${error.message}</h1>`);
//     }
// });

// // Login :-
// app.post('/login', async (req, res) => {
//     const { email, password, role } = req.body;

//     try {
//         let user;

//         if (role === 'user') {
//             user = await User.findOne({ email });
//         } else if (role === 'donor') {
//             user = await Donor.findOne({ email });
//         } else if (role === 'admin') {
//             user = await Admin.findOne({ email });
//         }

//         if (!user) {
//             return res.send('<h1>User not found</h1>');
//         }

//         // Compare hashed passwords
//         const match = await bcrypt.compare(password, user.password);
//         if (match) {
//             if (role === 'user') {
//                 res.render('UserPage'); // Redirect to userPage
//             } else if (role === 'donor') {
//                 res.render('DonorPage'); // Redirect to donorPage
//             } else if (role === 'admin') {
//                 res.render('AdminPage'); // Redirect to adminPage
//             }
//         } else {
//             res.send('<h1>Incorrect password!</h1>');
//         }
//     } catch (error) {
//         res.send(`<h1>Error: ${error.message}</h1>`);
//     }
// });
// app.post('/submitDonorInfo', async (req, res) => {
//     const { name, email, gender, contact, age, dateOfBirth, idProof, address, city, district, state, pincode, bloodGroup, donationHistory, medicalHistory, surgeryHistory, diseases } = req.body;

//     try {
//         const newDonorInfo = await donorInfo.create({
//             name,
//             email,
//             gender,
//             contact,
//             age,
//             dateOfBirth,
//             idProof,
//             address,
//             city,
//             district,
//             state,
//             pincode,
//             bloodGroup,
//             donationHistory,
//             medicalHistory,
//             surgeryHistory,
//             diseases
//         });

//         res.status(201).send({ message: 'Donor information submitted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: 'Error submitting donor information' });
//     }
// });

// app.get('/userPage', (req, res) => {
//     res.render('UserPage');
// });

// app.get('/donorPage', (req, res) => {
//     console.log("hi");
//     res.render('C:\Users\sneha\Desktop\prepare projects\Blood Donation MERN\templates\views\DonorPage.hbs');
// });

// app.get('/adminPage', (req, res) => {
//     res.sendFile('AdminPage');
// });

// // Start server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path'); 
const hbs = require("hbs"); 
const app = express();
const multer = require("multer"); 
// const upload = multer({dest : "uploads/"});

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
const templatePath =  path.join(__dirname , "./templates/views");
const PartialsPath =  path.join(__dirname , "./templates/partials");


app.set("view engine", "hbs"); 
app.set("views", templatePath); 
hbs.registerPartials(PartialsPath);

// Import models from mongoose.js
const { User, Donor, Admin} = require('./routes/mongoose');
const {donorInfo} = require("./routes/donorRoutes"); 

const storage = multer.diskStorage({
    destination : function (req, file , cb){
        return cb(null, "./uploads"); 
    },
    filename : function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
}); 

const upload = multer({ storage: storage });

app.post('/register', async (req, res) => {
    const { name, email, password, role, gender, contact } = req.body;

    try {
        // Check if the email is already registered in the corresponding collection based on role
        let existingUser ;
        if (role === 'user') {
            existingUser  = await User.findOne({ email });
        } else if (role === 'donor') {
            existingUser  = await Donor.findOne({ email });
        } else if (role === 'admin') {
            existingUser  = await Admin.findOne({ email });
        }

        if (existingUser ) {
            return res.send('<h1>Email is already registered!</h1>');
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Handle saving based on the role
        if (role === 'user') {
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });
            await newUser.save();
            res.render('userPage'); // Redirect to userPage

        } else if (role === 'donor') {
            const newDonor = new Donor({
                name,
                email,
                password: hashedPassword,
                gender,
                contact
            });
            await newDonor.save();
            res.render('donorPage'); // Redirect to donorPage

        } else if (role === 'admin') {
            const newAdmin = new Admin({
                name,
                email,
                password: hashedPassword
            });
            await newAdmin.save();
            res.render('adminPage'); // Redirect to adminPage
        }
    } catch (error) {
        res.send(`<h1>Error: ${error.message}</h1>`);
    }
});

// Login :-
app.post('/login', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user;

        if (role === 'user') {
            user = await User.findOne({ email });
        } else if (role === 'donor') {
            user = await Donor.findOne({ email });
        } else if (role === 'admin') {
            user = await Admin.findOne({ email });
        }

        if (!user) {
            return res.send('<h1>User not found</h1>');
        }

        // Compare hashed passwords
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            if (role === 'user') {
                res.render('UserPage'); // Redirect to userPage
            } else if (role === 'donor') {
                res.render('DonorPage'); // Redirect to donorPage
            } else if (role === 'admin') {
                res.render('AdminPage'); // Redirect to adminPage
            }
        } else {
            res.send('<h1>Incorrect password!</h1>');
        }
    } catch (error) {
        res.send(`<h1>Error: ${error.message}</h1>`);
    }
});
app.post('/submitDonorInfo', async (req, res) => {
    const { name, email, gender, contact, age, dateOfBirth, units, address, city, district, state, pincode, bloodGroup, donationHistory, medicalHistory, surgeryHistory, diseases } = req.body;

    try {
        const newDonorInfo = await donorInfo.create({
            name,
            email,
            gender,
            contact,
            age,
            dateOfBirth,
            units,
            address,
            city,
            district,
            state,
            pincode,
            bloodGroup,
            donationHistory,
            medicalHistory,
            surgeryHistory,
            diseases
        });
        res.status(201).send({ message: 'Donor information submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error submitting donor information' });
    }
});

// logout user :- 
app.post("/logout" , (req, res)=>{
    res.sendFile(path.join(__dirname ,'public' ,'index.html')); 
}) 

// upload picture :- 
app.post("/uploads", upload.single('image'), (req, res)=>{
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded.' });
    }
    console.log(req.body); 
    console.log(req.file); 
})

app.get('/userPage', (req, res) => {
    res.render('UserPage');
});

app.get('/donorPage', (req, res) => {
    console.log("hi");
    res.render('DonorPage');
});

app.get('/adminPage', (req, res) => {
    res.sendFile('AdminPage');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});