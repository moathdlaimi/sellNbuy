CREATE DATABASE sellnbuy;

CREATE TABLE main 
(id SERIAL PRIMARY KEY, 
title TEXT NOT NULL,
imageurl TEXT NOT NULL,
description TEXT NOT NULL,
price INT NOT NULL 
);

INSERT INTO main (title,imageurl,description,price) 
VALUES ('Monitor', 'url', 'Like new apple monitor', 250);