require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const pool = require('./db/db.js');

app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'))
}

app.get('/api/shipping', async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM shipping");
        res.json(data.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.get('/api/target_questions', async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM target_questions");
        res.json(data.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.get('/api/label', async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM label");
        res.json(data.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
