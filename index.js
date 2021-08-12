//Express Initialization
const express = require('express');
const app = express();
//imports
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');

//Express BodyPArser
app.use(express.json());
//Dotenv
dotenv.config();

//DB Connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("DB Connected"));
//Routes
app.use("/api/users", authRouter);

app.listen(3000, () => {
    console.log("Server started");
})