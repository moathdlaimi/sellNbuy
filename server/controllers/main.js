const express = require('express');
const data_pool = require('../database.js');
const main = express.Router();


main.get('/', async (req,res) => {
    try {
        const data = await data_pool.query("SELECT * FROM main")
        res.json(data.rows)
    } catch(err){
        console.log(err)
    }
})

main.post('/', async (req,res) => {
    try {
        const { title, imageurl, description, price } = req.body
        const newData = await data_pool.query("INSERT INTO main (title, imageurl, description, price) VALUES ($1,$2,$3,$4) RETURNING *",
        [title,imageurl,description,price])
        res.json(newData.rows)
    } catch(err) {
        console.log(err)
    }
})



module.exports = main;