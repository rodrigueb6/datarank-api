import path from 'path';
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import auth from './routes/auth';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

dotenv.config();
const app = express();
app.use(bodyParser.json());

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/datarank');

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('Running on localhost:8080'));
