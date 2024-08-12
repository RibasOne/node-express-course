import './db/connect.js';
import express from 'express';
import tasks from './routes/tasks.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// middlewares
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const PORT = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        });
    } catch (error) {
        console.error(error);
    }
};  

start();