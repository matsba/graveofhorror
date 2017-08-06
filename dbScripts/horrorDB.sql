DROP DATABASE IF EXISTS horrorDB;

CREATE DATABASE horrorDB;

USE horrorDB;

CREATE TABLE movies (
    id int(255) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    releaseDate DATETIME NOT NULL,
    originalReleaseYear VARCHAR(255),
    coverArtUrl VARCHAR(255),
    region VARCHAR(255),
    primary key (id)
)

ALTER TABLE movies CHANGE id id INT(255)AUTO_INCREMENT PRIMARY KEY;