const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { toNamespacedPath } = require('node:path/posix');

// Initialize the open port to 3000, need to make sure port 3000 is open. 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to process the request to server. 
app.use(bodyParser.json());

// MongoDB Connection [ File name can be different based on host.]
mongoose.connect('mongodb://localhost/bathroom_locator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the Bathroom Schema [Just an sample ]
const bathroomSchema = new mongoose.Schema({
  Building: String,
  location: String,
  cleanRating: Number,
  crowdedRating: Number,
});

const Bathroom = mongoose.model('Bathroom', bathroomSchema);

// API Routes
app.get('/bathrooms', async (req, res) => {
  try {
    const bathrooms = await Bathroom.find();
    res.json(bathrooms);

  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


// Handle POST requests to /bathrooms [ again this can be different]
app.post('/bathrooms', async (req, res) => {
  try {
    const { Building, location, cleanRating, crowdedRating } = req.body;
    const bathroom = new Bathroom({
      Building,
      location,
      cleanRating,
      crowdedRating,
    });
    await bathroom.save();
    res.status(201).json(bathroom);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});


// Start the local Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
