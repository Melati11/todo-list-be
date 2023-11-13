const express = require('express');
const dotenv = require("dotenv");
const db = require("./config/db")
const allRoutes = require("./routes")
dotenv.config();

const PORT = process.env.PORT || 3000

const app = express()
db.then(() => {
    console.log("connect to mongoDB successful");
})
.catch(() => {
    console.log("connect to mongoDB failed")
 })

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
})

app.use((req, res, next) => {
    res.status(404).json({
      message: "Endpoint Not Found",
    });
});