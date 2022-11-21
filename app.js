// improrts
require('dotenv').config();
const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');


const app = express();
const port = process.env.PORT || 3000;


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));
app.use(cookieParser());

// database configuration
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
    .then(()=>console.log("Connected to database!"))
    .catch((err)=> console.log(err));
// routes USER
app.use("/api/auth", authRoute);
app.use("/api/user", require("./routes/user"));

// routes prefix
app.use("/api/post", require("./routes/routes"));
app.use("/contact", require("./routes/contact"));

// start server
app.listen(port,()=>console.log(`server running at http://localhost:${port}`));
