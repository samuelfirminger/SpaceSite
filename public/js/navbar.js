 document.getElementById("navMenu").innerHTML =
'<nav class="navbar navbar-default navbar-fixed-top" id="navMenu"> '+ 
'<div class="container">' + 
    '<div class="navbar-header">' +
      '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'+
        '<span class="icon-bar"></span>'+
        '<span class="icon-bar"></span>'+
        '<span class="icon-bar"></span> '+
      '</button>'+
      '<a class="navbar-brand page-scroll" href="#top-page">SOLARNET</a>'+
    '</div>'+

    '<div class="collapse navbar-collapse" id="myNavbar">'+
      '<ul class="nav navbar-nav navbar-right">'+
      '<li class="dropdown">'+
              '<a href="#" class="dropdown-toggle" id="help" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Planet Navigation <span class="caret"></span></a>'+
              '<ul class="dropdown-menu">'+
              '<li><a href="mercury.html">Mercury</a></li>'+
              '<li><a href="venus.html">Venus</a></li>'+
              '<li><a href="earth.html">Earth</a></li>'+
              '<li><a href="moon.html">The Moon</a></li>'+
              '<li><a href="mars.html">Mars</a></li>'+
              '<li><a href="jupiter.html">Jupiter</a></li>'+
              '<li><a href="saturn.html">Saturn</a></li>'+
              '<li><a href="uranus.html">Uranus</a></li>'+
              '<li><a href="neptune.html">Neptune</a></li>'+
              '<li role="separator" class="divider"></li>'+
              '<li><a href="#">Planet Index</a></li>'+
            '</ul>'+
          '</li>'+
          
        '<li><a href="/">HOME</a></li>'+
        '<li><a href="animate.html">SIMULATION</a></li>'+
        '<li><a href="login.html">LOGIN</a></li>'+
      '</ul>'+
    '</div>'+
  '</div>' + 
  '</nav>' ;

