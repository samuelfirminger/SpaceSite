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
    
    //Check the incoming url against the list of approved urls
    validUrls.forEach(function(entry) {
        if(url === entry) {
            urlValid = true;
        }
    });

    //If URL is invalid, serve an error. Otherwise, render a page.
    if(urlValid == false) {
        res.status(404).send("404 - Page does not exist"); return;
    } else {
        switch(url) {
            case('/')           : 
            case('/home')       : res.render('index')     ; return;
            case('/mercury')    : getStats('mercury', res); return;
            case('/venus')      : getStats('venus', res)  ; return;
            case('/earth')      : getStats('earth', res)  ; return;
            case('/moon')       : getStats('moon', res)   ; return;
            case('/mars')       : getStats('mars', res)   ; return;
            case('/jupiter')    : getStats('jupiter', res); return;
            case('/saturn')     : getStats('saturn', res) ; return;
            case('/uranus')     : getStats('uranus', res) ; return;
            case('/neptune')    : getStats('neptune', res); return;
            case('/simulation') : res.render('simulation', {layout: 'simulator'}); return;
            case('/searchbody') : res.render('searchbody', {layout: 'search'})   ; return;
        }
    }
})

//================================Database Handling=======================================
//Insert into the Mission Database
app.post('/insert', function (req,res) {
    var newName = req.body.name.toLowerCase();
    var newNum  = req.body.number.toLowerCase(); 
    var newDest = req.body.destination.toLowerCase();
    var newYear = req.body.year.toLowerCase();  
    var newCost = req.body.cost.toLowerCase();   
    var stmt = db.prepare('INSERT INTO Missions VALUES (?,?,?,?,?)');
    
    if((newName === "") || (newNum === "") || (newDest === "") || (newYear === "") || (newCost === "")) {
        res.sendFile(__dirname + '/public/error.html'); 
    } else {
        stmt.run(newName,newNum,newDest,newYear,newCost); 
        stmt.finalize();            
        res.render('searchbody', {layout: 'search'});       
    }
    
})

//Perform Queries on Mission Database
app.post('/name', function(req, res) {      
    var searchName = req.body.name.toLowerCase();
    query("SELECT * FROM Missions WHERE name = ?", searchName, res);
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
app.post('/all', function(req, res) {
    var data = [];
    db.serialize(function () {      
           db.each("SELECT * FROM Missions", function(err, row) {
               data.push({name: toTitleCase(row.name), number: row.missionNum, destination: toTitleCase(row.destination), launched: row.launched, cost: row.cost})
           }, function() {
            res.render('result', {layout: 'results', data: data});
        })
    })
});

function getStats(planet, res) {
    var data = [];
    db.serialize(function () {
        db.each("SELECT * FROM Stats WHERE planet = ?", planet, function(err, row) {
        data.push({radius: row.radius,
                   distance: row.distance,
                   gravity: row.gravity,
                   moons: row.moons,
                   maxTemp: row.maxTemp,
                   minTemp: row.minTemp,
                   surfacePressure: row.surfacePressure})
        }, function() {
            res.render(planet, {layout: 'planet', data : data});
        }) 
    });
}

function query(statement, searchTerm, res) {
    var data = []; 
    
    db.serialize(function () {      
       db.each(statement, searchTerm, function(err, row) {
           data.push({name: toTitleCase(row.name), 
                      number: row.missionNum, 
                      destination: toTitleCase(row.destination), 
                      launched: row.launched, 
                      cost: row.cost})
       }, function() {
        res.render('result', {layout: 'results', data: data});
    })
  });
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}