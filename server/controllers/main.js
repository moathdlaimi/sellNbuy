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
        const { title,condition, imageurl, description, price } = req.body
        const newData = await pool.query("INSERT INTO main (title,condition,imageurl, description, price) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [title,condition,imageurl,description,price])
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
        const { title, condition, imageurl, description, price } = req.body
        const updatedData = await   pool.query(
            "UPDATE main SET title = $1, condition = $2, imageurl = $3, description = $4, price = $5 WHERE id = $6 RETURNING *",
            [title,condition,imageurl,description,price,id]
        )
        res.json(updatedData.rows)
    } catch (err) {
        console.error(err.message)
    }
})


module.exports = main;