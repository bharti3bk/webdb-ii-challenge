const express = require("express");
const db = require("../data/db-config.js");
const router = express.Router(); 

// get all the cars
router.get("/" , (req, res) => {
   db("cars")
   .then(cars => {
       res.status(200).json(cars);
   }) 
   .catch(err => {
       res.status(500).json(err);
   })
}) 

router.post("/" ,(req , res) => { 
    console.log("working.....")
    const carData = req.body;
     db("cars")
     .insert(carData , "id")  
     .then(([id])  => {
        db("cars") 
         .where({id}) 
         .first() 
         .then(car => {
             res.status(200).json(car);
         }) 
     })
     .catch(err => {
         res.status(500).json(err);
     })
}) 
module.exports = router;