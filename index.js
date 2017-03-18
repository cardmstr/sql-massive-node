var express = require('express');
var bodyparser = require('body-parser');
var massive = require('massive');

var port = process.env.PORT || 3000;
var connString = "postgres://spencersimons@localhost/testProducts";
var massInst = massive.connectSync({connectionString: connString});

var app = module.exports = express();
app.use(bodyparser.json());
app.set('db', massInst);

var db = app.get('db');


app.listen(port ,function(){
  console.log('sql-massive-node running on port ' + port);
})
