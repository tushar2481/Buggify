const express = require('express');
const cors = require('cors'); // import the cors middleware

const app = express();

// Use cors middleware to allow cross-origin requests from any domain
app.use(cors());

// Middleware to parse JSON request body
app.use(express.json());

// Route to handle POST requests to '/business'
app.post('/business', (req, res) => {
  const data = req.body;
  console.log(data); // This will log the parsed JSON data from the request body
  res.send(typeof(data));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});