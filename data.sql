DROP TABLE IF EXISTS Missions;
DROP TABLE IF EXISTS Stats;

CREATE TABLE IF NOT EXISTS Missions (
 name text,
 missionNum INT,
 destination text,
 launched INT,
 cost INT,
 
 PRIMARY KEY(name, missionNum)
);

CREATE TABLE IF NOT EXISTS Stats (
 planet text,
 radius INT,
 distance DOUBLE,
 gravity DOUBLE,
 moons INT,
 
 PRIMARY KEY(planet)
);

-- Apollo Missions 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 7 , "moon", 1968, 575);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 8 , "moon", 1968, 1230);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 9 , "moon", 1968, 1303);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 10, "moon", 1969, 1341);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 11, "moon", 1969, 1360);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 12, "moon", 1969, 1389);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 13, "moon", 1969, 1389);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 14, "moon", 1971, 1421);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 15, "moon", 1971, 1581);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 16, "moon", 1972, 1519);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 17, "moon", 1972, 1536);

-- Voyager
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("voyager", 1, "outer solar system", 1977, 250);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("voyager", 2, "outer solar system", 1977, 895);

-- Casini 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("casini", 1, "saturn", 1997, 3260);

-- Galileo 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("galileo", 1, "jupiter", 1997, 1600);

-- Gemini 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("gemini", 1, "low earth orbit", 1965, 1300);

-- Luna 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("luna", 1, "moon", 1959, 4500);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("luna", 2, "moon", 1959, 4500);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("luna", 9, "moon", 1966, 4500);

-- Magellan 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("megellan", 1, "venus", 1989, 680);

-- Mariner 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("mariner", 4, "inner solar system", 1967, 554);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("mariner", 6, "inner solar system", 1969, 148);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("mariner", 7, "inner solar system", 1969, 148);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("mariner", 9, "inner solar system", 1971, 137);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("mariner", 10, "inner solar system", 1973, 554);

-- Mars
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("spirit", 1, "mars", 2003, 400);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("opportunity", 1, "mars", 2003, 400);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("pathfinder", 1, "mars", 1997, 175);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("reconnaissance", 1, "mars", 2005, 175);

-- Messenger 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("messenger", 1, "mercury", 1978, 280);

-- Pioneer 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("pioneer", 1, "moon", 1972, 150);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("pioneer", 10, "jupiter", 1972, 150);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("pioneer", 11, "saturn", 1973, 150);


-- Ranger 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("ranger", 1, "moon", 1973, 170);

-- Skylab
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("skylab", 1, "low earth orbit", 1973, 2200);

-- Sputnik 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("sputnik", 1, "low earth orbit", 1957, 0);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("sputnik", 2, "low earth orbit", 1957, 0);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("sputnik", 3, "low earth orbit", 1958, 0);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("sputnik", 4, "low earth orbit", 1960, 0);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("sputnik", 5, "low earth orbit", 1960, 0);

-- Ulysses 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("ulysses", 1, "sun", 1990, 1000);

-- Venera 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("venera", 1, "venus", 1961, 0);

-- Venus express
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("express", 1, "venus", 2005, 85);

-- Viking 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("viking", 1, "mars", 1975, 217);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("viking", 2, "mars", 1975, 217);

-- Juno 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("juno", 1, "jupiter", 1975, 1100);

-- New Horizons
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("Horizons", 1, "pluto", 2006, 700);


-- Deep Space 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("deep space", 1, "asteroid", 1998, 95);

-- Dawn 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("dawn", 1, "asteroid belt", 2007, 446);

-- Rosetta
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("rosetta", 1, "comet", 2004, 1000);

-- Genesis 
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("genesis", 1, "sun", 2001, 164);






INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("mercury",2440 ,0.39 ,0.38,0);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("venus"  ,6052 ,0.72 ,0.90,0);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("earth"  ,6378 ,1.00 ,1.00,1);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("moon"   ,1738 ,0.00 ,0.17,0);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("mars"   ,3397 ,1.52 ,0.38,2);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("jupiter",71492,5.20 ,2.53,67);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("saturn" ,60268,9.54 ,1.10,62);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("uranus" ,25559,19.18,0.89,27);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("neptune",24766,30.06,1.14,13);