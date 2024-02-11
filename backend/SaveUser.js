// app.js

const connectToMongoDB = require('./conn');
const User = require('./Schema');

// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    // Create a new user
    const newUser = new User({
      email: 'john@example.com',
    });

    // Save the user to the database
    newUser.save()
      .then(user => {
        console.log('User saved:', user);
      })
      .catch(err => {
        console.error('Error saving user:', err);
      });
  });
