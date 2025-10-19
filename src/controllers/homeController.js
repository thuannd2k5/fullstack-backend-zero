const connection = require("../config/database");

const HomeController = (req, res) => {
    return res.render("home")

}

const postCreateUser = (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?,?)`,
        [email, name, city],
        function (err, results) {
            res.send("create user success")
        }
    );
}

module.exports = {
    HomeController, postCreateUser
}