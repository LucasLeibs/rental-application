const express = require("express")
const app = express()
const cors = require("cors")
const jwtAuth = require('./jwtAuth')
//middleware 
app.use(express.json());
app.use(cors());

//ROUTES
//register and login 
app.use("/authentication", jwtAuth);


app.listen(5000, () => {
    console.log("server is running on port 5000")
})