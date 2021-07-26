const path = require('path');
const express = require('express');
const db = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const homeRouter = require('./routes/stores')
dotenv.config({ path: './config/config.env' });
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
db();
app.use('/', homeRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server is running on ${process.env.NODE_ENV} on port ${port}`);
    
})
