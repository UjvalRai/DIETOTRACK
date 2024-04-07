const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoute');
require('dotenv').config();
const cors = require('cors');
const healthRoute = require('./controllers/HealthForm') 

// Initialize Express app
const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// Middleware
app.use(express.json());

app.use('/users',userRoutes)
app.use('/healthform', healthRoute);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


mongoose.connect('mongodb+srv://ujvalrai5151:IyuzAlvxFhP1RW2o@dietmanager.5utu5xo.mongodb.net/', {
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  