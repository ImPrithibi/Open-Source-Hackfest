// const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// //const session = require('express-session');
// //const crypto = require('crypto');
// //const MongoDBStore = require('connect-mongodb-session')(session);
// //npm install express-session connect-mongodb-session
// //npm install bcrypt

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// console.log("Hello World");

// const User = mongoose.model('User', {
//     email: String,
//     password: String,
// });

// //const store = new MongoDBStore({
//     //This uri will change, need to create a section for sessions in MongoDB
//     //uri: 'mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8ldtugv.mongodb.net/Bathrooms?retryWrites=true&w=majority',
//     //collection: 'sessions',
// //});

// //Tests if there are errors in the session store
// //store.on('error', function(error){
//     //console.error('Session Store Error:', error);
// //});

// //app.use is for things that occur between a request and response
// //This session creation will occur between submitting login info and logging in 
// //app.use(
//     //session({
//         //Generates a session key for each session
//         //secret: crypto.randomBytes(16).toString('hex'),
//         //resave: false,
//         //saveUninitialized: false,
//     //})
// //)

// //const isAuthenticated = (req, res, next) => {
// //    if(req.session.isAuthenticated) {
// //        return next();
// //    }
// //    res.status(401).json({ error: 'Unauthorized. Please Log in' });
// //};

// app.post('/register', async (req, res) => {
//     try{
//         //Data is retreieved from the frontend and stored into the variables
//         const{ username, email, password } = req.body;

//         //Check if email is already in the database
//         //Uses findOne because we assume that only one version of the email exists in the database
//         const userExists = await User.findOne({ email });
//         if(userExists) {
//             //Email already exists, sends 409 error (conflicts with existing conditions) and sends error message
//             return res.status(409).json({ error: 'This email has already been registered' });
//         }

//         //Check if username is already in the database
//         const usernameExists = await User.findOne({ username });
//         if(usernameExists){
//             //A person already has the username, prompts to choose another
//             return res.status(409).json({ error: 'Someone already has this username' });
//         }

//         //Hashes the password for security
//         const hashPassword = await bycrypt.hash(password, 10);

//         //User's information is stored into the MongoDB database
//         const newUser = new User({
//             username,
//             email,
//             password: hashPassword,
//         });
//         await newUser.save();

//         res.status(200).json({ message: 'Registration successful!' });
//     }
//     catch  (err) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.post('/login', async (req, res) => {
//     //Data is retreieved from the frontend and stored into the variables
//     const { email, password } = req.body;

//     try{
//         //Looks for the email in the database
//         const user = await User.findOne({ email });
//         if(!user){
//             return res.status(401).json({ error: 'Invalid Credentials' });
//         }    
//         //Compares passwords
//         const passwordMatches = await bcrypt.compare(password, user.password);
//         if(!passwordMatch){
//             return res.status(401).json({ error: 'Invalid Credentials' });
//         }
//         //If sessions used
//         //req.session.isAuthenticated = true;
//         //req.session.username = user.username;
        
//         //I added the username in the response in case you want to extract it and use it to display their name in the corner or use it for something else
//         //If not needed, will remove
//         const username = user.username;
//         res.status(200).json({ username, message: 'Login Successful' });
//     }
//     catch (err) {
//         res.status(500).json({ error: 'Interal Server Error' });
//     }
// });

// app.post('/reviews', isAuthenticated, async (req, res) => {
    
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });