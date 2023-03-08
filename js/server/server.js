const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const userRoutes = require('./routes/users');

app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});