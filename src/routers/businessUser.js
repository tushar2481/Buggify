const express = require('express');
const router = new express.Router();
const businessUsers = require('../models/userConn');

router.post("/business", async (req, res) => {
    try {
        const user = new businessUsers(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch(e){ res.status(400).send('data entry fail'); }
})
// Getting Data from Database
router.get("/business/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await businessUsers.find({"_id" : `${id}`});
        res.status(200).send(getUser);
    } catch (e) {
        res.status(400).send(getUser);
    }
})
// Changing Data in Database
router.patch("/business/:id", async (req, res) => {{
    try {
        const _id = req.params.id;
        const updateBusiness = await businessUsers.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        res.status(200).send(`email id is changed : ${updateBusiness}`);
    } catch (e) {
        res.status(400).send(`error`)
    }
}})
// Delete BusinessId in Database
router.delete("/business/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteBusiness = await businessUsers.findOneAndDelete(_id);
        if(!req.params.id){
            res.status(400).send(`Bad Request`);
        }
        res.status(200).send(`removed Business Id : ${deleteBusiness}`);
    } catch (e) {
        res.status(500).send(`Server Connection Problem`);
    }
})

router.get("/API", (req, res) => {
    res.send(`Welcome Homies`);
})

module.exports = router;