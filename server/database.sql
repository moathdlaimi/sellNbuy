CREATE DATABASE sellnbuy;

CREATE TABLE main 
(id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
condition TEXT NOT NULL,
imageurl TEXT NOT NULL,
description TEXT NOT NULL,
price INT NOT NULL 
);

INSERT INTO main (title,condition,imageurl,description,price) 
VALUES ('Monitor','used', 'url', 'apple monitor', 250);

INSERT INTO main (title,condition,imageurl,description,price) 
VALUES ('iPhone','used', 'url', 'space gray', 350);

INSERT INTO main (title,condition,imageurl,description,price) 
VALUES ('Watch','used', 'url', 'Needs battery', 150);