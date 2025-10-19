const connection = require("../config/database");

const HomeController = (req, res) => {
    //process data
    let users = []

    connection.query(
        'SELECT * from Users u ;',
        function (err, results, fields) {
            users = results;
            console.log("results >>> : ", results); // results contains rows returned by server
            console.log(">>>> check user : ", users)
            res.send(JSON.stringify(users))
        }

    );

}

module.exports = {
    HomeController
}