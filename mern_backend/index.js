// app.js

const express = require('express');
const connectDB = require('process.env.mongoURI');
const cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors(
    { 
        origin: ["https://cise-week3.vercel.app/"],
        methods: ["POST", "GET"], 
        credentials: true 
    }
));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())