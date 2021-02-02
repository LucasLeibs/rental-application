const express = require('express');
const router = express.Router();
const pool = require('./db');
const bcrypt = require('bcrypt');
//registering 
router.post("/register", async (req, res) => {
    try {
        // destructire req body 
        const { name, user_name, email, password} = req.body;

        //check if user exists 
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
            email
        ])
        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists")
        } 
        //bcrypt password 
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = bcrypt.hash(password, salt)
        //enter the new user inside our database
        const newUser = await pool.query("INSERT INTO users (name, user_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",[
             name, user_name, email, bcryptPassword
        ]);
        res.json(newUser.rows[0])
        //generate jwt token
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router;