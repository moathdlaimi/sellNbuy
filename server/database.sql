CREATE DATABASE sellnbuy;

CREATE TABLE main 
(id SERIAL PRIMARY KEY,
title TEXT ,
condition TEXT ,
imageurl TEXT ,
description TEXT ,
price INT  
);

INSERT INTO main (title,condition,imageurl,description,price) 
VALUES ('Monitor','used', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-27-selection-hero-202008?wid=892&hei=820&&qlt=80&.v=1594932848000', 'apple monitor', 250);

INSERT INTO main (title,condition,imageurl,description,price) 
VALUES ('iPhone','used', 'https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png', 'space gray', 350);

INSERT INTO main (title,condition,imageurl,description,price) 
VALUES ('Watch','used', 'https://www.suunto.com/globalassets/productimages/suunto-traverse-alpha/suunto-traverse-alpha-stealth/ss022469000_suunto_traverse_alpha_stealth_perspective_view_moon_phase_negative.png?height=550&format=jpg&bgcolor=f6f6f6', 'Needs battery', 150);