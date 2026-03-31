require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const taskRoutes = require("./routes/TaskRoutes")

app.use(cors());
app.use(express.json())


// app.use("/api/task",taskRoutes)

app.get("/", (req, res) => {
    console.log("App api hit");
    res.send("Get responce of route /")
})


mongoose.connect("mongodb+srv://malathithiru02_db_user:kcXvZjm0iQ3fHbcg@task.wmt8glv.mongodb.net/?appName=Task")
    .then(()=> console.log("MongoDB Connected"))
    .catch(err => console.error(err))


app.listen(4000, () => {
    console.log("Port is running");
})