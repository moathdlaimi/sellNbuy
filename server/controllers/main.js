const express = require('express');
const pool = require('../database.js');
const main = express.Router();
// const aws = require('aws-sdk');

// require('dotenv').config(); //Configure dotenv to load in the .env file
// aws.config.update({
//     region: 'us-west-1',
//     accessKeyId: process.env.AWSAccessKeyId,
//     secretAccessKey: process.env.AWSSecretKey
// })

// const S3_BUCKET = process.env.Bucket 
// exports.sign_S3 = (req,res) => {
//     const s3 = new aws.S3(); //creating new instance of S3
//     const fileName = req.body.fileName;
//     const fileType = req.body.fileType;

//     const s3Params = {
//         Bucket: S3_BUCKET,
//         Key: fileName,
//         Expires: 500,
//         ContentType: fileType,
//         ACL: 'public-read'
//     };

//     // Making a request to the S3 API to get a signed URL which we can use to upload our file

//     s3.getSignedUrl('putObject', s3Params, (err, data) => {
//         if(err){
//             console.log(err)
//             res.json({success:false, error:err})
//         }

//         // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
//         const returnData = {
//             signedRequest: data,
//             url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//         };

//         //send it all back
//         res.json({success:true, data:{returnData}});
//     })

// }


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
        const { title, condition, imageurl, description, price } = req.body
        const newData = await pool.query("INSERT INTO main (title, condition, imageurl, description, price) VALUES ($1,$2,$3,$4,$5) RETURNING *",
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