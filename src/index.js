import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import auth from './routes/auth';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/datarank');

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('Running on localhost:8080'));
