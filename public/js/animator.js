var simCanvas 		= document.getElementById('simulation');
var toDisp				= simCanvas.getContext("2d");
var center 			= {};
	center.x 		= 0;
	center.y 		= 0;
var scale			= 1.0;
var planets 			= [];


var neptune	= {};
	neptune.size = 240;
	neptune.x = Math.cos(neptune.angle)*neptune.size; 
	neptune.y = Math.sin(neptune.angle)*neptune.size; 
	neptune.orbital	= 10000; 
	neptune.rotationSpeed	= ((0.04854 * Math.PI) / neptune.orbital); 
	neptune.begin = Date.now();
planets.push(neptune);


var uranus = {};
	uranus.size = 215;
	uranus.x = Math.cos(uranus.angle)*uranus.size; 
	uranus.y = Math.sin(uranus.angle)*uranus.size; 
	uranus.orbital = 10000; 
	uranus.rotationSpeed = ((0.0952 * Math.PI) / uranus.orbital); 
	uranus.begin = Date.now();
planets.push(uranus);


var saturn = {};
	saturn.size = 170;
	saturn.x = Math.cos(saturn.angle)*saturn.size; 
	saturn.y = Math.sin(saturn.angle)*saturn.size; 
	saturn.orbital = 10000; 
	saturn.rotationSpeed = ((0.2711 * Math.PI) / saturn.orbital); 
	saturn.begin = Date.now();
planets.push(saturn);

var jupiter	= {};
	jupiter.size = 120;
	jupiter.x = Math.cos(jupiter.angle)*jupiter.size; 
	jupiter.y = Math.sin(jupiter.angle)*jupiter.size; 
	jupiter.orbital	= 10000; 
	jupiter.rotationSpeed = ((0.6722 * Math.PI) / jupiter.orbital); 
	jupiter.begin = Date.now();
planets.push(jupiter);

var mars = {};
	mars.size = 70;
	mars.x = Math.cos(mars.angle)*mars.size; 
	mars.y = Math.sin(mars.angle)*mars.size; 
	mars.orbital = 10000; 
	mars.rotationSpeed	= ((4.2 * Math.PI) / mars.orbital); 
	mars.begin = Date.now();
planets.push(mars);

var earth = {};
	earth.size  = 50;
	earth.x = Math.cos(earth.angle)*earth.size; 
	earth.y = Math.sin(earth.angle)*earth.size; 
	earth.orbital = 10000; 
	earth.rotationSpeed	= ((8 * Math.PI) / earth.orbital); 
	earth.begin = Date.now();
planets.push(earth);

var venus = {};
	venus.size  = 35;
	venus.x = Math.cos(venus.angle)*venus.size; 
	venus.y = Math.sin(venus.angle)*venus.size; 
	venus.orbital = 10000; 
	venus.rotationSpeed	= ((13.33 * Math.PI) / venus.orbital); 
	venus.begin = Date.now();
planets.push(venus);

var mercury	= {};
	mercury.size  = 20;
	mercury.x = Math.cos(mercury.angle)*mercury.size; 
	mercury.y = Math.sin(mercury.angle)*mercury.size; 
	mercury.orbital	= 10000; 
	mercury.rotationSpeed	= ((40 * Math.PI) / mercury.orbital); 
	mercury.begin = Date.now();
planets.push(mercury);

function update(){
	for(var i = 0; i < planets.length; i++){
		var delta = Date.now() - planets[i].begin;
		planets.begin = Date.now();
		var angle = planets[i].rotationSpeed * delta;

		planets[i].x = planets[i].size * Math.cos(angle);
		planets[i].y = planets[i].size * Math.sin(angle);								
	}
}

function render(){

    update();
    toDisp.clearRect(0, 0, simCanvas.width, simCanvas.height);
    toDisp.save();
    
    toDisp.translate(0-(center.x - simCanvas.width/2),0-(center.y-simCanvas.height/2));  	    
    toDisp.scale(scale,scale);

    for(var i = 0; i < planets.length; i++){

        toDisp.beginPath();
		toDisp.arc(0, 0, planets[i].size, 0, Math.PI*2);  

		toDisp.lineWidth = 1.5;
		toDisp.strokeStyle = "white";
		toDisp.stroke();

        toDisp.beginPath();

		switch(i) {
			case 0: 
				toDisp.arc(planets[i].x, planets[i].y, 11, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5;
				toDisp.strokeStyle = "#484BAC";
				toDisp.stroke();    
        		toDisp.fillStyle = "#484BAC";
				toDisp.fill();
				break ; 
			case 1: 
				toDisp.arc(planets[i].x, planets[i].y, 12, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5;
				toDisp.strokeStyle = "#CAF0F1";
				toDisp.stroke();    
        		toDisp.fillStyle = "#CAF0F1";
				toDisp.fill();
				break ;
			case 2: 
				toDisp.arc(planets[i].x, planets[i].y, 20, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5;
				toDisp.strokeStyle = "#AC9866";
				toDisp.stroke();    
        		toDisp.fillStyle = "#AC9866";
				toDisp.fill();
				break ;			
			case 3: 
				toDisp.arc(planets[i].x, planets[i].y, 25, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5;
				toDisp.strokeStyle = "#B1795E";
				toDisp.stroke();    
        		toDisp.fillStyle = "#B1795E";
				toDisp.fill();
				break ;	
			case 4: 
				toDisp.arc(planets[i].x, planets[i].y, 7, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5;
				toDisp.strokeStyle = "#985D35";
				toDisp.stroke();    
        		toDisp.fillStyle = "#985D35";
				toDisp.fill();
				break ;	
			case 5: 
				toDisp.arc(planets[i].x, planets[i].y, 8, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5;
				toDisp.strokeStyle = "#446EFE";
				toDisp.stroke();    
        		toDisp.fillStyle = "#446EFE";
				toDisp.fill();
				break ;
			case 6:
				toDisp.arc(planets[i].x, planets[i].y, 6, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5; 
				toDisp.strokeStyle = "#8B3D0C";
				toDisp.stroke();    
        		toDisp.fillStyle = "#8B3D0C";
				toDisp.fill();
				break ;	
			case 7: 
				toDisp.arc(planets[i].x, planets[i].y, 6, 0, Math.PI*2);  
				toDisp.lineWidth = 1.5;
				toDisp.strokeStyle = "#6D6D6D";
				toDisp.stroke();    
        		toDisp.fillStyle = "#6D6D6D";
				toDisp.fill();
				break ;										 				
			default :
				break ; 
		}
    }
    
    toDisp.restore();
    requestAnimationFrame(render);
}

render();