const connection = require("../config/database");
const User = require("../models/user");
const { getUserById, updateUserById, getDeleteUserById } = require("../services/CRUDService");

const HomeController = async (req, res) => {
    const results = await User.find({});
    return res.render("home", {
        listUsers: results
    })

}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city
    })

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

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.render("delete", { user: user })
}


const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.id;
    await getDeleteUserById(userId);
    res.redirect("/")
}

module.exports = {
    HomeController, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
}