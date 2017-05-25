//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator')
var app = express();


//database 
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDb.db');



var exphbs = require('express-handlebars');


//Valid URLs: used for validation
var validUrls = ["/home","/what","/where"];

//Add directory for images
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));


// handlebar
app.set('views', path.join(__dirname, 'views')) ;
app.use(bodyParser.urlencoded({ extended: false })) ;


app.get('/', function(req, res){
    res.render('index');
})


app.get('/mars', function(req, res) {
    res.render('mars', {layout: 'planet'}) ;
})

// parse application/json
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/main', function(req, res){
    res.render('index');
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port);
})

app.get('*', function (req,res) {
    var url = req.url.toLowerCase();
    var urlValid = false;
    
    validUrls.forEach(function(entry) {
        console.log("checking url=",url);
        console.log("against=",entry);
        if(url === entry) {
            console.log("RETURNING TRUE!");
            urlValid = true;
        }
    });

    if(urlValid == false) {
        res.send("Page does not exist"); return;
    } else {
        switch(url) {
            case('/')     : res.sendFile(__dirname + '/public/index.html'); return;
            case('/home') : res.sendFile(__dirname + '/public/index.html'); return;
            case('/what') : res.sendFile(__dirname + '/public/what.html');  return;
        }
    }
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
    console.log("GET request for root");
})

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
    console.log("GET request for home");
    console.log("url=",req.url.toLowerCase());
})

app.get('/what', function (req, res) {
    res.sendFile(__dirname + '/public/what.html');
    console.log("GET request for what");
})

app.get('/where', function (req, res) {
    res.sendFile(__dirname + '/public/where.html');
    console.log("GET request for where");
})

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
})

app.post('/what', function (req, res) {
    res.send('POST request to what');
})

function checkUrl(req) {
    var url = req.url.toLowerCase();
    
    validUrls.forEach(function(entry) {
        console.log("checking url=",url);
        console.log("against=",entry);
        if(url === entry) {
            console.log("RETURNING TRUE!");
            return true;
        }
    });
    console.log("RETURNING FALSE!");
    return false;
}


/*function getPet(url, response) {
    fs.readFile("./pet.html", ready);
    function ready(err, content) {
        getData(content, url, response);
    }
}

function getData(text, url, response) {
    
}
*/




/*function initialiseDatabase() {
    db.serialize(function () {
        db.run('CREATE TABLE missions (id INT)')
        var stmt = db.prepare('INSERT INTO missions VALUES (?)')

        for (var i = 0; i < 10; i++) {
          stmt.run(i);
        }

        stmt.finalize();

    });  
}

function queryDatabase() {
    db.serialize(function () {
        db.each('SELECT id FROM missions', function (err, row) {
            console.log(row.id);
        });
    });
}*/

/*app.get('/', function(req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello World');
})

app.post('/', function(req,res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

app.delete('/del_user', function(req,res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

app.get('/list_user', function(req,res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

//Responds to a GET request for abcd, abxcd, ab123cd, etc..
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})*/