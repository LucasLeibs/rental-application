const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerate');
const validInfo = require("../middleware/validations");
const authorization = require("../middleware/authorization")

router.post("/register", validInfo, async (req, res) => {
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

        const bcryptPassword = await bcrypt.hash(password, salt)
        //enter the new user inside our database
        const newUser = await pool.query("INSERT INTO users (name, user_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",[
             name, user_name, email, bcryptPassword
        ]);
        
        //generate jwt token
        const token = jwtGenerator(newUser.rows[0].user_id)
        res.json({ token });
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})
//login 
router.post("/login", validInfo, async (req, res) => {
    try {
        // destructure req body 
        const {email, password} = req.body;
      
        // check if user doesnt exist(if yes throw error)
        const user = await pool.query("SELECT * FROM users WHERE email = $1",[
            email
        ]);
        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect")
        }
        // check credentials
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect")
        }
        // give them token
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({ token });
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})


router.get("/verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
         console.error(err.message)
        res.status(500).send("Server Error")
    }
})
module.exports = router;