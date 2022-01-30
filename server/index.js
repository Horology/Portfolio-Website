import express, { application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);


// mongodb cloud for DB

const CONNECTION_URL= process.env.MONGO_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,  {
    useNewUrlParser: true,
    retryWrites: true,})
.then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err.message));


