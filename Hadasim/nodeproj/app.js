const express = require('express');
const app = express();
const mongoose = require('mongoose');
const people = require('./Routers/peopleRouter')
const vaccination = require('./Routers/vaccinationRouter')
const bodyParser = require("body-parser")
const cors = require('cors');
mongoose.connect('mongodb://0.0.0.0:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});

const db = mongoose.connection;
// mongoose.set('strictQuery', false);
app.use(cors());
app.use('/public', express.static('public'));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to MongoDB database!😊");
});
app.use(bodyParser.json());

app.use('/people', people)
app.get('/', (req, res) => {
  res.send("hello to app")
})

app.use('/vaccination', vaccination)
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));