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

INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 8 , "moon", 1968, 1);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 10, "moon", 1969, 2);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 11, "moon", 1969, 3);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("apollo", 12, "moon", 1969, 4);

INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("voyager", 1, "outer solar system", 1977, 4);

INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("mercury",2440 ,0.39 ,0.38,0);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("venus"  ,6052 ,0.72 ,0.90,0);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("earth"  ,6378 ,1.00 ,1.00,1);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("moon"   ,1738 ,0.00 ,0.17,0);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("mars"   ,3397 ,1.52 ,0.38,2);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("jupiter",71492,5.20 ,2.53,67);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("saturn" ,60268,9.54 ,1.10,62);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("uranus" ,25559,19.18,0.89,27);
INSERT INTO Stats(planet, radius, distance, gravity, moons) VALUES("neptune",24766,30.06,1.14,13);