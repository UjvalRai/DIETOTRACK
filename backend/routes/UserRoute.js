const express = require('express');
const User = require('../modals/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'HelloHii';
const cors = require('cors');
// Create a new user
router.post('/signup', async(req, res) => {
  const jwt = require('jsonwebtoken');
  const secretKey = 'your_secret_key'; // Change this to a secure key
  
    const { email, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }
    // Create a new user
    const newUser = new User(req.body);
    await newUser.save();
    // Generate a token
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    res.status(201).send(`${token}`);
  
});


router.post('/signin', async(req, res) => {
  // Assuming you have a users database or some form of authentication logic
  const { email, password } = req.body;

  // Example authentication logic (replace with your own)
  const data = await User.findOne({ email: email });
  if(!data) { return res.status(203).send({ message:'No such user' }); };
  if(data.password!== password) { return res.status(203).send({ message:'Invalid password' }); };
  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
  res.status(200).send(`${token}`);
});

// Get all users
router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).send(err.message));
});

// Get a user by ID
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    })
    .catch((err) => res.status(400).send(err.message));
});

// Update a user by ID
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    })
    .catch((err) => res.status(400).send(err.message));
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.send('User deleted successfully');
    })
    .catch((err) => res.status(400).send(err.message));
});

module.exports = router;
