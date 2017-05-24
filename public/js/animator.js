var element 		= document.getElementById('simulation');
var ctx				= element.getContext("2d");
var camera 			= {};
	camera.x 		= 0;
	camera.y 		= 0;
var scale			= 1.0;
var obj 			= [];

var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 240;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 0.04878 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);



var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 215;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 0.0952 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);


var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 185;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 0.268 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);

var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 150;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 0.64 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);

var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 95;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 4.2 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);

var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 70;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 8 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);

var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 45;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 6.64 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);

var t			= {};
	t.angle	    = Math.random()*Math.PI*2; 
	t.radius    = 20;
	t.x 		= Math.cos(t.angle)*t.radius; 
	t.y 		= Math.sin(t.angle)*t.radius; 
	t.duration	= 10000; 
	t.rotSpeed	= 10 * Math.PI / t.duration; 
	t.start		= Date.now();
    	
obj.push(t);



function update(){
	for(var i = 0; i < obj.length; i++){
		var delta				= Date.now() - obj[i].start;
		obj.start 				= Date.now();
		var angle				= obj[i].rotSpeed * delta;
        // The angle is now already in radian, no longer need to convert from degree to radian.
		obj[i].x				= obj[i].radius * Math.cos(angle);
		obj[i].y				= obj[i].radius * Math.sin(angle);								
	}
}

function draw(){
    update();
    ctx.clearRect(0,0,element.width,element.height);
    
    ctx.save();
    
    ctx.translate(0-(camera.x - element.width/2),0-(camera.y-element.height/2));  	    
    ctx.scale(scale,scale);
    ctx.fillStyle = 'blue';
    for(var i = 0; i < obj.length; i++){
        ctx.beginPath();
		ctx.arc(0,0,obj[i].radius,0,Math.PI*2);  
		ctx.lineWidth = 1.5;
		ctx.strokeStyle = "white";
		ctx.stroke();
        
        ctx.beginPath();
		switch(i) {
			case 0: 
				ctx.arc(obj[i].x,obj[i].y,10,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#484BAC";
				ctx.stroke();    
        		ctx.fillStyle = "#484BAC";
				ctx.fill();
				break ; 
			case 1: 
				ctx.arc(obj[i].x,obj[i].y,10,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#CAF0F1";
				ctx.stroke();    
        		ctx.fillStyle = "#CAF0F1";
				ctx.fill();
				break ;
			case 2: 
				ctx.arc(obj[i].x,obj[i].y,14,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#AC9866";
				ctx.stroke();    
        		ctx.fillStyle = "#AC9866";
				ctx.fill();
				break ;			
			case 3: 
				ctx.arc(obj[i].x,obj[i].y,17,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#B1795E";
				ctx.stroke();    
        		ctx.fillStyle = "#B1795E";
				ctx.fill();
				break ;	
			case 4: 
				ctx.arc(obj[i].x,obj[i].y,7,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#985D35";
				ctx.stroke();    
        		ctx.fillStyle = "#985D35";
				ctx.fill();
				break ;	
			case 5: 
				ctx.arc(obj[i].x,obj[i].y,8,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#446EFE";
				ctx.stroke();    
        		ctx.fillStyle = "#446EFE";
				ctx.fill();
				break ;
			case 6:
				ctx.arc(obj[i].x,obj[i].y,6,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#8B3D0C";
				ctx.stroke();    
        		ctx.fillStyle = "#8B3D0C";
				ctx.fill();
				break ;	
			case 7: 
				ctx.arc(obj[i].x,obj[i].y,6,0,Math.PI*2);  
				ctx.lineWidth = 1.5;
				ctx.strokeStyle = "#6D6D6D";
				ctx.stroke();    
        		ctx.fillStyle = "#6D6D6D";
				ctx.fill();
				break ;										 				
			default :
				break ; 

		}

    }
    
    ctx.restore();
    requestAnimationFrame(draw);
}


draw();