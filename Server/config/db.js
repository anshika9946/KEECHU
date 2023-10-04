const mongoose = require('mongoose');

// Replace 'YOUR_MONGODB_URI' with your actual MongoDB connection URI
const mongoURI = 'mongodb+srv://Anshika:Anshika1@cluster0.tfuxtxa.mongodb.net/new?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
