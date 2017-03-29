function drawPlanets() {
    var c = document.getElementById("map");
    var ctx = c.getContext("2d");
    var centerX = c.height/2;
    var imgMercury, imgVenus, imgEarth = new Image(),
        imgMars, imgJupiter, imgSaturn,
        imgUranus, imgNeptune;
    var sizeMercury = 5,  sizeVenus  = 8, 
        sizeEarth   = 10, sizeMars   = 8,
        sizeJupiter = 30, sizeSaturn = 25,
        sizeUranus  = 23, sizeNeptune= 21;
        
    //drawEarth(c, ctx);
    drawPlanet(ctx, centerX, imgMars,  'mercury', sizeMercury, 70);
    drawPlanet(ctx, centerX, imgMars,  'venus'  , sizeVenus,   110);
    drawPlanet(ctx, centerX, imgEarth, 'earth'  , sizeEarth,   150);
    drawPlanet(ctx, centerX, imgMars,  'mars'   , sizeMars,    200);
    drawPlanet(ctx, centerX, imgMars,  'jupiter', sizeJupiter, 240);
    drawPlanet(ctx, centerX, imgMars,  'saturn' , sizeSaturn,  310);
    drawPlanet(ctx, centerX, imgMars,  'uranus' , sizeUranus,  380);
    drawPlanet(ctx, centerX, imgMars,  'neptune', sizeNeptune, 450);   
       
    //Set line colour
    ctx.strokeStyle = "red";
    
    //Draw central axix
    ctx.moveTo(0,centerX);
    ctx.lineTo(c.width, centerX);
    ctx.stroke();
        
    //Draw Sun
    ctx.beginPath();
    ctx.arc(-150,centerX,200,0,2*Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();
}

function drawPlanet(ctx, centerX, imgPlanet, planetName, sizePlanet, position) {
    var path   = '/images/canvas/';
    var format = '.png';
    var source = (path.concat(planetName)).concat(format);   
    
    imgPlanet = new Image();
    imgPlanet.onload = function() {        
        ctx.drawImage(imgPlanet,position,centerX - (sizePlanet / 2),sizePlanet,sizePlanet);
    };
    imgPlanet.src = source;
};