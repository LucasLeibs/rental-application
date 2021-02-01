const express = require('express');
const router = express.Router();
const pool = require('./db')
//registering 
router.post("/register", async (req, res) => {
    try {
        // destructire req body 
        const {name, user_name, email, password} = req.body;

        //check if user exists 
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
            email
        ])
        res.json(user.rows)
        //bcrypt password 

        //enter the new user inside our database

        //generate jwt token
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router;