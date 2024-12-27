const properties = require('./application/properties.json');
const cors = require('cors');
const express = require('express');
const session = require('express-session');

const { connectioMongoDb } = require('./database/database');
const router = require('./router/user');
const cookieParser = require("cookie-parser");

const port = 1012;
const app = express();
const databaseUrl = properties.localhost;

// Connect to MongoDB
connectioMongoDb(databaseUrl)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("Error -->", error);
  });

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,  
}));

app.use(session({
  secret: 'your-secret-key', 
  resave: false,             
  saveUninitialized: false,  
  cookie: {
      secure: false,        
      httpOnly: true,        
      maxAge: 1000 * 60 * 60 
  }
}));


// Mount the router on '/user'
app.use('/user', router);

app.listen(port, () => {
  console.log("Running on Port Number 1012");
});
