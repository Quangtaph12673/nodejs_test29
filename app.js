import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config()
const routerBook = require('./routes/book');
const routerCate = require('./routes/category');
//db connection
mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});



// Middleware
app.use(express.json());

app.use(cors({
    credentials: 'same-origin'
}));

app.use('/api', routerBook);
app.use('/api', routerCate);

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
})