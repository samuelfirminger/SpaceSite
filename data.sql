DROP TABLE IF EXISTS Missions;

CREATE TABLE IF NOT EXISTS Missions (
 name text,
 missionNum INT,
 destination text,
 launched INT,
 cost INT,
 
 PRIMARY KEY(name, missionNum)
);

INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("Apollo" , 8, "Moon", 1968, 1);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("Apollo", 10, "Moon", 1969, 2);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("Apollo", 11, "Moon", 1969, 3);
INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("Apollo", 12, "Moon", 1969, 4);

INSERT INTO Missions(name, missionNum, destination, launched, cost) VALUES("Voyager", 1, "Outer Solar System", 1977, 4);