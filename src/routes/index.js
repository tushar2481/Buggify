const express = require('express');
const cors = require('cors'); // import the cors middleware
const crypto = require('crypto');
require('../db/conn');
const app = express();
const businessaccs = require('../models/businessaccs');
const researcheraccs = require('../models/researcheraccs');



const corsOptions = {
  origin: '*'
};
app.use(cors(corsOptions));
app.use(express.json());

// Route to handle POST requests to '/business'
app.post('/business', async (req, res) => {
  try{
    console.log(`Business Endpoint Hit`);
    const data1 = req.body;
    console.log(data1);
    const hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
    data1['password'] = hash;
    const user1 = new businessaccs(data1);
    const createUser1 = await user1.save();
    console.log(createUser1);
    res.status(200).send(JSON.stringify({result:'Business Account Created'}));
  }catch(e){
    console.log(e);
    res.status(400).send(e);
    // res.status(400).send(JSON.stringify({result:'User Already Exists'}));
  }
  
});
app.post('/researcher', async (req, res) => {
  try{
    console.log(`Researcher Endpoint Hit`);
    const data2 = req.body;
    console.log(data2);
    const hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
    data2['password'] = hash;
    const user2 = new researcheraccs(data2);
    const createUser2 = await user2.save();
    console.log(createUser2);
    res.status(200).send(JSON.stringify({result:'Researcher Account Created'}));
  }catch(e){
    console.log(e);
    res.status(400).send(e);
    // res.status(400).send(JSON.stringify({result:'User Already Exists'}));
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});