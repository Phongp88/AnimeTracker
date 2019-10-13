const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const router = express.Router()
app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json())
// Connection URL
const url = 'mongodb://localhost:27017/';

// Database Name
const dbName = 'AnimeTracker';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  
 client.close();
});


app.post('/quotes', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    var db = db.db(dbName);
    assert.equal(null, err);
    db.collection('quotes').insertOne(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
  });
})


app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
