const express = require("express")
const app = express()
const cors = require("cors")
const jwtAuth = require('./routes /jwtAuth')

//middleware 
app.use(express.json());
app.use(cors());

//ROUTES
//register and login 
app.use("/authentication", jwtAuth);

//dashboard route
app.use("/dashboard", require("./routes /dashboard"))
//review route
app.use("/reviews", require("./routes /reviews") )

app.listen(5000, () => {
    console.log("server is running on port 5000")
})