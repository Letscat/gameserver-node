const express = require("express");
var mysql = require('mysql');
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.post("/uploadLevel", function (req, res) {
    console.log(req.body);
    res.send("ok");
    mysqlInsert(req.body)
});
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gamedb"
  });

//Start the server and make it listen for connections on port 8080 
app.listen(8080);

function mysqlInsert(body){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO levels (a, b, c) VALUES (${body.a},${body.b},${body.c})`;
        console.log(sql)
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
}