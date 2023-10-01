require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


mongoose.connect(`mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@data.5a0gibq.mongodb.net/qc`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the bathrooms Schema [Just an sample ]
const bathroomSchema = new mongoose.Schema(
  {
  building: String,
  floor: Number,
  gender: String,
  cleanRating: Number,
  open: String,
  crowdedRating: Number,
},
{
  collection: 'bathroom'
}
);


const Bathroom = mongoose.model('bathrooms', bathroomSchema);



// API Routes
// routes help us redirect or deliver data to the client

//To get a list of all the bathroomss
app.get(`/` , async (req, res) => {
  res.send(`Home`);
});


app.get('/bathrooms', async (req, res) => {
  try {
    const bathrooms = await Bathroom.find();

    res.json(bathrooms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

//To get a specific bathrooms, based on it's unique ID
app.get('/bathrooms/:id', async (req, res) => {
  try {
      const bathrooms = await Bathroom.findById(req.params.id);
      if (bathrooms) {
          res.json(bathrooms);
      } else {
          res.status(404).json({ error: 'bathrooms not found' });
      }
  } catch (err) {
      res.status(500).json({ error: 'Server error' });
  }
});


// Handle POST requests to /bathrooms
app.post('/bathrooms', async (req, res) => {
  try {
    // Post methods store data in their body
    // using the req.body object we can retrieve this data

    const { building, floor, gender, cleanRating, open, crowdedRating } = req.body;
    const bathrooms = new Bathroom({
      building,
      floor,
      gender,
      cleanRating,
      open,
      crowdedRating,
    });
    await bathrooms.save();
    res.status(201).json(bathrooms);
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
        // Updating the bathrooms with the provided ID
        const updatedbathrooms = await Bathroom.findByIdAndUpdate(id, {
            $set: {
                ...(cleanRating !== undefined && { cleanRating }),
                ...(crowdedRating !== undefined && { crowdedRating }),
            }
        }, { new: true });  // This option ensures the updated document is returned

        // If the bathrooms with the given ID isn't found, return a 404 error
        if (!updatedbathrooms) {
            return res.status(404).json({ error: 'bathrooms not found' });
        }

        // Send the updated bathrooms as the response
        res.json(updatedbathrooms);

    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


// app.get('/rating2', async (req, res) =>{
//   try {

//     const bathrooms = ( await bathrooms.aggregate([
//       //Stage 3: Group remaining documents by item name and sum
//       {
//         '$group':{
//            _id:"$location", totalCleanRating:{
//             $sum: '$cleanRating'
//             }
//         }
//       }
//     ]
//     ));
//     console.log(bathrooms);
//     res.json(bathrooms);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });


// Start the local Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});