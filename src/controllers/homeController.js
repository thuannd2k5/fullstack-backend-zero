const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDService");

const HomeController = async (req, res) => {
    const results = await getAllUser();
    console.log("results:", results)
    return res.render("home", {
        listUsers: results
    })

}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send("create user success")
    //     }
    // );
    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)VALUES (?, ?,?)`, [email, name, city],);

    res.send("create user success")
}

const getCreatePage = (req, res) => {
    res.render('create')
}


const getUpdatePage = (req, res) => {
    res.render('edit')
}



module.exports = {
    HomeController, postCreateUser, getCreatePage, getUpdatePage
}