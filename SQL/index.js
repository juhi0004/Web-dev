const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");

const app = express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'root'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

let data = [];

for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
}

let q = "INSERT INTO user(id, username, email, password) VALUES ?";

connection.query(q, [data], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("100 users inserted");
});
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});

app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM user`;

    connection.query(q, (err, result) => {
        if (err) {
            let count= result[0]["count(*)"];
            console.log(err);
            return res.render("home.ejs",{count});
        }

        res.send(result);
    });
});



