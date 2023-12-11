const router = require('express').Router();
const Pin = require("../models/Pin");


//Create pin

router.post("/", async (req, res )=>{
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
        console.log("successful", savedPin.id )
    }
    catch(err){
        res.status(500).json(err);
        console.log('error here is that.........', err.message)
    }
})

//get all pins

router.get('/', async (req, res)=>{
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    }catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router