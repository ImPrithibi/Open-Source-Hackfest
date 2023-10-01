require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8ldtugv.mongodb.net/Bathrooms?retryWrites=true&w=majority`, {
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
  __v: Number,
});


const Bathrooms = mongoose.model('bathrooms', bathroomSchema);



// API Routes
// routes help us redirect or deliver data to the client
app.get(`/` , async (req, res) => {
  res.send(`Home`);
});


app.get('/bathrooms', async (req, res) => {
  try {
    const bathroom = await Bathrooms.find();
    res.json(bathroom);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// Handle POST requests to /bathrooms [ again this can be different]
app.post('/bathrooms', async (req, res) => {
  try {
    // Post methods store data in their body
    // using the req.body object we can retrieve this data

    const { name, location, cleanRating, crowdedRating } = req.body;
    const bathroom = new Bathrooms({
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


app.put('/bathrooms/:id', async (req, res) => {
    // Extracting the id from the URL and the ratings from the request body
    const { id } = req.params;
    const { cleanRating, crowdedRating } = req.body;

    if (cleanRating === undefined && crowdedRating === undefined) {
        return res.status(400).json({ error: 'No ratings provided' });
    }

    try {
        // Updating the bathroom with the provided ID
        const updatedBathroom = await Bathrooms.findByIdAndUpdate(id, {
            $set: {
                ...(cleanRating !== undefined && { cleanRating }),
                ...(crowdedRating !== undefined && { crowdedRating }),
            }
        }, { new: true });  // This option ensures the updated document is returned

        // If the bathroom with the given ID isn't found, return a 404 error
        if (!updatedBathroom) {
            return res.status(404).json({ error: 'Bathroom not found' });
        }

        // Send the updated bathroom as the response
        res.json(updatedBathroom);

    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


// Start the local Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});