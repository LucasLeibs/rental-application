const express = require('express');
const router = express.Router();
const pool = require('../db');


router.post("/new-review", async (req, res) => {
    try {
        // destructire req body 
        const { user_id, street, apartment, city, state, comments, rating, start_date, end_date} = req.body;

       
        const newReview = await pool.query("INSERT INTO reviews (user_id, street, apartment, city, state, comments, rating, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",[
             user_id, street, apartment, city, state, comments, rating, start_date, end_date
        ]);
        res.json(newReview.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})


module.exports = router;