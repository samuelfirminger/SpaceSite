var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDb.db');
var express = require('express');
var app = express();

var path = require('path');
var expressValidator = require('express-validator')
var exphbs = require('express-handlebars');

//Body parsing
// parse application/x-www-form-urlencoded
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Add directory for images
app.use(express.static('public'));
app.use(express.static(__dirname + '../public'));

//Set view engine: handlebars
//app.set('view engine', 'pug');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Valid URLs: used for validation
var validUrls = ["/","/home","/what","/where","/simulation","/insert?","/mercury", "/venus", "/earth", 
"/moon", "/mars", "/jupiter", "/saturn", "/uranus", "/neptune", "/simulation", "/searchbody"];

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
            case('/home')       : res.render('index'); return;
            case('/simulation')       : res.render('simulation', {layout: 'simulator'}); return;
            case('/what')       : res.sendFile(__dirname + '/public/what.html');    return;
            case('/insert?')    : res.sendFile(__dirname + '/public/insert.html');  return;
            case('/mercury')       : res.render('mercury', {layout: 'planet'}); return; 
            case('/venus')       : res.render('venus', {layout: 'planet'}); return;
            case('/earth')       : res.render('earth', {layout: 'planet'}); return; 
            case('/moon')       : res.render('moon', {layout: 'planet'}); return; 
            case('/mars')       : res.render('mars', {layout: 'planet'}); return;
            case('/jupiter')      : res.render('jupiter', {layout: 'planet'}); return;
            case('/saturn')       : res.render('saturn', {layout: 'planet'}); return;
            case('/uranus')       : res.render('uranus', {layout: 'planet'}); return;
            case('/neptune')      : res.render('neptune', {layout: 'planet'}); return;
            case('/searchbody')   : res.render('searchbody', {layout: 'search'}); return;
        }
    }
})

//================================Database Handling=======================================
//Insert into the Mission Database
app.post('/insert/entry', function (req,res) {
    console.log("Attempting to add the following data:");
    console.log("Name: ",req.body.name);
    console.log("missionNum: ", req.body.number);
    console.log("Destination: ", req.body.destination);
    console.log("Launched: ", req.body.year);
    console.log("Cost: ", req.body.cost);
       
    var stmt = db.prepare('INSERT INTO Missions VALUES (?,?,?,?,?)')
    stmt.run(req.body.name,req.body.number,req.body.destination,req.body.year,req.body.cost); 
    stmt.finalize();                
    res.send("Added new entry");
})

//Perform Queries on Mission Database
app.post('/name', function(req, res) {      
    query("SELECT * FROM Missions WHERE name = ?", req.body.name, res);
});
app.post('/number', function(req, res) {      
    var searchNumber = req.body.number.toLowerCase();
    query("SELECT * FROM Missions WHERE missionNum = ?", searchNumber, res);
});
app.post('/destination', function(req, res) {  
    var searchDestination = req.body.destination.toLowerCase();    
    query("SELECT * FROM Missions WHERE destination = ?", searchDestination, res);
});
app.post('/launch', function(req, res) {      
    var searchYear = req.body.year.toLowerCase();
    query("SELECT * FROM Missions WHERE launched = ?", searchYear, res);
});
app.post('/cost', function(req, res) {  
    var searchCost = req.body.cost.toLowerCase();
    query("SELECT * FROM Missions WHERE cost = ?", searchCost, res);
});

function query(statement, searchTerm, res) {
    var data = []; 
    var returnName, returnNumber, returnDestination, returnLaunch, returnCost;
    
    db.serialize(function () {      
       db.each(statement, searchTerm, function(err, row) {
           data.push({name: toTitleCase(row.name), number: row.missionNum, destination: toTitleCase(row.destination), launched: row.launched, cost: row.cost})
       }, function() {
        res.render('result', {layout: 'results', data: data});
    })
  });
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}