const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Sagarmohite1556",
    database: "management"
});

app.get("/reports/summary", (req, res) => {
    db.query("SELECT * FROM report_summary", (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows[0]);
    });
});


app.get("/reports/collection", (req, res) => {
    db.query("SELECT * FROM report_fee_collection ORDER BY date DESC", (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});


app.get("/reports/dues", (req, res) => {
    db.query("SELECT * FROM report_dues", (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

app.listen(4500, () => {
    console.log("Reports Server running on http://localhost:4500");
});
