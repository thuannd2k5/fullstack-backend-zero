const User = require("../models/user");
const { uploadSingleFile, uploadMultipleFile } = require("../services/fileService");

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


const deleteUserApi = async (req, res) => {
    const userId = req.body.id;
    // await getDeleteUserById(userId);
    let result = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const postUploadSingleFileApi = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingleFile(req.files.image);
    console.log("check result >>> ", result)

    res.send('File uploaded!');
}

const postUploadMultipleFileApi = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
    }

    if (Array.isArray(req.files.image)) {
        let result = await uploadMultipleFile(req.files.image);
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    } else {
        //upload single 
        return await postUploadSingleFileApi(req, res);
    }

}

module.exports = {
    getUsersApi, postCreateUsersApi, putUpdateUsersApi, deleteUserApi,
    postUploadSingleFileApi, postUploadMultipleFileApi
}