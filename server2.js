var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDb.db');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Body parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Valid URLs: used for validation
var validUrls = ["/home","/what","/where","/simulation","/insert?"];

//Add directory for images
app.use(express.static('public'));
app.use(express.static(__dirname + '../public'));

//Set view engine
app.set('view engine', 'pug');

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port);
})

app.get('*', function (req,res) {
    var url = req.url.toLowerCase();
    var urlValid = false;
    
    validUrls.forEach(function(entry) {
        if(url === entry) {
            urlValid = true;
        }
    });

    if(urlValid == false) {
        res.status(404).send("404 - Page does not exist"); return;
    } else {
        switch(url) {
            case('/')           : 
            case('/home')       : res.sendFile(__dirname + '/public/index.html');   return;
            case('/simulation') : res.sendFile(__dirname + '/public/animate.html'); return;
            case('/what')       : res.sendFile(__dirname + '/public/what.html');    return;
            case('/insert?')     : res.sendFile(__dirname + '/public/insert.html');  return;
        }
    }
})

//Insert into the Mission Database
app.post('/insert/entry', function (req,res) {
    console.log("Attempting to add the following data:");
    console.log("Name: ",req.body.name);
    console.log("missionNum: ", req.body.missionNum);
    console.log("Destination: ", req.body.destination);
    console.log("Launched: ", req.body.launched);
    console.log("Cost: ", req.body.cost);
    var stmt = db.prepare('INSERT INTO Missions VALUES (?,?,?,?,?)')
    stmt.run(req.body.name,req.body.missionNum,req.body.destination,req.body.launched,req.body.cost); 
    stmt.finalize();                
    res.send("Added new entry");
})

//Perform Queries on Mission Database
app.post('/search/name', function(req, res) {      
    query("SELECT * FROM Missions WHERE name = ?", req.body.name, res);
});
app.post('/search/number', function(req, res) {      
    query("SELECT * FROM Missions WHERE missionNum = ?", req.body.number, res);
});
app.post('/search/destination', function(req, res) {      
    query("SELECT * FROM Missions WHERE destination = ?", req.body.destination, res);
});
app.post('/search/launch', function(req, res) {      
    query("SELECT * FROM Missions WHERE launched = ?", req.body.year, res);
});
app.post('/search/cost', function(req, res) {      
    query("SELECT * FROM Missions WHERE cost = ?", req.body.cost, res);
});

function query(statement, searchTerm, res) {
    var results = []; 
    
    db.serialize(function () {      
       db.each(statement, searchTerm, function(err, row) {
           results.push({results: results, name: row.name, number: row.missionNum, destination: row.destination, launched: row.launched, cost: row.cost})
       }, function() {
        res.render('index',{"results": results});
    })
  });
}

// AND missionNum = ? AND destination = ? AND launched = ? AND cost = ?
// searchNum, searchDest, searchLaunch, searchCost, 

//Also works:
/*db.serialize(function () {      
       db.each("SELECT * FROM Missions WHERE name = ?", req.body.name, function(err, row) {
           results.push({results: results, name: row.name, destination: row.destination, launched: row.launched})
       }, function() {
        res.render('index',{"results": results})
    })*/

//IT WORKS !!!!!!!!!!!!!!!! returns everything
/*app.post('/users/add', function(req, res) {   
    var results = [];
    console.log("in users/add");
    db.serialize(function () {
       db.each("SELECT * FROM Missions", function(err, row) {
           results.push({results: results, name: row.name, destination: row.destination, launched: row.launched})
       }, function() {
        console.log("rendering results");
        res.render('index',{"results": results})
    })
  });
});*/

    /*, function() { 
        var stmt = db.prepare('INSERT INTO Users VALUES (?,?,?,?,?)')
        stmt.run(newEmail,newFname,newLname,newUname,newPword); 
        stmt.finalize();                
        res.send("Success!");                        
   
});*/
   
