const express = require('express');
const cors = require('cors'); // import the cors middleware
const crypto = require('crypto');
require('../db/conn');
const app = express();
const businessaccs = require('../models/businessaccs');
const researcheraccs = require('../models/researcheraccs');


// Use cors middleware to allow cross-origin requests from any domain
const corsOptions = {
  origin: 'http://localhost:5173'
};
app.use(cors(corsOptions));

// Middleware to parse JSON request body
app.use(express.json());

// Route to handle POST requests to '/business'
app.post('/business', async (req, res) => {
  try{
    console.log(`Business Endpoint Hit`);
    const data = req.body;
    const hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
    data['password'] = hash;
    const user1 = new businessaccs(data);
    const createUser1 = await user1.save();
    res.status(200).send(JSON.stringify({result:'Business Account Created'}));
  }catch(e){
    res.status(400).send(JSON.stringify({result:'User from Company Already Exist'}));
  }
});
app.post('/researcher', async (req, res) => {
  try{
    console.log(`Researcher Endpoint Hit`);
    const data = req.body;
    const hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
    data['password'] = hash;
    const user2 = new researcheraccs(data);
    const createUser2 = await user2.save();
    console.log(createUser2);
    res.status(200).send(JSON.stringify({result:'Researcher Account Created'}));
  }catch(e){
    res.status(400).send(JSON.stringify({result:'User Already Exists'}));
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});