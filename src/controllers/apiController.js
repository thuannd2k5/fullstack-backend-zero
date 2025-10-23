const User = require("../models/user");

const getUsersApi = async (req, res) => {
    const results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })

}


const postCreateUsersApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })

    return res.status(200).json({
        errorCode: 0,
        data: user
    })

}

const putUpdateUsersApi = async (req, res) => {
    let userId = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(userId, email, name, city)
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });

    return res.status(200).json({
        errorCode: 0,
        data: user
    })

}

module.exports = { getUsersApi, postCreateUsersApi, putUpdateUsersApi }