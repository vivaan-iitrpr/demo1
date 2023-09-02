const express = require('express');
const connectDB = require('./config/db');
//const book = require('./routes/api/books');

const app = express();

connectDB();
//book();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));