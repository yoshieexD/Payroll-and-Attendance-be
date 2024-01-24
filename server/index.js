const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/conn.js');
const morgan = require('morgan');
dotenv.config();

const userRoute = require('./routes/userRoutes.js');
app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));


connectDB();

app.use('/auth', userRoute);
app.get('/', function (req, res) {
    res.send('Hello welcome to server');
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} port:${process.env.PORT}`);
})
