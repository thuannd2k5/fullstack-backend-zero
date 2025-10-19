const connection = require("../config/database");

const HomeController = (req, res) => {
    return res.render("home")

}

module.exports = {
    HomeController
}