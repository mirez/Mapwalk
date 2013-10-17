var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var csv = require('csv');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 5000;

//var schema = new mongoose.Schema({
//  _id: mongoose.Schema.Types.ObjectId,
//  BusinessName: String,
//  ContactName: String,
//  Phone: String,
//  Email: String,
//  Street: String,
//  Street2: String,
//  Street3: String,
//  City: String,
//  State: String,
//  Zip: String,
//  Type: String,
//  SquareFootage: Number,
//  CostPerDay: String,
//  FromDate: Date,
//  ToDate: Date,
//  Website: String,
//  CreatedDate: Date
//}, { collection: 'LLP' });

app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);
app.use(express.bodyParser());

//mongoose.connect('mongodb://localhost/sentimental', function (err, res) {
//  if (err) {
//    console.log('error' + err);
//  }
//});

app.listen(port, function() {
  console.log("Listening on " + port);
});

