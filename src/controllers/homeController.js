const connection = require("../config/database");
const { getAllUser, getUserById, updateUserById } = require("../services/CRUDService");

const HomeController = async (req, res) => {
    const results = await getAllUser();
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


const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.render('edit', { user: user })
}


const postUpdateUser = async (req, res) => {
    let userId = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    const updateUser = await updateUserById(email, name, city, userId);
    res.redirect("/")
}


module.exports = {
    HomeController, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser
}