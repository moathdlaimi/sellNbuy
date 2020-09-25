const express = require('express');
const pool = require('../database.js');
const main = express.Router();

//SHOW PAGE
main.get('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const singleRow = await pool.query("SELECT * FROM main WHERE id = $1", [id])
        res.json(singleRow.rows)
    } catch(err) {
        console.error(err.message)
    }
})

//INDEX
main.get('/', async (req,res) => {
    try {
        const data = await pool.query("SELECT * FROM main")
        res.json(data.rows)
    } catch(err){
        console.error(err.message)
    }
})

//CREATE NEW DATA
main.post('/', async (req,res) => {
    try {
        const { title, imageurl, description, price } = req.body
        const newData = await pool.query("INSERT INTO main (title, imageurl, description, price) VALUES ($1,$2,$3,$4) RETURNING *",
        [title,imageurl,description,price])
        res.json(newData.rows)
    } catch(err) {
        console.error(err.message)
    }
})

//DELETE DATA
main.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params 
        const deletedData = await pool.query("DELETE FROM main WHERE id = $1 RETURNING *", [id])
        res.json(deletedData.rows)
    } catch(err) {
        console.error(err.message)
    }
})


//UPDATE DATA
main.put('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const { title, imageurl, description, price } = req.body
        const updatedData = await   pool.query(
            "UPDATE main SET title = $1, imageurl = $2, description = $3, price = $4 WHERE id = $5 RETURNING *",
            [title,imageurl,description,price,id]
        )
        res.json(updatedData.rows)
    } catch (err) {
        console.error(err.message)
    }
})


module.exports = main;