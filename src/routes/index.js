const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');
const express = require("express")
require('dotenv').config();
const cors = require('cors');
const app = express();
const hasher = require('./generator');
require('../db/conn')
const Buss = require('../models/businessaccs')
const Rsrc = require('../models/researcheraccs')

const corsOptions = {
    origin: '*',
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());





// using async
app.post('/business', async (req, res) => {
          if (!req.body.username || !req.body.email || !req.body.password || !req.body.company_name || !req.body.position || !req.body.country || !req.body.accepted_terms) {
                    return res.status(422).json({ error: "Plz fill all the field" })
          }
          try {
                    const userExist = await Buss.findOne({ email: req.body.email })
                    if (userExist) {
                              return res.status(422).json({ error: "email already exist" })
                    }else{
                        console.log(`Business Endpoint Hit`);
                        let number = '';
                for (let i = 0; i < 20; i++) {
                    number += Math.floor(Math.random() * 10);
                }
                let bussuser = req.body;
                const hash = req.body.password;
                bussuser['password'] = hash;
                bussuser['isAgree'] = false;
                bussuser['buss_id'] = number;
                const buss_id = number;
                const user = new Buss(bussuser)
                const token = await user.generateAuthToken()
                console.log(token);
                res.status(200).json({'status':'Account Created','jwttoken':`${token}`, 'buss_id':`${buss_id}`, 'username':`${req.body.username}`})
    }
          } catch (err) {
                    console.log(err)
          }
})

app.post('/researcher', async (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password || !req.body.country || !req.body.accepted_terms) {
            return res.status(422).json({ error: "Plz fill all the field" })
  }
  try {
    const userExist = await Buss.findOne({ email: req.body.email })
    const userExist2 = await Buss.findOne({ username: req.body.username })
    const userExist3 = await Rsrc.findOne({ email: req.body.email })
    if (userExist || userExist2) {
              return res.status(422).json({ error: "email already exist" })
    }else{
        if (userExist3) {
            return res.status(422).json({ error: "email already exist" })
  }else{
        console.log(`Resercher Endpoint Hit`);
        let number = '';
        for (let i = 0; i < 20; i++) {
            number += Math.floor(Math.random() * 10);
        }
        let bussuser = req.body;
        const hash = req.body.password;
        bussuser['password'] = hash;
        bussuser['isAgree'] = false;
        bussuser['rsrc_id'] = number;
        const rsrc_id = number;
        const user = new Rsrc(bussuser)
        const token = await user.generateAuthToken()
        console.log(token);
        res.status(200).json({'status':'Account Created','jwttoken':`${token}`, 'rsrc_id':`${rsrc_id}`, 'username':`${req.body.username}`})
    }}
} catch (err) {
    console.log(err)
}
})

app.post('/userfetch', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
              return res.status(400).json({ error: "Plz fill the data" })
    }
    else{
      const user1Login = await Buss.findOne({ username: username })
      const user2Login = await Rsrc.findOne({ username: username })
      if(user1Login !== null){
        const password = user1Login.password;
        const password2 = hasher(req.body.password);
        console.log(password)
        console.log(password2)
        if(password == password2){
            const token = user1Login.tokens[0].token;
            const buss_id = user1Login.buss_id;
            const username = user2Login.username;
            console.log(token);
            console.log(username);
            console.log(buss_id);
        res.status(200).json({'status':'Credentials Matched','jwttoken':`${token}`, 'buss_id':`${buss_id}`, 'username':`${username}`})
        }else{
            res.status().json({'status':'Wrong Credentials'})
        }
      }else{
        if(user2Login !== null){
        const password = user2Login.password;
        const password2 = hasher(req.body.password);
        console.log(password)
        console.log(password2)
        if(password == password2){
            const token = user2Login.tokens[0].token;
            const rsrc_id = user2Login.rsrc_id;
            const username = user2Login.username;
            console.log(token);
            console.log(username);
            console.log(rsrc_id);
        res.status(200).json({'status':'Credentials Matched','jwttoken':`${token}`, 'rsrc_id':`${rsrc_id}`, 'username':`${username}`})
        }else{
            res.status().json({'status':'Wrong Credentials'})
        }
        }
      }
    }
}catch(e){{
  console.log(e);
}}
})


// Start the server
app.listen(process.env.PORT || 5173, () => {
    console.log(`Server started on port 5173`);
});