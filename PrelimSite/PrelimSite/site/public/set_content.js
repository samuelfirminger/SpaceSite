var planet;
var imageDir = "/images/planets/";
var imageFormat = ".jpg"
var imageName;
var imageSrc;
var planetStats = ["Name","Distance","Radius","Mass","LengthOfDay","SurfaceGrav", "SurfacePressure"];
var loadOnce = 0;

function setContent(planetName) {
    planet = planetName;
    imageName = planetName;
    //window.alert("setting content for planet " + planetName);
    
    imageSrc = imageDir + planetName + imageFormat;
    localStorage.setItem("imageSrc", imageSrc);
    
    switch(planetName) {
        case("planet_mercury") : break;
        case("planet_venus")   : break;
        case("planet_earth")   : break;
        case("planet_mars")    : break;
        case("planet_jupiter") : break;
        case("planet_saturn")  : break;
        case("planet_uranus")  : break;
        case("planet_neptune") : break;
    }
};

function setPlanetImage() {
    if(loadOnce == 0) {       
        imageSrc = localStorage.getItem("imageSrc");   
        document.getElementById("planetImage").src=imageSrc;
        loadOnce = 1;
    } 
};
