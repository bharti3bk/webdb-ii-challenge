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

router.get("/:id" , (req , res) => {
    const {id} = req.params;
    db("cars") 
    .where({id})
    .first()
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(400).json(err);
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

// db('posts')
//     .join('users', 'user.id','=','posts.user_id')
//     .where('users.id',id)
//     .then(posts => {
//       res.status(200).json(posts);
//     })
//     .catch(error => res.send(error))

 
module.exports = router;