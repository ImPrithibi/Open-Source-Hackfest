const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
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
  name: String,
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
    const { name, location, cleanRating, crowdedRating } = req.body;
    const bathroom = new Bathroom({
      name,
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
